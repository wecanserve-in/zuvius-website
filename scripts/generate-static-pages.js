const fs = require("fs");
const path = require("path");

const ROOT = path.resolve(__dirname, "..");
const BUILD_INDEX_FILE = path.join(ROOT, "build", "index.html");
const SITE_URL = "https://zuviuslifesciences.in";

// Define your static page metadata here
const STATIC_PAGES = [
  {
    path: "aboutus",
    title: "About Us | Leading Oncology Pharmaceutical Company | Zuvius Lifesciences",
    description: "Learn about Zuvius Lifesciences, a global oncology healthcare company specializing in chemotherapeutic formulations and cancer care.",
    image: "/og-image.jpg",
  },
  {
    path: "contact",
    title: "Contact Us | Oncology Pharmaceutical Inquiries | Zuvius Lifesciences",
    description: "Contact Zuvius Lifesciences for commercial and distribution enquiries about oncology products, anticancer medicines, and global partnerships.",
    image: "/og-image.jpg",
  },
  {
    path: "careers",
    title: "Careers | Oncology & Pharma Opportunities | Zuvius Lifesciences",
    description: "Explore pharmaceutical career opportunities at Zuvius Lifesciences and join an innovative team advancing global oncology treatments.",
    image: "/og-image.jpg",
  },
  {
    path: "whatiscancer",
    title: "What Is Cancer? | Oncology Education & Awareness | Zuvius Lifesciences",
    description: "Learn about cancer biology, early warning signs, oncology treatment modalities, and comprehensive cancer care awareness with Zuvius Lifesciences.",
    image: "/og-image.jpg",
  },
  {
    path: "newsroom",
    title: "Newsroom & Oncology Updates | Zuvius Lifesciences",
    description: "Read the latest oncology news, company updates, research milestones, and pharmaceutical developments from Zuvius Lifesciences.",
    image: "/og-image.jpg",
  },
  {
    path: "awards-recognition",
    title: "Awards & Recognition | Oncology Excellence | Zuvius Lifesciences",
    description: "Explore industry awards, global quality certifications, and international oncology pharmaceutical recognitions achieved by Zuvius Lifesciences.",
    image: "/og-image.jpg",
  },
];

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function replaceOrAddMeta(html, regex, replacement) {
  if (regex.test(html)) {
    return html.replace(regex, replacement);
  }
  return html.replace("</head>", `  ${replacement}\n</head>`);
}

function generateStaticPage(page, baseHtml) {
  const pageDir = path.join(ROOT, "build", page.path);
  fs.mkdirSync(pageDir, { recursive: true });

  const pageUrl = `${SITE_URL}/${page.path}`;
  const imageUrl = `${SITE_URL}${page.image.startsWith("/") ? "" : "/"}${page.image}`;

  let html = baseHtml;

  // Title
  html = html.replace(/<title>[\s\S]*?<\/title>/i, `<title>${escapeHtml(page.title)}</title>`);

  // Meta Description & Canonical
  html = replaceOrAddMeta(html, /<meta\s+name=["']description["'][^>]*>/i, `<meta name="description" content="${escapeHtml(page.description)}" />`);
  html = replaceOrAddMeta(html, /<link\s+rel=["']canonical["'][^>]*>/i, `<link rel="canonical" href="${escapeHtml(pageUrl)}" />`);

  // Open Graph (WhatsApp / Facebook)
  html = replaceOrAddMeta(html, /<meta\s+property=["']og:title["'][^>]*>/i, `<meta property="og:title" content="${escapeHtml(page.title)}" />`);
  html = replaceOrAddMeta(html, /<meta\s+property=["']og:description["'][^>]*>/i, `<meta property="og:description" content="${escapeHtml(page.description)}" />`);
  html = replaceOrAddMeta(html, /<meta\s+property=["']og:url["'][^>]*>/i, `<meta property="og:url" content="${escapeHtml(pageUrl)}" />`);
  html = replaceOrAddMeta(html, /<meta\s+property=["']og:image["'][^>]*>/i, `<meta property="og:image" content="${escapeHtml(imageUrl)}" />`);
  html = replaceOrAddMeta(html, /<meta\s+property=["']og:type["'][^>]*>/i, `<meta property="og:type" content="website" />`);

  // Twitter
  html = replaceOrAddMeta(html, /<meta\s+name=["']twitter:title["'][^>]*>/i, `<meta name="twitter:title" content="${escapeHtml(page.title)}" />`);
  html = replaceOrAddMeta(html, /<meta\s+name=["']twitter:description["'][^>]*>/i, `<meta name="twitter:description" content="${escapeHtml(page.description)}" />`);
  html = replaceOrAddMeta(html, /<meta\s+name=["']twitter:image["'][^>]*>/i, `<meta name="twitter:image" content="${escapeHtml(imageUrl)}" />`);

  fs.writeFileSync(path.join(pageDir, "index.html"), html, "utf8");
}

function main() {
  if (!fs.existsSync(BUILD_INDEX_FILE)) {
    throw new Error("build/index.html not found. Run npm run build first.");
  }

  const baseHtml = fs.readFileSync(BUILD_INDEX_FILE, "utf8");
  for (const page of STATIC_PAGES) {
    generateStaticPage(page, baseHtml);
  }
  console.log(`[Static SEO Generator] Successfully created pages for ${STATIC_PAGES.length} routes.`);
}

main();