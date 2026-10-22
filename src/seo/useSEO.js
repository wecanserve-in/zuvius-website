import { useEffect } from "react";
import { SITE_NAME, absoluteUrl } from "./seoConfig";

const INDEX_ROBOTS =
  "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1";

function setMeta(attribute, key, content) {
  let element = document.head.querySelector(`meta[${attribute}="${key}"]`);
  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }
  element.setAttribute("content", content);
}

/*
 * Sets the page title, description, canonical link and share-preview tags.
 * Pass null to leave the tags alone (for example while data is loading).
 * Every field is set on every page so nothing carries over from the previous one.
 */
export default function useSEO(seo) {
  const title = seo?.title;
  const description = seo?.description || "";
  const path = seo?.path;
  const image = seo?.image;
  const type = seo?.type || "website";
  const noindex = Boolean(seo?.noindex);

  useEffect(() => {
    if (!title) return;

    const url = absoluteUrl(path || window.location.pathname);
    const imageUrl = absoluteUrl(image);

    document.title = title;
    setMeta("name", "description", description);
    setMeta("name", "robots", noindex ? "noindex, follow" : INDEX_ROBOTS);

    setMeta("property", "og:type", type);
    setMeta("property", "og:url", url);
    setMeta("property", "og:title", title);
    setMeta("property", "og:description", description);
    setMeta("property", "og:image", imageUrl);
    setMeta("property", "og:image:secure_url", imageUrl);
    setMeta("property", "og:site_name", SITE_NAME);

    setMeta("name", "twitter:card", "summary_large_image");
    setMeta("name", "twitter:url", url);
    setMeta("name", "twitter:title", title);
    setMeta("name", "twitter:description", description);
    setMeta("name", "twitter:image", imageUrl);

    let canonical = document.head.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", url);
  }, [title, description, path, image, type, noindex]);
}
