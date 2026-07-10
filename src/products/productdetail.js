import React, { useEffect, useRef, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./productdetail.css";
import { products } from "./productdata";

const ProductDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const thumbnailRef = useRef(null);

  const product = products.find((item) => item.slug === slug);

  const [activeTab, setActiveTab] = useState("Description");
  const [mainImage, setMainImage] = useState(
    product?.images?.[0] || product?.image || ""
  );

  useEffect(() => {
    if (product) {
      setMainImage(product.images?.[0] || product.image || "");
      setActiveTab("Description");
    }
  }, [product]);

  if (!product) {
    return <h2 className="product-detail-not-found">Product not found</h2>;
  }

  const tabs = [
    "Description",
    "Indication",
    "Clinical Efficacy",
    "Safety Information",
    "Dosage & Administration",
  ];

  const productImages =
    product.images && product.images.length > 0
      ? product.images
      : [product.image];

  const relatedProducts = products.filter(
    (item) => item.category === product.category && item.slug !== product.slug
  );

  const scrollThumbnails = (direction) => {
    if (!thumbnailRef.current) return;

    thumbnailRef.current.scrollBy({
      left: direction === "left" ? -220 : 220,
      behavior: "smooth",
    });
  };

  const getTabContent = () => {
    switch (activeTab) {
      case "Description":
        return product.description || "No information available.";

      case "Indication":
        return product.indication || "No information available.";

      case "Clinical Efficacy":
        return product.clinicalEfficacy || "No information available.";

      case "Safety Information":
        return product.safetyInformation || "No information available.";

      case "Dosage & Administration":
        return product.dosage || "As directed by the physician.";

      default:
        return "No information available.";
    }
  };

  /*
    Converts productdata text into:
    - headings
    - paragraphs
    - bullet lists
  */
  const renderFormattedContent = (content) => {
    if (!content) {
      return <p>No information available.</p>;
    }

    const normalizedContent = String(content)
      .replace(/\r\n/g, "\n")
      .replace(/\r/g, "\n")
      .trim();

    const lines = normalizedContent
      .split("\n")
      .map((line) => line.trim());

    const elements = [];
    let paragraphLines = [];
    let bulletLines = [];

    const flushParagraph = () => {
      if (paragraphLines.length === 0) return;

      elements.push(
        <p
          className="product-content-paragraph"
          key={`paragraph-${elements.length}`}
        >
          {paragraphLines.join(" ")}
        </p>
      );

      paragraphLines = [];
    };

    const flushBullets = () => {
      if (bulletLines.length === 0) return;

      elements.push(
        <ul
          className="product-content-list"
          key={`list-${elements.length}`}
        >
          {bulletLines.map((bullet, index) => (
            <li key={`${bullet}-${index}`}>{bullet}</li>
          ))}
        </ul>
      );

      bulletLines = [];
    };

    const isBulletLine = (line) => {
      return (
        line.startsWith("•") ||
        line.startsWith("- ") ||
        line.startsWith("* ")
      );
    };

    const cleanBullet = (line) => {
      return line.replace(/^[•*-]\s*/, "").trim();
    };

    const isHeadingLine = (line) => {
      if (!line.endsWith(":")) return false;

      const wordCount = line
        .replace(":", "")
        .trim()
        .split(/\s+/)
        .filter(Boolean).length;

      return wordCount <= 8;
    };

    lines.forEach((line) => {
      if (!line) {
        flushParagraph();
        flushBullets();
        return;
      }

      if (isBulletLine(line)) {
        flushParagraph();
        bulletLines.push(cleanBullet(line));
        return;
      }

      if (isHeadingLine(line)) {
        flushParagraph();
        flushBullets();

        elements.push(
          <h3
            className="product-content-heading"
            key={`heading-${elements.length}`}
          >
            {line.replace(/:$/, "")}
          </h3>
        );

        return;
      }

      flushBullets();
      paragraphLines.push(line);
    });

    flushParagraph();
    flushBullets();

    return elements;
  };

  return (
    <div className="product-detail-page">
      <section className="product-detail-hero">
        <div className="product-detail-gallery">
          <div className="product-detail-main-image">
            <img src={mainImage} alt={product.name} />
          </div>
        </div>

        <div className="product-detail-info">
          <div className="product-title-wrap">
            <h1>{product.name}</h1>

            {product.subtitle && (
              <p className="product-subtitle">{product.subtitle}</p>
            )}
          </div>

          <div className="product-detail-meta">
            <div className="product-detail-meta-card">
              <img
                src="/products/strength.png"
                alt="Strength"
                className="meta-icon"
              />

              <div>
                <p>Strength</p>
                <h4>{product.strength || "As per label"}</h4>
              </div>
            </div>

            <div className="product-detail-meta-card">
              <img
                src="/products/pack.png"
                alt="Pack Size"
                className="meta-icon"
              />

              <div>
                <p>Pack Size</p>
                <h4>{product.packSize || "As per pack"}</h4>
              </div>
            </div>

            <div className="product-detail-meta-card">
              <img
                src="/products/drugclass.png"
                alt="Drug Class"
                className="meta-icon"
              />

              <div>
                <p>Drug Class</p>
                <h4>{product.drugClass || "Medicine"}</h4>
              </div>
            </div>
          </div>

          {product.coldStorage && (
            <p className="product-detail-cold">
              <strong>Cold Storage:</strong> {product.coldStorage}
            </p>
          )}

          <button type="button" className="product-enquire-btn">
            Enquire Now
          </button>

          <div className="product-thumbnail-slider-wrap">
            <button
              type="button"
              className="thumb-slider-arrow"
              onClick={() => scrollThumbnails("left")}
              aria-label="Previous product image"
            >
              ‹
            </button>

            <div
              className="product-detail-thumbnails-bottom"
              ref={thumbnailRef}
            >
              {productImages.map((img, index) => (
                <button
                  type="button"
                  key={`${img}-${index}`}
                  onClick={() => setMainImage(img)}
                  className={mainImage === img ? "active" : ""}
                  aria-label={`View ${product.name} image ${index + 1}`}
                >
                  <img src={img} alt={`${product.name} ${index + 1}`} />
                </button>
              ))}
            </div>

            <button
              type="button"
              className="thumb-slider-arrow"
              onClick={() => scrollThumbnails("right")}
              aria-label="Next product image"
            >
              ›
            </button>
          </div>
        </div>
      </section>

      <section className="product-detail-tabs-section">
        <div className="product-tabs-header">
          {tabs.map((tab) => (
            <button
              type="button"
              key={tab}
              className={activeTab === tab ? "active" : ""}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="product-tabs-body">
          <div className="product-tab-formatted-content">
            {renderFormattedContent(getTabContent())}
          </div>
        </div>
      </section>

      <section className="related-products-section">
        <h2>Related Products</h2>

        <div className="related-products-grid">
          {relatedProducts.slice(0, 4).map((item) => (
            <button
              type="button"
              key={item.id}
              className="related-product-card"
              onClick={() =>
                navigate(`/products/${item.category}/${item.slug}`)
              }
            >
              <div className="related-product-image">
                <img src={item.image} alt={item.name} />
              </div>

              <div className="related-product-content">
                <h3>{item.name}</h3>
                <p>{item.subtitle}</p>
              </div>
            </button>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ProductDetail;