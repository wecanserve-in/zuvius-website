/*
 * Runs after `react-scripts build`. For every page on the site it writes a
 * ready-made HTML file (build/<address>/index.html) carrying that page's own
 * title, description, canonical link, share preview and structured data, so
 * Google and WhatsApp/LinkedIn previews see the right details without running
 * any JavaScript. It also writes build/sitemap.xml and build/404.html.
 *
 * Titles and descriptions come from src/seo/seoConfig.js (the same file the
 * app uses in the browser), so the two can never drift apart.
 */
const fs = require("fs");
const path = require("path");
const { loadModule, ROOT } = require("./lib/load-module");

const BUILD_DIR = path.join(ROOT, "build");
const TEMPLATE_FILE = path.join(BUILD_DIR, "index.html");

const seo = loadModule("src/seo/seoConfig.js");
const { products } = loadModule("src/products/productdata.js");
const cancers = loadModule("src/cancersData.js").default;
const blogs = loadModule("src/blog/blogdata.js").default;
const { eventsData } = loadModule("src/events/eventsdata.js");
const { pressItems } = loadModule("src/media/mediaData.js");
const { journeyData } = loadModule("src/csr/journeydata.js");

const ORGANIZATION = {
  "@type": "Organization",
  "@id": `${seo.SITE_URL}/#organization`,
  name: seo.SITE_NAME,
  legalName: "Zuvius Lifesciences Pvt Ltd",
  url: `${seo.SITE_URL}/`,
  logo: `${seo.SITE_URL}/zuvius-logo.jpeg`,
  description:
    "Manufacturer of widest range of anticancer drugs in the world with dedicated EU GMP & PIC/S approved facilities.",
  foundingDate: "2005",
  address: {
    "@type": "PostalAddress",
    streetAddress:
      "B/106-113, Link Road, near Everest Gardens, Sawali Society, Laxmi Nagar, Ghatkopar East",
    addressLocality: "Mumbai",
    addressRegion: "Maharashtra",
    postalCode: "400075",
    addressCountry: "IN",
  },
  sameAs: [
    "https://www.facebook.com/ZuviusIndia/",
    "https://www.instagram.com/zuviuslifesciences/",
    "https://www.youtube.com/@zuviuslifesciences",
    "https://www.linkedin.com/company/zuvius-lifesciences-pvt-ltd-/",
  ],
};

// ------------------------------------------------------------------
// Page list
// ------------------------------------------------------------------

const SECTION_NAMES = {
  products: "Products",
  "types-of-cancer": "Types of Cancer",
  blog: "Blog",
  events: "Events",
  "press-release": "Press Releases",
  csr: "CSR",
};

function staticPageName(pagePath) {
  if (pagePath === "/") return "Home";
  return seo.STATIC_PAGES[pagePath].title.split("|")[0].trim();
}

function buildPages() {
  const pages = [];
  const add = (page, crumbs, extra = {}) => pages.push({ ...page, crumbs, ...extra });

  for (const pagePath of Object.keys(seo.STATIC_PAGES)) {
    const page = { ...seo.STATIC_PAGES[pagePath], path: pagePath };
    const crumbs = [["Home", "/"]];
    if (pagePath !== "/") crumbs.push([staticPageName(pagePath), pagePath]);
    add(page, crumbs);
  }

  // OncoAce and Nutrazeutica are filters on the Products page, so product
  // breadcrumbs go Home > Products > product.
  for (const product of products) {
    if (!product.category || !product.slug || !product.name) continue;
    const page = seo.productSEO(product);
    add(page, [
      ["Home", "/"],
      ["Products", "/products"],
      [product.name.trim(), page.path],
    ], { productImage: true, product });
  }

  const detail = (section, page, name, extra) =>
    add(page, [["Home", "/"], [SECTION_NAMES[section], `/${section}`], [name, page.path]], extra);

  for (const cancer of cancers) detail("types-of-cancer", seo.cancerSEO(cancer), cancer.title);
  for (const blog of blogs) {
    detail("blog", seo.blogSEO(blog), blog.title, { article: blog.title, date: blog.date });
  }
  for (const event of eventsData) detail("events", seo.eventSEO(event), event.title);
  for (const item of pressItems) {
    detail("press-release", seo.pressSEO(item), item.title, { article: item.title });
  }
  for (const story of journeyData) {
    detail("csr", seo.csrSEO(story), story.title);
    for (const event of story.events || []) {
      const page = seo.csrSEO(story, event);
      add(page, [
        ["Home", "/"],
        ["CSR", "/csr"],
        [story.title, `/csr/${story.slug}`],
        [event.cardTitle || event.title, page.path],
      ]);
    }
  }

  return pages;
}

// ------------------------------------------------------------------
// HTML
// ------------------------------------------------------------------

function escapeHtml(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function setTag(html, pattern, tag) {
  return pattern.test(html) ? html.replace(pattern, tag) : html.replace("</head>", `${tag}</head>`);
}

const meta = (attr, key) =>
  new RegExp(`<meta\\s+${attr}=["']${key.replace(/:/g, "\\:")}["'][^>]*>`, "i");

function isoDate(text) {
  const date = new Date(text);
  if (Number.isNaN(date.getTime())) return undefined;
  // Format from local date parts; toISOString() would shift to UTC and lose a day in India.
  const pad = (n) => String(n).padStart(2, "0");
  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`;
}

// Drug / supplement details for Google, taken from the product data.
const DOSAGE_WORDS = /\b(lyophili[sz]ed|liposomal|pegylated|rtu|injections?|inj|tablets?|tabs?|capsules?|caps?|ip|bp|usp|powder|oral|solution|suspension|concentrate|infusion|pfs|pre-filled|syringe|combi|pack|implant|lar|for)\b/gi;
function productData(product, url, imageUrl) {
  const isSupplement = product.category === "nutrazeutica";
  const ingredient = String(product.subtitle || "")
    .replace(/\(.*?\)/g, " ")
    .replace(DOSAGE_WORDS, " ")
    .replace(/\s+/g, " ")
    .trim();
  const data = {
    "@type": isSupplement ? "DietarySupplement" : "Drug",
    name: product.name.trim(),
    url,
    image: imageUrl,
    manufacturer: { "@id": ORGANIZATION["@id"] },
  };
  if (product.description) data.description = seo.summarize(product.description, 300);
  if (!isSupplement) {
    if (ingredient) data.activeIngredient = ingredient;
    if (product.type) data.dosageForm = product.type;
    if (product.strength) data.availableStrength = { "@type": "DrugStrength", description: String(product.strength) };
    if (product.drugClass) data.drugClass = { "@type": "DrugClass", name: product.drugClass };
    data.prescriptionStatus = "https://schema.org/PrescriptionOnly";
  }
  return data;
}

function structuredData(page, url, imageUrl) {
  const graph = [ORGANIZATION];

  if (page.crumbs.length > 1) {
    graph.push({
      "@type": "BreadcrumbList",
      itemListElement: page.crumbs.map(([name, crumbPath], i) => ({
        "@type": "ListItem",
        position: i + 1,
        name,
        item: seo.absoluteUrl(crumbPath),
      })),
    });
  }

  if (page.product) {
    graph.push(productData(page.product, url, imageUrl));
  }

  if (page.article) {
    graph.push({
      "@type": "Article",
      headline: page.article.slice(0, 110),
      description: page.description,
      image: imageUrl,
      url,
      mainEntityOfPage: url,
      datePublished: isoDate(page.date),
      author: { "@id": ORGANIZATION["@id"] },
      publisher: { "@id": ORGANIZATION["@id"] },
    });
  }

  const json = JSON.stringify({ "@context": "https://schema.org", "@graph": graph }, null, 2);
  // "<" is escaped so text inside the data can never close the script tag.
  return `<script type="application/ld+json">\n${json.replace(/</g, "\\u003c")}\n</script>`;
}

// Use the default share image when a page's own image file doesn't exist.
function shareImage(image) {
  if (!image || /^https?:/.test(image)) return image;
  return fs.existsSync(path.join(BUILD_DIR, decodeURI(image))) ? image : seo.DEFAULT_IMAGE;
}

function renderPage(template, page) {
  page = { ...page, image: shareImage(page.image) };
  const url = seo.absoluteUrl(page.path);
  const imageUrl = seo.absoluteUrl(page.image);
  const title = escapeHtml(page.title);
  const description = escapeHtml(page.description);
  let html = template;

  html = html.replace(/<title>[\s\S]*?<\/title>/i, `<title>${title}</title>`);
  html = setTag(html, meta("name", "description"), `<meta name="description" content="${description}" />`);
  html = setTag(html, /<link\s+rel=["']canonical["'][^>]*>/i, `<link rel="canonical" href="${escapeHtml(url)}" />`);
  if (page.noindex) {
    html = setTag(html, meta("name", "robots"), `<meta name="robots" content="noindex, follow" />`);
    html = html.replace(/<link\s+rel=["']canonical["'][^>]*>\s*/i, "");
  }

  html = setTag(html, meta("property", "og:type"), `<meta property="og:type" content="${page.type || "website"}" />`);
  html = setTag(html, meta("property", "og:url"), `<meta property="og:url" content="${escapeHtml(url)}" />`);
  html = setTag(html, meta("property", "og:title"), `<meta property="og:title" content="${title}" />`);
  html = setTag(html, meta("property", "og:description"), `<meta property="og:description" content="${description}" />`);
  html = setTag(html, meta("property", "og:image"), `<meta property="og:image" content="${escapeHtml(imageUrl)}" />`);
  html = setTag(html, meta("property", "og:image:secure_url"), `<meta property="og:image:secure_url" content="${escapeHtml(imageUrl)}" />`);

  // The template's image size/type tags describe the default 1200x630 JPEG.
  // Product share images match that; other pages use photos of other sizes.
  const sameShapeAsDefault = page.productImage || !page.image || page.image === seo.DEFAULT_IMAGE;
  if (!sameShapeAsDefault) {
    html = html
      .replace(/<meta\s+property=["']og:image:(width|height|type)["'][^>]*>\s*/gi, "");
  }

  html = setTag(html, meta("name", "twitter:url"), `<meta name="twitter:url" content="${escapeHtml(url)}" />`);
  html = setTag(html, meta("name", "twitter:title"), `<meta name="twitter:title" content="${title}" />`);
  html = setTag(html, meta("name", "twitter:description"), `<meta name="twitter:description" content="${description}" />`);
  html = setTag(html, meta("name", "twitter:image"), `<meta name="twitter:image" content="${escapeHtml(imageUrl)}" />`);

  html = html.replace(
    /<script\s+type=["']application\/ld\+json["']>[\s\S]*?<\/script>/i,
    page.noindex ? "" : structuredData(page, url, imageUrl)
  );

  return html;
}

function outputFile(pagePath) {
  if (pagePath === "/") return TEMPLATE_FILE;
  const parts = pagePath.split("/").filter(Boolean);
  return path.join(BUILD_DIR, ...parts, "index.html");
}

function sitemap(pages) {
  const urls = pages
    .filter((page) => !page.noindex)
    .map((page) => {
      const lastmod = page.date && isoDate(page.date);
      return [
        "  <url>",
        `    <loc>${escapeHtml(seo.absoluteUrl(page.path))}</loc>`,
        lastmod ? `    <lastmod>${lastmod}</lastmod>` : null,
        "  </url>",
      ]
        .filter(Boolean)
        .join("\n");
    });
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.join("\n")}\n</urlset>\n`;
}

function main() {
  if (!fs.existsSync(TEMPLATE_FILE)) {
    throw new Error("build/index.html not found. Run `npm run build` first.");
  }
  const template = fs.readFileSync(TEMPLATE_FILE, "utf8");
  const seen = new Set();
  const pages = buildPages().filter((page) => {
    if (seen.has(page.path)) {
      console.warn(`⚠ Duplicate page address skipped: ${page.path}`);
      return false;
    }
    seen.add(page.path);
    return true;
  });

  for (const page of pages) {
    const file = outputFile(page.path);
    fs.mkdirSync(path.dirname(file), { recursive: true });
    fs.writeFileSync(file, renderPage(template, page), "utf8");
  }

  const notFound = { ...seo.NOT_FOUND_SEO, path: "/404", crumbs: [] };
  fs.writeFileSync(path.join(BUILD_DIR, "404.html"), renderPage(template, notFound), "utf8");
  fs.writeFileSync(path.join(BUILD_DIR, "sitemap.xml"), sitemap(pages), "utf8");

  console.log(`[SEO] Wrote ${seen.size} pages, 404.html and sitemap.xml (${seen.size} addresses).`);
}

main();
