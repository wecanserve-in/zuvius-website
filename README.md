# Zuvius Lifesciences website

The source for [zuviuslifesciences.in](https://zuviuslifesciences.in): a React app (Create React App) deployed to Hostinger from the `main` branch on GitHub.

## Run it locally

```bash
npm install
npm start          # http://localhost:3000
```

## Build for release

```bash
npm run build
```

`npm run build` creates the `build/` folder and then runs two scripts automatically:

1. `scripts/generate-product-pages.js` makes a 1200×630 share image for every product (`build/products/<category>/<slug>/og-image.jpg`).
2. `scripts/generate-seo-pages.js` writes a ready-made HTML file for every page, plus `build/sitemap.xml` and `build/404.html`. Each file has that page's own title, description, canonical link, share preview and structured data, so Google and WhatsApp/LinkedIn previews work without running JavaScript.

## Where things live

| What | File |
|---|---|
| Products | `src/products/productdata.js` |
| Cancer guides | `src/cancersData.js` |
| Cancer type list (Types of Cancer page) | `src/types/TypesOfCancer.js` |
| Blog posts | `src/blog/blogdata.js` |
| Events | `src/events/eventsdata.js` |
| Press releases and newsroom | `src/media/mediaData.js` |
| CSR stories | `src/csr/journeydata.js` |
| Page titles and descriptions | `src/seo/seoConfig.js` |
| Routes (page addresses) | `src/App.js` |
| Images, videos, PDFs | `public/` |

## Adding content

- **Product:** add an entry to `products` in `productdata.js`. Give it a unique `id` and `slug`. Use `storage:` (lower case) for storage conditions, because that's the field the page shows. The product page, share image and sitemap entry are created automatically on the next build.
- **Blog post:** add an entry to `blogdata.js` with a unique `slug`. Set `metaTitle`/`metaDescription` for search results, and `targetUrl` to a page that exists (for example `/types-of-cancer/breast-cancer`).
- **Cancer guide:** add an entry to `cancersData.js`. If you add a card to `TypesOfCancer.js`, the guide's `slug` must match the card's link, or the card leads to "Page not found".
- **Fixed page titles:** edit `STATIC_PAGES` in `src/seo/seoConfig.js`.

## Images

Keep images close to the size they're shown at. Banners need about 1920 px width at most, cards and product shots much less. To shrink new images in place (same names, same look):

```bash
npm run optimize-images                       # whole public/ folder
node scripts/optimize-images.js --only blog   # one folder
```

Originals are copied to `../zuvius-image-originals/` before anything is changed.

## Old addresses (redirects)

Older versions of the site (WordPress and before) used different addresses, and Google still knows many of them. `public/.htaccess` sends each one to its closest new page (301) and marks spam and junk pages as gone (410). The rules are generated, not hand-written:

```bash
npm run build          # the generator reads build/sitemap.xml
npm run redirects      # rewrites the "old-site redirects" block in public/.htaccess
```

The list of old addresses is `scripts/data/old-site-paths.txt` (from the Internet Archive); the matching rules are in `scripts/build-redirects.js`.

## Server

`public/.htaccess` holds the server rules (old-address redirects, www redirect, real 404s, security headers, caching) and is deployed with every build.
