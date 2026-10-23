/*
 * Runs after `react-scripts build` and `generate-seo-pages.js`.
 *
 * Opens every page from build/sitemap.xml in headless Chrome, waits until it
 * has rendered, and saves the finished page content into that page's HTML
 * file. Search engines, link previews (WhatsApp, LinkedIn) and visitors then
 * get the real text straight away, before any JavaScript runs. When the app
 * loads it takes over from this saved copy (see src/index.js).
 *
 * Needs Google Chrome. Set CHROME_PATH if it isn't in the usual place.
 * If Chrome can't be found, the step is skipped with a warning.
 */
const fs = require("fs");
const path = require("path");
const http = require("http");

const ROOT = path.resolve(__dirname, "..");
const BUILD = path.join(ROOT, "build");
const SITE_URL = "https://zuviuslifesciences.in";
const CONCURRENCY = 4;
const EMPTY_ROOT = '<div id="root"></div>';

const CHROME_CANDIDATES = [
  process.env.CHROME_PATH,
  "C:/Program Files/Google/Chrome/Application/chrome.exe",
  "C:/Program Files (x86)/Google/Chrome/Application/chrome.exe",
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  "/usr/bin/google-chrome",
  "/usr/bin/chromium-browser",
  "/usr/bin/chromium",
].filter(Boolean);

const TYPES = {
  ".html": "text/html; charset=utf-8", ".js": "text/javascript", ".css": "text/css",
  ".json": "application/json", ".png": "image/png", ".jpg": "image/jpeg", ".jpeg": "image/jpeg",
  ".webp": "image/webp", ".gif": "image/gif", ".svg": "image/svg+xml", ".mp4": "video/mp4",
  ".pdf": "application/pdf", ".ico": "image/x-icon", ".xml": "application/xml",
};

// Serves build/ the way the live server does: real file, then <address>/index.html, else 404.html.
function startServer() {
  const server = http.createServer((req, res) => {
    const urlPath = decodeURIComponent(req.url.split("?")[0]);
    let file = path.join(BUILD, urlPath);
    let status = 200;
    if (!(fs.existsSync(file) && fs.statSync(file).isFile())) {
      const index = path.join(file, "index.html");
      if (fs.existsSync(index)) file = index;
      else { file = path.join(BUILD, "404.html"); status = 404; }
    }
    res.writeHead(status, { "Content-Type": TYPES[path.extname(file).toLowerCase()] || "application/octet-stream" });
    fs.createReadStream(file).pipe(res);
  });
  return new Promise((resolve) => server.listen(0, "127.0.0.1", () => resolve(server)));
}

function pageFile(pagePath) {
  if (pagePath === "/") return path.join(BUILD, "index.html");
  return path.join(BUILD, ...pagePath.split("/").filter(Boolean), "index.html");
}

// Runs inside the page: returns the rendered app markup, trimmed for size.
function snapshot() {
  const root = document.getElementById("root");
  const clone = root.cloneNode(true);
  // The animated reach maps are large drawings; the app redraws them anyway.
  clone.querySelectorAll("svg.reach-map").forEach((svg) => { svg.innerHTML = ""; });
  clone.querySelectorAll("[data-no-prerender]").forEach((el) => el.remove());
  return clone.innerHTML;
}

async function main() {
  const chrome = CHROME_CANDIDATES.find((p) => fs.existsSync(p));
  if (!chrome) {
    console.warn("[prerender] Chrome not found, skipping. Set CHROME_PATH to enable pre-rendering.");
    return;
  }
  let puppeteer;
  try {
    puppeteer = require("puppeteer-core");
  } catch {
    console.warn("[prerender] puppeteer-core is not installed, skipping (run npm install).");
    return;
  }

  const sitemap = fs.readFileSync(path.join(BUILD, "sitemap.xml"), "utf8");
  const paths = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1].replace(SITE_URL, "") || "/");

  const server = await startServer();
  const base = `http://127.0.0.1:${server.address().port}`;
  const browser = await puppeteer.launch({ executablePath: chrome, headless: "new" });

  let next = 0;
  let done = 0;
  const failed = [];

  async function worker() {
    const page = await browser.newPage();
    await page.setViewport({ width: 1366, height: 900 });
    while (next < paths.length) {
      const pagePath = paths[next++];
      try {
        await page.goto(base + pagePath, { waitUntil: "networkidle0", timeout: 60000 });
        // Wait until the page's own content (not the loading placeholder) is in place.
        await page.waitForFunction(
          () => {
            const main = document.querySelector("#root main");
            return main && main.children.length > 0 && !document.querySelector("#root [data-route-loading]");
          },
          { timeout: 20000 }
        );
        const html = await page.evaluate(snapshot);
        const file = pageFile(pagePath);
        const source = fs.readFileSync(file, "utf8");
        if (!source.includes(EMPTY_ROOT)) throw new Error("no empty root in " + file);
        fs.writeFileSync(file, source.replace(EMPTY_ROOT, `<div id="root" data-prerendered="true">${html}</div>`));
      } catch (err) {
        failed.push(`${pagePath}: ${err.message.split("\n")[0]}`);
      }
      done++;
      if (done % 50 === 0) console.log(`[prerender] ${done}/${paths.length}`);
    }
    await page.close();
  }

  await Promise.all(Array.from({ length: CONCURRENCY }, worker));
  await browser.close();
  server.close();

  console.log(`[prerender] ${paths.length - failed.length}/${paths.length} pages pre-rendered.`);
  if (failed.length) {
    console.warn("[prerender] Not pre-rendered (they still work, just without saved content):\n  " + failed.join("\n  "));
  }
}

main().catch((err) => {
  console.error("[prerender] failed:", err);
  process.exit(1);
});
