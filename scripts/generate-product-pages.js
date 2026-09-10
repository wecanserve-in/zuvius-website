const fs = require("fs");
const path = require("path");
const vm = require("vm");

const ROOT = path.resolve(__dirname, "..");
const PRODUCT_DATA_FILE = path.join(ROOT, "src", "products","productdata.js");
const BUILD_DIR = path.join(ROOT, "build");

const BASE_URL = "https://zuviuslifesciences.in";

function escapeHtml(value) {
  return String(value || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function cleanText(value) {
  return String(value || "")
    .replace(/\s+/g, " ")
    .trim();
}

function getProducts() {
  let source = fs.readFileSync(PRODUCT_DATA_FILE, "utf8");

  /*
   * productdata.js uses:
   *
   * export const productCategories = [...]
   * export const products = [...]
   *
   * Convert the exports into normal Node variables and evaluate
   * the data file without adding another dependency.
   */
  source = source.replace(/export\s+const\s+/g, "const ");

  source += `
    ;module.exports = {
      products
    };
  `;

  const sandbox = {
    module: { exports: {} },
    exports: {},
  };

  vm.runInNewContext(source, sandbox, {
    filename: PRODUCT_DATA_FILE,
  });

  return sandbox.module.exports.products || [];
}

function getProductImage(product) {
  const image =
    product.metaImage ||
    product.image ||
    (Array.isArray(product.images) ? product.images[0] : "");

  if (!image) {
    return `${BASE_URL}/zuvius-logo.png`;
  }

  if (image.startsWith("http://") || image.startsWith("https://")) {
    return image;
  }

  return `${BASE_URL}${image.startsWith("/") ? "" : "/"}${image}`;
}

function getDescription(product) {
  if (product.metaDescription) {
    return cleanText(product.metaDescription).slice(0, 300);
  }

  const name = cleanText(product.name);
  const subtitle = cleanText(product.subtitle);

  let description = `Explore ${name}`;

  if (subtitle) {
    description += `, ${subtitle}`;
  }

  description +=
    " by Zuvius Lifesciences. View product details, available strength, pack size, drug class and other product information.";

  return description.slice(0, 300);
}

function getTitle(product) {
  if (product.metaTitle) {
    return cleanText(product.metaTitle);
  }

  const name = cleanText(product.name);
  const subtitle = cleanText(product.subtitle);

  if (subtitle) {
    return `${name} | ${subtitle} | Zuvius Lifesciences`;
  }

  return `${name} | Zuvius Lifesciences`;
}

function createProductHtml(baseHtml, product) {
  const title = getTitle(product);
  const description = getDescription(product);

  const productUrl =
    `${BASE_URL}/products/` +
    `${encodeURIComponent(product.category)}/` +
    `${encodeURIComponent(product.slug)}`;

  const image = getProductImage(product);

  let html = baseHtml;

  // Remove existing title
  html = html.replace(/<title>[\s\S]*?<\/title>/i, "");

  // Remove existing description
  html = html.replace(
    /<meta\s+name=["']description["'][^>]*>/gi,
    ""
  );

  // Remove existing Open Graph tags
  html = html.replace(
    /<meta\s+property=["']og:[^"']+["'][^>]*>/gi,
    ""
  );

  // Remove existing Twitter tags
  html = html.replace(
    /<meta\s+name=["']twitter:[^"']+["'][^>]*>/gi,
    ""
  );

  // Remove existing canonical
  html = html.replace(
    /<link\s+rel=["']canonical["'][^>]*>/gi,
    ""
  );

  const metaTags = `
    <title>${escapeHtml(title)}</title>

    <meta
      name="description"
      content="${escapeHtml(description)}"
    />

    <link
      rel="canonical"
      href="${escapeHtml(productUrl)}"
    />

    <meta
      property="og:type"
      content="website"
    />

    <meta
      property="og:url"
      content="${escapeHtml(productUrl)}"
    />

    <meta
      property="og:title"
      content="${escapeHtml(title)}"
    />

    <meta
      property="og:description"
      content="${escapeHtml(description)}"
    />

    <meta
      property="og:image"
      content="${escapeHtml(image)}"
    />

    <meta
      property="og:site_name"
      content="Zuvius Lifesciences"
    />

    <meta
      name="twitter:card"
      content="summary_large_image"
    />

    <meta
      name="twitter:url"
      content="${escapeHtml(productUrl)}"
    />

    <meta
      name="twitter:title"
      content="${escapeHtml(title)}"
    />

    <meta
      name="twitter:description"
      content="${escapeHtml(description)}"
    />

    <meta
      name="twitter:image"
      content="${escapeHtml(image)}"
    />
  `;

  html = html.replace(
    /<\/head>/i,
    `${metaTags}\n</head>`
  );

  return html;
}

function generatePages() {
  if (!fs.existsSync(BUILD_DIR)) {
    console.error("❌ build folder not found.");
    console.error("Run this after `react-scripts build`.");
    process.exit(1);
  }

  const baseIndexPath = path.join(BUILD_DIR, "index.html");

  if (!fs.existsSync(baseIndexPath)) {
    console.error("❌ build/index.html not found.");
    process.exit(1);
  }

  const baseHtml = fs.readFileSync(baseIndexPath, "utf8");

  const products = getProducts();

  if (!Array.isArray(products) || products.length === 0) {
    console.error("❌ No products found in productdata.js");
    process.exit(1);
  }

  let generated = 0;

  products.forEach((product) => {
    if (!product || !product.slug || !product.category) {
      return;
    }

    const productDir = path.join(
      BUILD_DIR,
      "products",
      product.category,
      product.slug
    );

    fs.mkdirSync(productDir, {
      recursive: true,
    });

    const productHtml = createProductHtml(
      baseHtml,
      product
    );

    fs.writeFileSync(
      path.join(productDir, "index.html"),
      productHtml,
      "utf8"
    );

    generated++;
  });

  console.log("");
  console.log("========================================");
  console.log(" Product SEO Pages Generated");
  console.log("========================================");
  console.log(` Products found : ${products.length}`);
  console.log(` Pages created  : ${generated}`);
  console.log("");
  console.log("Example:");
  console.log(
    " /products/oncoace/acalataz/index.html"
  );
  console.log("========================================");
}

generatePages();