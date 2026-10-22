/*
 * Shrinks the images in /public without renaming them or changing how they look.
 *
 *   node scripts/optimize-images.js [--dry] [--only <subfolder>] [--backup <dir>]
 *
 * - Country flags are resized to 3x their on-screen size (95 x 65).
 * - Other images wider than MAX_WIDTH are scaled down to MAX_WIDTH.
 * - JPEGs are re-encoded with mozjpeg; PNGs are recompressed.
 * - A file is only replaced when the new version is at least 10% smaller.
 * - Every replaced original is copied to the backup folder first.
 */
const fs = require("fs");
const path = require("path");
const os = require("os");
const sharp = require("sharp");

const ROOT = path.resolve(__dirname, "..");
const PUBLIC_DIR = path.join(ROOT, "public");
const MAX_WIDTH = 1920;
const FLAG_BOX = { width: 285, height: 195 };

const args = process.argv.slice(2);
const dry = args.includes("--dry");
const onlyIdx = args.indexOf("--only");
const only = onlyIdx >= 0 ? args[onlyIdx + 1] : null;
const backupIdx = args.indexOf("--backup");
const BACKUP_DIR =
  backupIdx >= 0
    ? path.resolve(args[backupIdx + 1])
    : path.resolve(ROOT, "..", "zuvius-image-originals");

sharp.cache(false);
sharp.concurrency(1);

function walk(dir, out = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full, out);
    else if (/\.(png|jpe?g)$/i.test(entry.name)) out.push(full);
  }
  return out;
}

// Average per-channel difference (0-255) between two same-size images, with
// transparency flattened so hidden pixels under transparent areas don't count.
async function meanDifference(a, b) {
  const flat = (buf) => sharp(buf).flatten({ background: "#808080" }).raw().toBuffer();
  const [x, y] = await Promise.all([flat(a), flat(b)]);
  let sum = 0;
  for (let i = 0; i < x.length; i++) sum += Math.abs(x[i] - y[i]);
  return sum / x.length;
}

async function optimize(file) {
  const rel = path.relative(PUBLIC_DIR, file);
  const isFlag = rel.split(path.sep)[0] === "Country Logo";
  const isJpeg = /\.jpe?g$/i.test(file);
  const input = fs.readFileSync(file);
  const meta = await sharp(input).metadata();

  // rotate() applies the camera's EXIF orientation before metadata is dropped.
  let img = sharp(input, { failOn: "none" }).rotate();

  if (isFlag) {
    img = img.resize({ ...FLAG_BOX, fit: "inside", withoutEnlargement: true });
  } else {
    // EXIF orientations 5-8 swap width and height.
    const width = meta.orientation >= 5 ? meta.height : meta.width;
    if (width > MAX_WIDTH) img = img.resize({ width: MAX_WIDTH });
  }

  let output;
  if (isJpeg) {
    output = await img.jpeg({ quality: 82, mozjpeg: true }).toBuffer();
  } else {
    // A 256-colour palette is invisible on illustrations and product shots, but
    // can add grain to photos. Measure the difference and fall back to lossless.
    const lossless = await img.clone().png({ compressionLevel: 9, effort: 10 }).toBuffer();
    const palette = await img.clone()
      .png({ compressionLevel: 9, palette: true, quality: 92, effort: 10 })
      .toBuffer();
    output =
      isFlag || (await meanDifference(lossless, palette)) <= 1.5 ? palette : lossless;
  }

  if (output.length >= input.length * 0.9) {
    return { rel, before: input.length, after: input.length, changed: false };
  }

  if (!dry) {
    const backup = path.join(BACKUP_DIR, rel);
    if (!fs.existsSync(backup)) {
      fs.mkdirSync(path.dirname(backup), { recursive: true });
      fs.writeFileSync(backup, input);
    }
    fs.writeFileSync(file, output);
  }
  return { rel, before: input.length, after: output.length, changed: true };
}

(async () => {
  const start = only ? path.join(PUBLIC_DIR, only) : PUBLIC_DIR;
  const files = walk(start);
  let before = 0;
  let after = 0;
  let changed = 0;
  const failed = [];

  // Work on several images at once; each one is CPU-bound.
  let next = 0;
  let done = 0;
  const worker = async () => {
    while (next < files.length) {
      const file = files[next++];
      try {
        const r = await optimize(file);
        before += r.before;
        after += r.after;
        if (r.changed) changed++;
      } catch (err) {
        failed.push(`${path.relative(PUBLIC_DIR, file)}: ${err.message}`);
      }
      if (++done % 100 === 0) console.log(`${done}/${files.length} processed`);
    }
  };
  const workers = Math.max(2, os.cpus().length - 2);
  await Promise.all(Array.from({ length: workers }, worker));

  const mb = (n) => (n / 1024 / 1024).toFixed(1) + " MB";
  console.log(`\n${dry ? "[dry run] " : ""}${changed} of ${files.length} images shrunk`);
  console.log(`Total: ${mb(before)} -> ${mb(after)}`);
  if (!dry) console.log(`Originals backed up to: ${BACKUP_DIR}`);
  if (failed.length) console.log(`Failed (left unchanged):\n  ${failed.join("\n  ")}`);
})();
