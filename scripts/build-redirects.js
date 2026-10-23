/*
 * Builds permanent redirects from the old websites' addresses to the new pages,
 * and marks spam / leftover theme pages as gone (410), so Google moves any
 * ranking to the new pages and drops the junk.
 *
 *   node scripts/build-redirects.js
 *
 * Input:  scripts/data/old-site-paths.txt — every address the Internet Archive
 *         recorded for zuviuslifesciences.in (fetched 22 Oct 2026).
 * Output: the block between "# BEGIN old-site redirects" and
 *         "# END old-site redirects" in public/.htaccess.
 */
const fs = require("fs");
const path = require("path");
const { loadModule, ROOT } = require("./lib/load-module");

const HTACCESS = path.join(ROOT, "public", ".htaccess");
const OLD_PATHS = path.join(__dirname, "data", "old-site-paths.txt");
const BEGIN = "# BEGIN old-site redirects";
const END = "# END old-site redirects";

const { products } = loadModule("src/products/productdata.js");
const cancers = loadModule("src/cancersData.js").default;
const { pressItems } = loadModule("src/media/mediaData.js");
const { pressSlug } = loadModule("src/seo/seoConfig.js");

const productBySlug = new Map(products.map((p) => [p.slug, `/products/${p.category}/${p.slug}`]));
const cancerSlugs = cancers.map((c) => c.slug);

// ------------------------------------------------------------------
// Matching helpers
// ------------------------------------------------------------------

const SUFFIX = /-(inj|injection|injections|tab|tabs|tablet|tablets|cap|caps|capsule|capsules|strips|two|copy|\d+(-mg)?|mg|\d+mg|busulphan|protein|\d+-protein)$/;

function matchProduct(oldSlug) {
  const tries = new Set([oldSlug, oldSlug.replace(/caps$/, "cap"), oldSlug.replace(/-caps?$/, "-cap")]);
  let s = oldSlug;
  for (let i = 0; i < 4; i++) {
    s = s.replace(SUFFIX, "");
    tries.add(s);
  }
  for (const t of tries) if (productBySlug.has(t)) return productBySlug.get(t);
  for (const t of tries) {
    const hit = [...productBySlug.keys()].find((k) => k.startsWith(t + "-") || t.startsWith(k + "-"));
    if (hit && t.length >= 4) return productBySlug.get(hit);
  }
  return null;
}

const CANCER_ALIAS = {
  "leukaemia-cancer": "leukemia",
  "leukemia-cancer": "leukemia",
  "acute-lymphoblastic-leukemia-cancer": "leukemia",
  "acute-myeloid-leukemia-cancer": "leukemia",
  "melanoma-skin-cancer": "melanoma",
  "oesophagus-cancer": "esophageal-cancer",
  "retinoblastoma-cancer": "retinoblastoma",
  "brain-cancer-adult": "brain-cancer",
  "brain-cancer-child": "brain-cancer",
  "colorectal-cancer": "colon-cancer",
  "cancer-of-ovary": "ovarian-cancer",
  "uterine-sarcoma": "uterine-cancer",
  "lymphoma-of-the-skin": "lymphoma",
  "lung-carcinoid-tumour": "lung-cancer",
  "non-small-cell-lung-cancer-treatment-non-small-cell-lung-cancer-support-about-non-small-cell-lung-cancer-zuviuslifesciencesin": "lung-cancer",
};

function matchCancer(oldSlug) {
  const s = oldSlug.replace(/-\d+$/, "");
  if (CANCER_ALIAS[s]) return `/types-of-cancer/${CANCER_ALIAS[s]}`;
  if (cancerSlugs.includes(s)) return `/types-of-cancer/${s}`;
  const hit = cancerSlugs.find((c) => c.startsWith(s + "-") || c === s.replace(/-cancer$/, ""));
  return hit ? `/types-of-cancer/${hit}` : null;
}

function pressByWords(words) {
  const item = pressItems.find((p) => words.every((w) => p.title.toLowerCase().includes(w)));
  return item ? `/press-release/${pressSlug(item)}` : null;
}

// ------------------------------------------------------------------
// Rules: [test, target]. First match wins. Target null = gone (410).
// ------------------------------------------------------------------

const GONE = null;
const rules = [
  // Leftover pages from a hospital demo theme and other junk — never Zuvius content.
  [/^(departments|doctors|features|gallery-cat|services|shortcodes|slider)(\/|$)/, GONE],
  [/^gallery\/modern-clinic/, GONE],
  [/^(hello-world|home-new|homedraft|zuvius-new|mark-flaherty|free-shipping-icon-png|googlehostedservice\.html|links\.php|cdn-cgi\/.*)$/, GONE],
  [/^dental-office/, GONE],
  [/^product-category\/(cardiology|dental)$/, GONE],
  [/^(wp-|feed|comments|xmlrpc|author\/|tag\/|category\/|page\/)/, GONE],
  [/^(medicenter_|medilink_|media__trashed|my-account|atom\.xml|links\.html)/, GONE],
  [/^(home|new-home)$/, () => "/"],
  [/^old\/([^/]+)$/, (m) => matchCancer(m[1]) || "/blog"],
  [/^product-tag\/([^/]+)$/, (m) => matchProduct(m[1]) || "/products"],
  [/^(onco|neuro|prodcap)\.html$/, () => "/products"],
  [/^mission\.html$/, () => "/aboutus"],
  [/^(partner|partner-with-us)(\/.*)?$/, () => "/contact"],
  [/^men-for-pink$/, () => "/csr/men-for-pink-initiative"],
  [/^(neoplasia|medico-legal)(\/.*)?$/, () => "/blog"],
  [/^sinus-cancer$/, () => "/types-of-cancer"],

  // Products
  [/^(product|our-products\/[^/]+(\/[^/]+)?)\/([^/]+)$/, (m) => matchProduct(m[3])],
  [/^(our-products\/oncology|our-products\/oncoace|product-category\/(oncology|oncoace)).*$/, () => "/products/oncoace"],
  [/^(our-products\/(nutraceutials|nutraceutical|neutrazeutica|supporto)|product-category\/(nutrazeutica|supporto)).*$/, () => "/products/nutrazeutica"],
  [/^(our-products|all-products|shop|product|product-category)(\/.*)?$/, () => "/products"],
  [/^zuvius-launches-([a-z]+)/, (m) => matchProduct(m[1]) || "/press-release"],
  [/^media\/press-release\/zuvius-launches-([a-z]+)/, (m) => matchProduct(m[1]) || "/press-release"],

  // Cancer information
  [/^about-cancer\/resources\/pink-street-campaign$/, () => "/csr/pink-street-campaign"],
  [/^about-cancer\/(food-in-cancer|resources\/eating-healthy)$/, () => "/prevention"],
  [/^about-cancer\/type\/([^/]+)$/, (m) => matchCancer(m[1]) || "/types-of-cancer"],
  [/^([a-z-]*(cancer|sarcoma|tumou?r|leukaemia|leukemia|lymphoma|melanoma)[a-z-]*)$/, (m) => matchCancer(m[1])],
  [/^(about-cancer\/what-is-cancer\/early-diagnosis|cancer\/diagnosis)$/, () => "/early-diagnosis"],
  [/^(about-cancer\/what-is-cancer\/prevention|about-cancer\/resources\/preventing-cancer|cancer\/prevention|diet-and-cancer.*|diet-in-cancer|food-in-cancer)$/, () => "/prevention"],
  [/^(about-cancer\/(types-of-cancer|type)|cancer\/cancer-type|cancer)$/, () => "/types-of-cancer"],
  [/^(about-cancer|what-is-cancer|cancer)(\/.*)?$/, () => "/whatiscancer"],

  // Company
  [/^(company\/about-us\/about-csr|zuvius\/csr|zuvius-lifesciences\/responsibility)$/, () => "/csr"],
  [/^(manufacturing\/certification|zuvius\/accreditation-awards-honors-recognition|media\/awards|limca-book-of-record|blaze-of-brilliance|zuvius-wins-most-inspiring-power-brand-rising-star-award|media\/blog\/zuvius-wins.*)$/, () => "/awards-recognition"],
  [/^(career|careers|company\/careers|job-openings|zuvius\/life-at-zuvius|workenv\.html|training\.html)(\/.*)?$/, () => "/careers"],
  [/^(contact-us|inquiry-now|inquiry\.html|application\.html|company\/partner-with-us)(\/.*)?$/, () => "/contact"],
  [/^(about-us|company|zuvius|team|testimonials|zuvius-lifesciences|manufacturing|company\/manufacturing|ensuring-quality|director\.html|vision\.html|corporate\.html|fac\.html|qualityass\.html|qcontrol\.html|research\.html|clinicalres\.html|contractman\.html)(\/.*)?$/, () => "/aboutus"],
  [/^(api|biot|formulation|anret|cardi|gynae|immu|inspira|coradd|export)\.html$/, () => "/products"],
  [/^(api)$/, null], // old /api/ page; /api now holds the enquiry script — leave it alone

  // CSR campaigns and events
  [/^(join-the-pink-street-campaign|about-cancer\/resources\/pink-street-campaign|taking-the-fight-to-the-streets.*|media\/press-release\/pinkstreet.*)$/, () => "/csr/pink-street-campaign"],
  [/^(cancer-walk|zuvius-lifesciences-participated-in-cancer-walk-rally|media\/press-release\/cancer-walk-rally)$/, () => "/csr/walk-for-cancer-care"],
  [/^(.*youwecan.*)$/, () => "/csr/youwecan-campaign"],
  [/^events-conference-and-participation$/, () => "/events"],

  // Press
  [/^(zuvius-lifesciences-revolutionising-health.*)$/, () => pressByWords(["revolutionising"])],
  [/^(zuvius-lifesciences-aims-to-be-among.*)$/, () => pressByWords(["top five"])],
  [/^(health-minister-meets-with-zuvius.*)$/, () => pressByWords(["ethiopia"])],
  [/^(compliance-is-the-biggest-risk-in-healthcare)$/, () => pressByWords(["compliance"])],
  [/^media\/\d+\/([a-z-]+?)(-insert|-\d+)?\.pdf$/, (m) => matchProduct(m[1]) || "/products"],
  [/^media\/(events-conference-and-participation|gallery|video-gallery)$/, () => "/events"],
  [/^media\/testimonials$/, () => "/aboutus"],
  [/^(media\/press-release|media\/news|media\/newsroom)(\/.*)?$|^media$/, () => "/press-release"],

  // Old blog posts and archives
  [/^(media\/blog|media\/blogs|blogs|survivor-stories)(\/.*)?$/, () => "/blog"],
  [/^\d{4}\/\d{2}(\/.*)?$/, () => "/blog"],
];

// ------------------------------------------------------------------

function escapeRegex(s) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function main() {
  const newPages = new Set(
    fs.readFileSync(path.join(ROOT, "build", "sitemap.xml"), "utf8")
      .match(/<loc>[^<]+<\/loc>/g)
      .map((l) => l.replace(/<\/?loc>/g, "").replace("https://zuviuslifesciences.in", "").replace(/^\//, ""))
  );

  const paths = fs.readFileSync(OLD_PATHS, "utf8").split(/\r?\n/).map((p) => p.trim()).filter(Boolean);
  const redirects = new Map();
  const gone = new Set();
  const unmatched = [];

  for (const raw of paths) {
    if (/%[89a-f][0-9a-f]/i.test(raw)) continue; // non-English spam, handled by one rule below
    const p = decodeURIComponent(raw).replace(/^\/+|\/+$/g, "").replace(/\.html?\/$/, ".html");
    if (!p || newPages.has(p) || newPages.has(p.toLowerCase())) continue;
    if (fs.existsSync(path.join(ROOT, "public", p))) continue; // a real file or folder on the new site

    let decided = false;
    for (const [re, target] of rules) {
      const m = p.toLowerCase().match(re);
      if (!m) continue;
      if (target === GONE) { gone.add(p); decided = true; break; }
      const to = target(m);
      if (to) { redirects.set(p, to); decided = true; break; }
    }
    if (!decided) {
      // Any other single-level old address was a blog/news post on the old site.
      if (!p.includes("/") && /^[a-z0-9-]+$/i.test(p) && p.length > 12) redirects.set(p, "/blog");
      else unmatched.push(p);
    }
  }

  const lines = [
    BEGIN,
    "# Generated by scripts/build-redirects.js — edit that file, not this block.",
    "# Old pages from previous versions of the site, sent to their closest new page.",
    "<IfModule mod_rewrite.c>",
    "  RewriteEngine On",
    "",
    "  # Spam pages that were injected into the old WordPress site (non-English addresses).",
    '  RewriteCond %{THE_REQUEST} "\\s/[^\\s]*%[89A-Fa-f][0-9A-Fa-f]"',
    "  RewriteRule ^ - [G,L]",
    "",
    "  # Leftover demo-theme and junk pages: gone for good.",
  ];
  for (const p of [...gone].sort()) lines.push(`  RewriteRule ^${escapeRegex(p)}/?$ - [G,L,NC]`);
  // Pages renamed on the new site itself.
  const renamed = [
    ...pressItems.map((item) => [`press-release/${item.id}`, `/press-release/${pressSlug(item)}`]),
    ["events/nex-brand-the-extraordinnaire", "/events/nex-brand-the-extraordinaire"],
  ];
  lines.push("", "  # Pages renamed on the new site (old address → new address).");
  for (const [from, to] of renamed) lines.push(`  RewriteRule ^${escapeRegex(from)}/?$ ${to} [R=301,L,NC]`);
  lines.push("", "  # Old pages → new pages (permanent).");
  for (const [p, to] of [...redirects].sort()) lines.push(`  RewriteRule ^${escapeRegex(p)}/?$ ${to} [R=301,L,NC]`);
  lines.push("</IfModule>", END);

  let ht = fs.readFileSync(HTACCESS, "utf8");
  const block = lines.join("\n");
  if (ht.includes(BEGIN)) {
    ht = ht.replace(new RegExp(`${escapeRegex(BEGIN)}[\\s\\S]*?${escapeRegex(END)}`), block);
  } else {
    // Redirects must run before the rules that serve pages.
    ht = ht.replace("Options -Indexes", `${block}\n\nOptions -Indexes`);
  }
  fs.writeFileSync(HTACCESS, ht);

  console.log(`[redirects] ${redirects.size} redirects, ${gone.size} gone, ${unmatched.length} left as 404`);
  if (unmatched.length) console.log("  left as 404:", unmatched.join(" "));
}

main();
