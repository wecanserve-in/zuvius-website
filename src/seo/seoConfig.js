/*
 * Single source of truth for page titles, descriptions and share images.
 *
 * Used in two places:
 *   - In the browser, by useSEO (src/seo/useSEO.js) as visitors move between pages.
 *   - At build time, by scripts/generate-seo-pages.js and
 *     scripts/generate-product-pages.js, which write a ready-made HTML file per page.
 *
 * Keep this file free of imports so the build scripts can load it directly.
 */

export const SITE_URL = "https://zuviuslifesciences.in";
export const SITE_NAME = "Zuvius Lifesciences";
export const DEFAULT_IMAGE = "/og-image.jpg";

export const STATIC_PAGES = {
  "/": {
    title: "Anticancer & Oncology Drug Manufacturer | Zuvius Lifesciences",
    description:
      "Zuvius Lifesciences - Global manufacturer of the widest range of anticancer and oncology formulations. Dedicated EU GMP & PIC/S approved facilities providing high-quality chemotherapy solutions.",
  },
  "/products": {
    title: "Anticancer & Oncology Drugs | Zuvius Lifesciences",
    description:
      "Explore the oncology pharmaceutical product portfolio of Zuvius Lifesciences, including specialized anticancer treatments and supportive nutraceutical products.",
  },
  "/products/oncoace": {
    title: "OncoAce Anticancer Formulations | Zuvius Lifesciences",
    description:
      "Explore the OncoAce portfolio of specialized oncology drugs and cytotoxic anticancer pharmaceutical products from Zuvius Lifesciences.",
  },
  "/products/nutrazeutica": {
    title: "Nutrazeutica Supportive Oncology Care | Zuvius Lifesciences",
    description:
      "Explore the Nutrazeutica portfolio of nutritional healthcare and supportive oncology products designed for patient wellness by Zuvius Lifesciences.",
  },
  "/aboutus": {
    title: "About Us | Oncology Pharmaceutical Company | Zuvius Lifesciences",
    description:
      "Learn about Zuvius Lifesciences, a global oncology healthcare company headquartered in Mumbai, specializing in chemotherapeutic formulations and cancer care.",
  },
  "/contact": {
    title: "Contact Zuvius Lifesciences | Oncology Pharmaceutical Inquiries",
    description:
      "Contact Zuvius Lifesciences for commercial and distribution enquiries about oncology products, anticancer medicines, institutional supply, and global partnerships.",
  },
  "/careers": {
    title: "Careers at Zuvius Lifesciences | Oncology & Pharma Jobs",
    description:
      "Explore pharmaceutical career opportunities at Zuvius Lifesciences and join an innovative team dedicated to advancing global oncology treatments.",
  },
  "/blog": {
    title: "Oncology Blog & Cancer Insights | Zuvius Lifesciences",
    description:
      "Explore clinical oncology insights, pharmaceutical research, patient guides, and healthcare perspectives from Zuvius Lifesciences.",
  },
  "/press-release": {
    title: "Press Releases & Media Coverage | Zuvius Lifesciences",
    description:
      "Read official press releases, product launches, and oncology corporate announcements from Zuvius Lifesciences.",
  },
  "/awards-recognition": {
    title: "Awards & Recognition | Zuvius Lifesciences",
    description:
      "Explore industry awards, global quality certifications, and international oncology pharmaceutical recognitions achieved by Zuvius Lifesciences.",
  },
  "/events": {
    title: "Events & Oncology Conferences | Zuvius Lifesciences",
    description:
      "Discover upcoming and past oncology conferences, international exhibitions, and medical trade events featuring Zuvius Lifesciences.",
  },
  "/whatiscancer": {
    title: "What Is Cancer? Causes, Spread & Detection | Zuvius Lifesciences",
    description:
      "Learn about cancer biology, early warning signs, oncology treatment modalities, and comprehensive cancer care awareness with Zuvius Lifesciences.",
  },
  "/early-diagnosis": {
    title: "Early Cancer Diagnosis & Screening | Zuvius Lifesciences",
    description:
      "Understand the critical importance of early cancer detection, regular oncology screening, and timely medical intervention for better survival outcomes.",
  },
  "/prevention": {
    title: "Cancer Prevention & Risk Factors | Zuvius Lifesciences",
    description:
      "Learn about evidence-based cancer prevention strategies, lifestyle risk factor reduction, and oncology wellness practices from Zuvius Lifesciences.",
  },
  "/types-of-cancer": {
    title: "Types of Cancer: A–Z Oncology Guides | Zuvius Lifesciences",
    description:
      "Explore detailed oncology guides covering different cancer types, symptoms, staging, and therapeutic treatment pathways.",
  },
  "/csr": {
    title: "CSR & Cancer Awareness Programmes | Zuvius Lifesciences",
    description:
      "Explore corporate social responsibility initiatives, free cancer screening camps, and community oncology care programs supported by Zuvius Lifesciences.",
  },
};

export const NOT_FOUND_SEO = {
  title: "Page Not Found | Zuvius Lifesciences",
  description:
    "The page you are looking for could not be found. Explore oncology products, cancer guides and company information from Zuvius Lifesciences.",
  noindex: true,
};

// Collapse whitespace and cut long text at a word boundary for meta descriptions.
export function summarize(text, max = 160) {
  const clean = String(text || "").replace(/\s+/g, " ").trim();
  if (clean.length <= max) return clean;
  const cut = clean.slice(0, max - 1);
  return cut.slice(0, cut.lastIndexOf(" ")).replace(/[,;:.\s-]+$/, "") + "…";
}

// Google shows about 60-65 characters of a title. Add the brand when it fits,
// fall back to the short brand, and leave it off for very long names.
export const MAX_TITLE = 65;
export function fitTitle(base) {
  const clean = String(base || "").replace(/\s+/g, " ").trim()
    .replace(/\s*\|\s*Zuvius Lifesciences$/i, "");
  if (/Zuvius/i.test(clean)) return clean;
  const options = [`${clean} | ${SITE_NAME}`, `${clean} | Zuvius`, clean];
  return options.find((t) => t.length <= MAX_TITLE) || clean;
}

export function productSEO(product) {
  const subtitle = product.subtitle ? ` | ${product.subtitle}` : "";
  return {
    path: `/products/${product.category}/${product.slug}`,
    title: product.metaTitle || fitTitle(`${product.name}${subtitle}`),
    description:
      product.metaDescription ||
      summarize(
        `${product.name}${product.subtitle ? ` (${product.subtitle})` : ""} by ${SITE_NAME}: strengths, pack size, indications, dosage and storage.`
      ),
    // Built by scripts/generate-product-pages.js for every product.
    image: `/products/${product.category}/${product.slug}/og-image.jpg`,
  };
}

export function cancerSEO(cancer) {
  return {
    path: `/types-of-cancer/${cancer.slug}`,
    title: fitTitle(`${cancer.title}: Symptoms & Treatment`),
    description: summarize(cancer.description || cancer.overview?.intro),
    image: cancer.bannerImg,
  };
}

export function blogSEO(blog) {
  return {
    path: `/blog/${blog.slug}`,
    title: fitTitle(blog.metaTitle || blog.title),
    description: summarize(blog.metaDescription || blog.excerpt),
    image: blog.image,
    type: "article",
  };
}

export function eventSEO(event) {
  return {
    path: `/events/${event.slug}`,
    title: fitTitle(event.title),
    description: summarize(event.description),
    image: event.cardImage || event.images?.[0],
  };
}

// Readable address for a press release, built from its title
// (e.g. "compliance-is-the-biggest-risk-in-healthcare"). Old numbered
// addresses (/press-release/1) redirect here.
export function pressSlug(item) {
  const words = String(item.title || "")
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[^a-z0-9\s-]/g, " ")
    .split(/[\s-]+/)
    .filter(Boolean);
  let slug = "";
  for (const word of words) {
    const next = slug ? `${slug}-${word}` : word;
    if (next.length > 90) break;
    slug = next;
  }
  // Don't end on a filler word ("...interest-to").
  slug = slug.replace(/(-(a|an|and|of|the|to|in|for|with|on|at))+$/, "");
  return slug || String(item.id);
}

export function pressSEO(item) {
  return {
    path: `/press-release/${pressSlug(item)}`,
    title: fitTitle(item.title),
    description: summarize(item.excerpt || item.subheading),
    image: item.heroImage || item.image,
    type: "article",
  };
}

export function csrSEO(story, event) {
  if (event) {
    return {
      path: `/csr/${story.slug}/${event.slug}`,
      title: fitTitle(event.title),
      description: summarize(event.description || story.description),
      image: event.poster || story.poster,
    };
  }
  return {
    path: `/csr/${story.slug}`,
    title: fitTitle(story.title),
    description: summarize(story.description),
    image: story.poster,
  };
}

export function absoluteUrl(pathOrUrl) {
  if (!pathOrUrl) return `${SITE_URL}${DEFAULT_IMAGE}`;
  if (/^https?:\/\//.test(pathOrUrl)) return pathOrUrl;
  const encoded = encodeURI(pathOrUrl.startsWith("/") ? pathOrUrl : `/${pathOrUrl}`);
  return `${SITE_URL}${encoded}`;
}
