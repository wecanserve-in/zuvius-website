const fs = require("fs");
const path = require("path");
const vm = require("vm");
const sharp = require("sharp");

const ROOT = path.resolve(__dirname, "..");

const PRODUCT_DATA_FILE = path.join(
  ROOT,
  "src",
  "products",
  "productdata.js"
);

const BUILD_INDEX_FILE = path.join(
  ROOT,
  "build",
  "index.html"
);

const PRODUCTS_OUTPUT_DIR = path.join(
  ROOT,
  "build",
  "products"
);

const OG_WIDTH = 1200;
const OG_HEIGHT = 630;
const OG_BACKGROUND = "#219b90";


// ============================================================
// HELPERS
// ============================================================

function cleanText(value) {
  if (value === undefined || value === null) {
    return "";
  }

  return String(value)
    .replace(/\s+/g, " ")
    .trim();
}


// ============================================================
// LOAD PRODUCT DATA
// ============================================================

function loadProducts() {
  if (!fs.existsSync(PRODUCT_DATA_FILE)) {
    throw new Error(
      `Product data file not found:\n${PRODUCT_DATA_FILE}`
    );
  }

  let source = fs.readFileSync(
    PRODUCT_DATA_FILE,
    "utf8"
  );

  // Convert ES module export into something Node VM can evaluate.
  source = source.replace(
    /export\s+const\s+products\s*=/,
    "const products ="
  );

  source = source.replace(
    /export\s+const\s+productCategories\s*=/,
    "const productCategories ="
  );

  source += `

module.exports = {
  products,
  productCategories
};
`;

  const sandbox = {
    module: {
      exports: {},
    },
    exports: {},
  };

  vm.createContext(sandbox);

  try {
    vm.runInContext(source, sandbox, {
      filename: PRODUCT_DATA_FILE,
    });
  } catch (error) {
    console.error(
      "Failed to evaluate productdata.js"
    );
    throw error;
  }

  return sandbox.module.exports.products || [];
}


// ============================================================
// PRODUCT IMAGE
// ============================================================

function getProductImage(product) {
  if (
    product.metaImage &&
    typeof product.metaImage === "string"
  ) {
    return product.metaImage;
  }

  if (
    product.image &&
    typeof product.image === "string"
  ) {
    return product.image;
  }

  if (
    Array.isArray(product.images) &&
    product.images.length > 0
  ) {
    return product.images[0];
  }

  return "/zuvius-logo.jpeg";
}


// ============================================================
// FIND LOCAL PRODUCT IMAGE INSIDE BUILD
// ============================================================

function getLocalProductImage(product) {
  const imagePath = getProductImage(product);

  if (!imagePath) {
    return null;
  }

  // Convert URL path such as:
  // /new_product_page/Acalataz-100.png
  //
  // into:
  // build/new_product_page/Acalataz-100.png

  const cleanPath = imagePath
    .split("?")[0]
    .split("#")[0]
    .replace(/^\/+/, "");

  const localPath = path.join(
    ROOT,
    "build",
    cleanPath
  );

  if (fs.existsSync(localPath)) {
    return localPath;
  }

  // Try public folder in case build doesn't contain it.
  const publicPath = path.join(
    ROOT,
    "public",
    cleanPath
  );

  if (fs.existsSync(publicPath)) {
    return publicPath;
  }

  return null;
}


// ============================================================
// CREATE PRODUCT OG IMAGE
// ============================================================
//
// IMPORTANT:
//
// 1. Original product image is NOT redesigned.
// 2. Transparent/empty margins are trimmed.
// 3. Actual product artwork is enlarged.
// 4. Product keeps its original proportions.
// 5. Background is #219b90.
// 6. Final image is 1200x630.
// 7. No black bars.
// ============================================================

async function createOgImage(product, outputPath) {
  const productImagePath =
    getLocalProductImage(product);

  if (!productImagePath) {
    console.warn(
      `⚠ Product image not found for ${product.name}`
    );

    return false;
  }

  try {
    // --------------------------------------------------------
    // STEP 1:
    // Read the original image.
    // --------------------------------------------------------

    const metadata = await sharp(productImagePath)
      .metadata();

    // --------------------------------------------------------
    // STEP 2:
    // Trim empty/transparent margins.
    //
    // This is the important part.
    // If the original PNG contains a large transparent
    // canvas around the medicine pack, this removes it.
    // --------------------------------------------------------

    let trimmedBuffer;

    try {
      trimmedBuffer = await sharp(productImagePath)
        .trim({
          background: {
            r: 255,
            g: 255,
            b: 255,
            alpha: 0,
          },
        })
        .png()
        .toBuffer();
    } catch (trimError) {
      console.warn(
        `⚠ Could not trim ${product.name}, using original image.`
      );

      trimmedBuffer = await sharp(productImagePath)
        .png()
        .toBuffer();
    }

    // --------------------------------------------------------
    // STEP 3:
    // Get trimmed dimensions.
    // --------------------------------------------------------

    const trimmedMetadata = await sharp(
      trimmedBuffer
    ).metadata();

    let trimmedWidth =
      trimmedMetadata.width || metadata.width || 1;

    let trimmedHeight =
      trimmedMetadata.height || metadata.height || 1;

    // --------------------------------------------------------
    // STEP 4:
    // Make the product artwork LARGE.
    //
    // We deliberately use almost the full OG area.
    //
    // Maximum artwork area:
    // 1100 x 580
    //
    // Because fit=contain is used, the product is never
    // stretched or distorted.
    // --------------------------------------------------------

    const maxProductWidth = 1100;
    const maxProductHeight = 580;

    const widthRatio =
      maxProductWidth / trimmedWidth;

    const heightRatio =
      maxProductHeight / trimmedHeight;

    const scale =
      Math.min(widthRatio, heightRatio);

    const finalWidth = Math.max(
      1,
      Math.round(trimmedWidth * scale)
    );

    const finalHeight = Math.max(
      1,
      Math.round(trimmedHeight * scale)
    );

    // --------------------------------------------------------
    // STEP 5:
    // Resize the ACTUAL product artwork.
    // --------------------------------------------------------

    const productBuffer = await sharp(
      trimmedBuffer
    )
      .resize({
        width: finalWidth,
        height: finalHeight,
        fit: "fill",
        kernel: sharp.kernel.lanczos3,
      })
      .ensureAlpha()
      .png()
      .toBuffer();

    // --------------------------------------------------------
    // STEP 6:
    // Create 1200 x 630 background.
    // --------------------------------------------------------

    const background = sharp({
      create: {
        width: OG_WIDTH,
        height: OG_HEIGHT,
        channels: 4,
        background: OG_BACKGROUND,
      },
    });

    // --------------------------------------------------------
    // STEP 7:
    // Center the ORIGINAL product artwork on the
    // #219b90 background.
    // --------------------------------------------------------

    await background
      .composite([
        {
          input: productBuffer,
          gravity: "center",
        },
      ])
      .flatten({
        background: OG_BACKGROUND,
      })
      .jpeg({
        quality: 95,
        chromaSubsampling: "4:4:4",
      })
      .toFile(outputPath);

    return true;

  } catch (error) {
    console.error(
      `⚠ Failed to create OG image for ${product.name}`
    );

    console.error(error);

    return false;
  }
}


// ============================================================
// GENERATE PRODUCT SHARE IMAGE
// ============================================================
//
// The HTML page for each product is written by generate-seo-pages.js
// (which runs next) from src/seo/seoConfig.js. This script only makes
// the 1200x630 share image that page points to.

async function generateProductPage(product) {
  const category = cleanText(product.category);
  const slug = cleanText(product.slug);

  if (!category || !slug || !cleanText(product.name)) {
    console.warn("⚠ Skipping invalid product:", product.slug);
    return { created: false, ogCreated: false };
  }

  const productDir = path.join(PRODUCTS_OUTPUT_DIR, category, slug);
  fs.mkdirSync(productDir, { recursive: true });

  const ogCreated = await createOgImage(product, path.join(productDir, "og-image.jpg"));
  return { created: true, ogCreated };
}

// ============================================================
// MAIN
// ============================================================

async function main() {
  console.log("");
  console.log(
    "=============================================="
  );
  console.log(
    " Zuvius Lifesciences - Product SEO Generator"
  );
  console.log(
    "=============================================="
  );
  console.log("");

  // ----------------------------------------------------------
  // Check build/index.html
  // ----------------------------------------------------------

  if (!fs.existsSync(BUILD_INDEX_FILE)) {
    throw new Error(
      "build/index.html not found. Run npm run build first."
    );
  }

  // ----------------------------------------------------------
  // Load products
  // ----------------------------------------------------------

  const products =
    loadProducts();

  console.log(
    `Products found : ${products.length}`
  );

  // ----------------------------------------------------------
  // Make sure products directory exists
  // ----------------------------------------------------------

  fs.mkdirSync(
    PRODUCTS_OUTPUT_DIR,
    {
      recursive: true,
    }
  );

  let pagesCreated = 0;
  let ogImagesCreated = 0;

  // ----------------------------------------------------------
  // Generate every product page
  // ----------------------------------------------------------

  for (const product of products) {
    const result =
      await generateProductPage(product);

    if (result.created) {
      pagesCreated++;
    }

    if (result.ogCreated) {
      ogImagesCreated++;
    }
  }

  // ----------------------------------------------------------
  // Summary
  // ----------------------------------------------------------

  console.log("");
  console.log(
    "=============================================="
  );
  console.log(
    " Product SEO Generation Complete"
  );
  console.log(
    "=============================================="
  );

  console.log(
    `Products found       : ${products.length}`
  );

  console.log(
    `Products processed   : ${pagesCreated}`
  );

  console.log(
    `OG images generated  : ${ogImagesCreated}`
  );

  console.log(
    `OG background        : ${OG_BACKGROUND}`
  );

  console.log(
    `OG size              : ${OG_WIDTH}x${OG_HEIGHT}`
  );

  console.log("");
}


main().catch((error) => {
  console.error("");
  console.error(
    "❌ Product SEO generation failed."
  );
  console.error(error);
  process.exit(1);
});