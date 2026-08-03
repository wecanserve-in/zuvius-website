import React, { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./productdetail.css";
import { products } from "./productdata";

const getStrengthOptions = (strengthValue) => {
  if (!strengthValue) return [];

  return String(strengthValue)
    .split(/\/|,|\|/)
    .map((strength) => strength.trim())
    .filter(Boolean);
};

const ProductDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const thumbnailRef = useRef(null);

  const product = products.find((item) => item.slug === slug);

  const strengthOptions = getStrengthOptions(product?.strength);

  const [activeTab, setActiveTab] = useState("Description");

  const [mainImage, setMainImage] = useState(
    product?.images?.[0] || product?.image || ""
  );

  const [showEnquiryModal, setShowEnquiryModal] = useState(false);

  const [enquiryForm, setEnquiryForm] = useState({
    name: "",
    companyName: "",
    phone: "",
    email: "",
    productName: product?.name || "",
    strength: strengthOptions[0] || "",
    quantity: "",
  });

  useEffect(() => {
    if (!product) return;

    const availableStrengths = getStrengthOptions(product.strength);

    setMainImage(product.images?.[0] || product.image || "");
    setActiveTab("Description");

    setEnquiryForm((previousForm) => ({
      ...previousForm,
      productName: product.name || "",
      strength:
        availableStrengths[0] ||
        product.strength ||
        "As per label",
    }));
  }, [product]);

  useEffect(() => {
    if (!showEnquiryModal) return;

    const handleEscapeKey = (event) => {
      if (event.key === "Escape") {
        setShowEnquiryModal(false);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleEscapeKey);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleEscapeKey);
    };
  }, [showEnquiryModal]);

  if (!product) {
    return (
      <h2 className="product-detail-not-found">
        Product not found
      </h2>
    );
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
    (item) =>
      item.category === product.category &&
      item.slug !== product.slug
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
        return (
          product.description || "No information available."
        );

      case "Indication":
        return product.indication || "No information available.";

      case "Clinical Efficacy":
        return (
          product.clinicalEfficacy ||
          "No information available."
        );

      case "Safety Information":
        return (
          product.safetyInformation ||
          "No information available."
        );

      case "Dosage & Administration":
        return (
          product.dosage || "As directed by the physician."
        );

      default:
        return "No information available.";
    }
  };

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

  const handleEnquiryChange = (event) => {
    const { name, value } = event.target;

    setEnquiryForm((previousForm) => ({
      ...previousForm,
      [name]: value,
    }));
  };

  const openEnquiryModal = () => {
    const availableStrengths = getStrengthOptions(
      product.strength
    );

    setEnquiryForm((previousForm) => ({
      ...previousForm,
      productName: product.name,
      strength:
        previousForm.strength ||
        availableStrengths[0] ||
        product.strength ||
        "As per label",
    }));

    setShowEnquiryModal(true);
  };

  const closeEnquiryModal = () => {
    setShowEnquiryModal(false);
  };

  return (
    <div className="product-detail-page">
      {/* PRODUCT HERO */}

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
              <p className="product-subtitle">
                {product.subtitle}
              </p>
            )}
          </div>

          <div className="product-detail-meta">
            {/* STRENGTH */}

            <div className="product-detail-meta-card">
              <img
                src="/products/strength.png"
                alt="Strength"
                className="meta-icon"
              />

              <div>
                <p>Strength</p>

                {strengthOptions.length > 0 ? (
                  <h4 className="product-strength-list">
                    {strengthOptions.map(
                      (strength, index) => (
                        <span
                          key={`${strength}-${index}`}
                        >
                          <span className="strength-tick">
                            ✓
                          </span>

                          <span>{strength}</span>
                        </span>
                      )
                    )}
                  </h4>
                ) : (
                  <h4>As per label</h4>
                )}
              </div>
            </div>

            {/* PACK SIZE */}

            <div className="product-detail-meta-card">
              <img
                src="/products/pack.png"
                alt="Pack Size"
                className="meta-icon"
              />

              <div>
                <p>Pack Size</p>
                <h4>
                  {product.packSize || "As per pack"}
                </h4>
              </div>
            </div>

            {/* DRUG CLASS */}

            <div className="product-detail-meta-card">
              <img
                src="/products/drugclass.png"
                alt="Drug Class"
                className="meta-icon"
              />

              <div>
                <p>Drug Class</p>
                <h4>
                  {product.drugClass || "Medicine"}
                </h4>
              </div>
            </div>
          </div>

          {product.storage && (
            <p className="product-detail-cold">
              <strong>Storage:</strong>{" "}
              {product.storage}
            </p>
          )}

          <button
            type="button"
            className="product-enquire-btn"
            onClick={openEnquiryModal}
          >
            Enquire Now
          </button>

          {/* THUMBNAILS */}

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
                  className={
                    mainImage === img ? "active" : ""
                  }
                  aria-label={`View ${product.name} image ${
                    index + 1
                  }`}
                >
                  <img
                    src={img}
                    alt={`${product.name} ${index + 1}`}
                  />
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

      {/* PRODUCT INFORMATION TABS */}

      <section className="product-detail-tabs-section">
        <div className="product-tabs-header">
          {tabs.map((tab) => (
            <button
              type="button"
              key={tab}
              className={
                activeTab === tab ? "active" : ""
              }
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

      {/* RELATED PRODUCTS */}

      <section className="related-products-section">
        <h2>Related Products</h2>

        <div className="related-products-grid">
          {relatedProducts.slice(0, 4).map((item) => (
            <button
              type="button"
              key={item.id}
              className="related-product-card"
              onClick={() =>
                navigate(
                  `/products/${item.category}/${item.slug}`
                )
              }
            >
              <div className="related-product-image">
                <img
                  src={item.image}
                  alt={item.name}
                />
              </div>

              <div className="related-product-content">
                <h3>{item.name}</h3>
                <p>{item.subtitle}</p>
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* PRODUCT ENQUIRY POPUP */}

      {showEnquiryModal && (
        <div
          className="product-enquiry-overlay"
          onMouseDown={closeEnquiryModal}
          role="presentation"
        >
          <div
            className="product-enquiry-modal"
            onMouseDown={(event) =>
              event.stopPropagation()
            }
            role="dialog"
            aria-modal="true"
            aria-labelledby="product-enquiry-title"
          >
            <button
              type="button"
              className="product-enquiry-close"
              onClick={closeEnquiryModal}
              aria-label="Close enquiry form"
            >
              ×
            </button>

            <div className="product-enquiry-heading">
              

              <h2 id="product-enquiry-title">
                Enquire About {product.name}
              </h2>

              <p>
                Enter your requirements and our team will
                contact you.
              </p>
            </div>

            <form
              className="product-enquiry-form"
              action="https://formsubmit.co/info@zuviuslifesciences.in"
              method="POST"
            >
              <input type="hidden" name="_subject" value={`Product Enquiry - ${product.name}`} />
              <input type="hidden" name="_template" value="table" />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_next" value={window.location.href} />
              <input type="text" name="_honey" style={{display:"none"}} />
              <div className="product-enquiry-row">
                <div className="product-enquiry-field">
                  <label htmlFor="enquiry-name">
                    Name
                  </label>

                  <input
                    id="enquiry-name"
                    type="text"
                    name="Name"
                    value={enquiryForm.name}
                    onChange={handleEnquiryChange}
                    placeholder="Enter your full name"
                    autoComplete="name"
                    required
                  />
                </div>

                <div className="product-enquiry-field">
                  <label htmlFor="enquiry-company">
                    Company Name
                  </label>

                  <input
                    id="enquiry-company"
                    type="text"
                    name="Company Name"
                    value={enquiryForm.companyName}
                    onChange={handleEnquiryChange}
                    placeholder="Enter company name"
                    autoComplete="organization"
                    required
                  />
                </div>
              </div>

              <div className="product-enquiry-row">
                <div className="product-enquiry-field">
                  <label htmlFor="enquiry-phone">
                    Phone Number
                  </label>

                  <input
                    id="enquiry-phone"
                    type="tel"
                    name="Phone Number"
                    value={enquiryForm.phone}
                    onChange={handleEnquiryChange}
                    placeholder="Enter phone number"
                    autoComplete="tel"
                    pattern="[0-9+\-\s()]{8,20}"
                    required
                  />
                </div>

                <div className="product-enquiry-field">
                  <label htmlFor="enquiry-email">
                    Email ID
                  </label>

                  <input
                    id="enquiry-email"
                    type="email"
                    name="Email"
                    value={enquiryForm.email}
                    onChange={handleEnquiryChange}
                    placeholder="Enter email address"
                    autoComplete="email"
                    required
                  />
                </div>
              </div>

              <div className="product-enquiry-row">
                <div className="product-enquiry-field">
                  <label htmlFor="enquiry-product">
                    Product Name
                  </label>

                  <input
                    id="enquiry-product"
                    type="text"
                    name="Product Name"
                    value={enquiryForm.productName}
                    readOnly
                  />
                </div>

                <div className="product-enquiry-field">
                  <label htmlFor="enquiry-strength">
                    Strength
                  </label>

                  {strengthOptions.length > 1 ? (
                    <select
                      id="enquiry-strength"
                      name="Strength"
                      value={enquiryForm.strength}
                      onChange={handleEnquiryChange}
                      required
                    >
                      {strengthOptions.map(
                        (strength, index) => (
                          <option
                            value={strength}
                            key={`${strength}-${index}`}
                          >
                            {strength}
                          </option>
                        )
                      )}
                    </select>
                  ) : (
                    <input
                      id="enquiry-strength"
                      type="text"
                      name="Strength"
                      value={
                        enquiryForm.strength ||
                        product.strength ||
                        "As per label"
                      }
                      readOnly
                    />
                  )}
                </div>
              </div>

              <div className="product-enquiry-field">
                <label htmlFor="enquiry-quantity">
                  Quantity
                </label>

                <input
                  id="enquiry-quantity"
                  type="number"
                  name="Quantity"
                  value={enquiryForm.quantity}
                  onChange={handleEnquiryChange}
                  placeholder="Enter required quantity"
                  min="1"
                  step="1"
                  required
                />
              </div>

              <button
                type="submit"
                className="product-enquiry-submit"
              >
                Submit Enquiry
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetail;