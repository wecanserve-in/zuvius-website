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
    title:
      "Leading Anticancer & Oncology Drug Manufacturer | Zuvius Lifesciences",
    description:
      "Zuvius Lifesciences - Global manufacturer of the widest range of anticancer and oncology formulations. Dedicated EU GMP & PIC/S approved facilities providing high-quality chemotherapy solutions.",
  },
  "/products": {
    title:
      "Anticancer & Oncology Drugs | Pharmaceutical Portfolio | Zuvius Lifesciences",
    description:
      "Explore the oncology pharmaceutical product portfolio of Zuvius Lifesciences, including specialized anticancer treatments and supportive nutraceutical products.",
  },
  "/products/oncoace": {
    title: "OncoAce | Anticancer & Oncology Formulations | Zuvius Lifesciences",
    description:
      "Explore the OncoAce portfolio of specialized oncology drugs and cytotoxic anticancer pharmaceutical products from Zuvius Lifesciences.",
  },
  "/products/nutrazeutica": {
    title:
      "Nutrazeutica | Nutraceutical & Supportive Oncology Care | Zuvius Lifesciences",
    description:
      "Explore the Nutrazeutica portfolio of nutritional healthcare and supportive oncology products designed for patient wellness by Zuvius Lifesciences.",
  },
  "/aboutus": {
    title: "About Zuvius Lifesciences | Leading Oncology Pharmaceutical Company",
    description:
      "Learn about Zuvius Lifesciences, a global oncology healthcare company headquartered in Mumbai, specializing in chemotherapeutic formulations and cancer care.",
  },
  "/contact": {
    title: "Contact Zuvius Lifesciences | Oncology Pharmaceutical Inquiries",
    description:
      "Contact Zuvius Lifesciences for commercial and distribution enquiries about oncology products, anticancer medicines, institutional supply, and global partnerships.",
  },
  "/careers": {
    title: "Careers at Zuvius Lifesciences | Oncology & Pharma Opportunities",
    description:
      "Explore pharmaceutical career opportunities at Zuvius Lifesciences and join an innovative team dedicated to advancing global oncology treatments.",
  },
  "/newsroom": {
    title: "Newsroom & Oncology Updates | Zuvius Lifesciences",
    description:
      "Read the latest oncology news, company updates, research milestones, and pharmaceutical developments from Zuvius Lifesciences.",
  },
  "/blog": {
    title:
      "Blog | Oncology Insights & Pharmaceutical Articles | Zuvius Lifesciences",
    description:
      "Explore clinical oncology insights, pharmaceutical research, patient guides, and healthcare perspectives from Zuvius Lifesciences.",
  },
  "/press-release": {
    title:
      "Press Releases | Corporate & Oncology Announcements | Zuvius Lifesciences",
    description:
      "Read official press releases, product launches, and oncology corporate announcements from Zuvius Lifesciences.",
  },
  "/awards-recognition": {
    title: "Awards & Recognition | Oncology Excellence | Zuvius Lifesciences",
    description:
      "Explore industry awards, global quality certifications, and international oncology pharmaceutical recognitions achieved by Zuvius Lifesciences.",
  },
  "/events": {
    title:
      "Events & Conferences | Global Oncology Summits | Zuvius Lifesciences",
    description:
      "Discover upcoming and past oncology conferences, international exhibitions, and medical trade events featuring Zuvius Lifesciences.",
  },
  "/whatiscancer": {
    title:
      "What Is Cancer? | Oncology Education & Awareness | Zuvius Lifesciences",
    description:
      "Learn about cancer biology, early warning signs, oncology treatment modalities, and comprehensive cancer care awareness with Zuvius Lifesciences.",
  },
  "/early-diagnosis": {
    title:
      "Early Cancer Diagnosis | Oncology Screening Guidelines | Zuvius Lifesciences",
    description:
      "Understand the critical importance of early cancer detection, regular oncology screening, and timely medical intervention for better survival outcomes.",
  },
  "/prevention": {
    title:
      "Cancer Prevention | Risk Factors & Oncology Wellness | Zuvius Lifesciences",
    description:
      "Learn about evidence-based cancer prevention strategies, lifestyle risk factor reduction, and oncology wellness practices from Zuvius Lifesciences.",
  },
  "/types-of-cancer": {
    title:
      "Types of Cancer | Comprehensive Oncology Guides | Zuvius Lifesciences",
    description:
      "Explore detailed oncology guides covering different cancer types, symptoms, staging, and therapeutic treatment pathways.",
  },
  "/csr": {
    title:
      "Corporate Social Responsibility | Community Oncology Care | Zuvius Lifesciences",
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

export function productSEO(product) {
  const subtitle = product.subtitle ? ` | ${product.subtitle}` : "";
  return {
    path: `/products/${product.category}/${product.slug}`,
    title: product.metaTitle || `${product.name}${subtitle} | ${SITE_NAME}`,
    description:
      product.metaDescription ||
      summarize(
        `${product.name}${product.subtitle ? ` (${product.subtitle})` : ""} by ${SITE_NAME}. Explore product details, available strength, pack size, drug class, indications and other important product information.`,
        300
      ),
    // Built by scripts/generate-product-pages.js for every product.
    image: `/products/${product.category}/${product.slug}/og-image.jpg`,
  };
}

export function cancerSEO(cancer) {
  return {
    path: `/types-of-cancer/${cancer.slug}`,
    title: `${cancer.title}: Symptoms, Diagnosis & Treatment | ${SITE_NAME}`,
    description: summarize(cancer.description || cancer.overview?.intro),
    image: cancer.bannerImg,
  };
}

export function blogSEO(blog) {
  return {
    path: `/blog/${blog.slug}`,
    title: blog.metaTitle || `${blog.title} | Oncology Insights | ${SITE_NAME}`,
    description: summarize(blog.metaDescription || blog.excerpt, 200),
    image: blog.image,
    type: "article",
  };
}

export function eventSEO(event) {
  return {
    path: `/events/${event.slug}`,
    title: `${event.title} | Events | ${SITE_NAME}`,
    description: summarize(event.description),
    image: event.cardImage || event.images?.[0],
  };
}

export function pressSEO(item) {
  return {
    path: `/press-release/${item.id}`,
    title: `${item.title} | Press Release | ${SITE_NAME}`,
    description: summarize(item.excerpt || item.subheading),
    image: item.heroImage || item.image,
    type: "article",
  };
}

export function csrSEO(story, event) {
  if (event) {
    return {
      path: `/csr/${story.slug}/${event.slug}`,
      title: `${event.title} | CSR | ${SITE_NAME}`,
      description: summarize(event.description || story.description),
      image: event.poster || story.poster,
    };
  }
  return {
    path: `/csr/${story.slug}`,
    title: `${story.title} | CSR | ${SITE_NAME}`,
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
