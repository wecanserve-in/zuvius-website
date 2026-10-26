/**
 * After-deploy check of the LIVE site, as a first-time visitor sees it.
 *
 *   npm run check-live            check https://zuviuslifesciences.in
 *   npm run check-live -- --warm  first fill Hostinger's CDN with every image,
 *                                 script and style (a few at a time), then check
 *
 * For each page it opens a fresh browser profile (empty cache, like incognito),
 * scrolls to the bottom, waits, then reloads normally and scrolls again. It fails
 * if any file still errors or any image is left broken on screen, and it reports
 * error replies that carry long caching (a browser would keep those errors).
 *
 * Needs Google Chrome (set CHROME_PATH if it isn't in the usual place).
 */
const fs = require("fs");
const path = require("path");
const puppeteer = require("puppeteer-core");

const SITE = process.env.SITE_URL || "https://zuviuslifesciences.in";
const BUILD = path.join(__dirname, "..", "build");
const PAGES = [
  "/",
  "/products",
  "/products/oncoace/cytraz",
  "/products/nutrazeutica/calciboon-zm",
  "/aboutus",
  "/types-of-cancer",
  "/types-of-cancer/anal-cancer",
  "/whatiscancer",
  "/blog",
  "/press-release",
  "/events",
  "/csr",
  "/contact",
];
const CHROME = [
  process.env.CHROME_PATH,
  "C:/Program Files/Google/Chrome/Application/chrome.exe",
  "C:/Program Files (x86)/Google/Chrome/Application/chrome.exe",
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  "/usr/bin/google-chrome",
].find((p) => p && fs.existsSync(p));

const wait = (ms) => new Promise((r) => setTimeout(r, ms));

async function warm() {
  const files = [];
  (function walk(dir) {
    for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
      const f = path.join(dir, e.name);
      if (e.isDirectory()) walk(f);
      else if (/\.(png|jpe?g|webp|gif|svg|js|css)$/i.test(e.name)) files.push(f);
    }
  })(BUILD);
  let next = 0, failed = 0;
  async function worker() {
    while (next < files.length) {
      const rel = path.relative(BUILD, files[next++]).split(path.sep).map(encodeURIComponent).join("/");
      for (let attempt = 0; attempt < 3; attempt++) {
        const res = await fetch(`${SITE}/${rel}`).catch(() => null);
        if (res) await res.arrayBuffer().catch(() => {});
        if (res && res.ok) break;
        if (attempt === 2) failed++;
        await wait(2000 * (attempt + 1));
      }
    }
  }
  await Promise.all(Array.from({ length: 4 }, worker));
  console.log(`[warm] ${files.length} files requested, ${failed} still failing`);
}

async function visit(page) {
  await page.evaluate(async () => {
    for (let y = 0; y < document.body.scrollHeight; y += 400) {
      window.scrollTo(0, y);
      await new Promise((r) => setTimeout(r, 250));
    }
  });
  await wait(6000); // time for the image retry in index.html to finish
  return page.evaluate(() =>
    [...document.images]
      .filter((i) => i.complete && i.naturalWidth === 0 && i.getAttribute("src"))
      .map((i) => i.getAttribute("src"))
  );
}

async function main() {
  if (!CHROME) throw new Error("Chrome not found; set CHROME_PATH");
  if (process.argv.includes("--warm")) await warm();
  const browser = await puppeteer.launch({ executablePath: CHROME, headless: true });
  let problems = 0;
  for (const route of PAGES) {
    const ctx = await browser.createBrowserContext(); // empty cache, like incognito
    const page = await ctx.newPage();
    await page.setViewport({ width: 1366, height: 900 });
    const errors = [];
    let refused = 0;
    page.on("response", (r) => {
      if (r.status() < 400) return;
      if (r.status() === 429) refused++;
      const cc = r.headers()["cache-control"] || "";
      if (/max-age=[1-9]/.test(cc)) errors.push(`${r.status()} WITH LONG CACHING (${cc}) ${r.url()}`);
    });
    page.on("requestfailed", (r) => { if (!/favicon|google|facebook|youtube/.test(r.url())) errors.push(`failed ${r.url()}`); });
    await page.goto(SITE + route, { waitUntil: "load", timeout: 90000 });
    const brokenFirst = await visit(page);
    await page.reload({ waitUntil: "load", timeout: 90000 }); // normal reload, uses the browser's saved copies
    const brokenReload = await visit(page);
    const broken = [...new Set([...brokenFirst, ...brokenReload])];
    const ok = !broken.length && !errors.length;
    if (!ok) problems++;
    console.log(`${ok ? "ok  " : "FAIL"} ${route}${refused ? `  (server refused ${refused} requests, all recovered: ${!broken.length})` : ""}`);
    broken.forEach((b) => console.log(`       broken image: ${b}`));
    [...new Set(errors)].forEach((e) => console.log(`       ${e}`));
    await ctx.close();
  }
  await browser.close();
  console.log(problems ? `\n${problems} page(s) with problems` : "\nAll pages load completely for a first-time visitor.");
  process.exitCode = problems ? 1 : 0;
}

main().catch((e) => { console.error(e); process.exitCode = 1; });
