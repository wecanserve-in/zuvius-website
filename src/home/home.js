import React, { useEffect, useMemo, useState } from "react";
import {
  FaMapMarkedAlt,
  FaHospital,
  FaHandshake,
  FaGlobeAsia,
  FaGlobe,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

import { products as allProducts } from "../products/productdata";
import "../products/productcategory.css";
import "./home.css";

const phrases = [
  "Delivers value",
  "Benchmarks happiness",
  "Expands horizons",
  "Reinvents itself",
  "Unveils innovations",
  "Strengthens relationships",
  "Understands responsibilities",
];

const recentLaunchNames = [
  "Zydrox Cap",
  "Zaxotien",
  "Zoplide",
  "Acalataz",
  "Zomacta",
  "Zoserlin",
  "Zuvistatin",
  "Acantha",
  "Zuvisome",
];

const normalizeProductName = (value = "") =>
  value.toLowerCase().replace(/[^a-z0-9]/g, "");

const createProductSlides = (items, itemsPerSlide) => {
  const slides = [];

  for (let index = 0; index < items.length; index += itemsPerSlide) {
    slides.push(items.slice(index, index + itemsPerSlide));
  }

  return slides;
};

const Home = () => {
  const navigate = useNavigate();

  const [count, setCount] = useState(0);

  const [slideIndex, setSlideIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [isMobile, setIsMobile] = useState(
    () => window.innerWidth <= 600
  );

  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);

  /*
   * Find the selected Recent Launch products in productdata.js.
   * When a product is not present, an empty named card is created.
   */
  const recentLaunchProducts = useMemo(() => {
    return recentLaunchNames.map((requestedName, requestedIndex) => {
      const normalizedRequestedName =
        normalizeProductName(requestedName);

      const matchedProduct = allProducts.find((product) => {
        const normalizedProductName =
          normalizeProductName(product.name);

        const normalizedProductSlug =
          normalizeProductName(product.slug);

        return (
          normalizedProductName === normalizedRequestedName ||
          normalizedProductSlug === normalizedRequestedName
        );
      });

      if (matchedProduct) {
        return {
          ...matchedProduct,
          displayName: requestedName,
          isPlaceholder: false,
        };
      }

      return {
        id: `recent-placeholder-${requestedIndex}`,
        name: requestedName,
        displayName: requestedName,
        subtitle: "",
        image: "",
        imageClass: "",
        category: "",
        slug: "",
        isPlaceholder: true,
      };
    });
  }, []);

  /*
   * Desktop: 3 products per slide.
   * Mobile: 1 product per slide.
   */
  const productSlides = useMemo(() => {
    return createProductSlides(
      recentLaunchProducts,
      isMobile ? 1 : 3
    );
  }, [recentLaunchProducts, isMobile]);

  const totalSlides = productSlides.length;

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 600);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    setIsTransitioning(false);
    setSlideIndex(0);

    const resetTimer = setTimeout(() => {
      setIsTransitioning(true);
    }, 50);

    return () => clearTimeout(resetTimer);
  }, [isMobile]);

  const nextSlide = () => {
    if (slideIndex >= totalSlides) return;

    setIsTransitioning(true);
    setSlideIndex((previousIndex) => previousIndex + 1);
  };

  const prevSlide = () => {
    if (slideIndex === 0) {
      setIsTransitioning(false);
      setSlideIndex(totalSlides);

      setTimeout(() => {
        setIsTransitioning(true);
        setSlideIndex(totalSlides - 1);
      }, 50);

      return;
    }

    setIsTransitioning(true);
    setSlideIndex((previousIndex) => previousIndex - 1);
  };

  const handleTransitionEnd = (event) => {
    if (event.target !== event.currentTarget) return;

    if (slideIndex === totalSlides) {
      setIsTransitioning(false);
      setSlideIndex(0);

      setTimeout(() => {
        setIsTransitioning(true);
      }, 50);
    }
  };

  /*
   * SKU counter.
   */
  useEffect(() => {
    const finalCount = 250;
    const duration = 5500;

    let startTime = null;
    let animationFrameId;

    const animateCounter = (timestamp) => {
      if (!startTime) {
        startTime = timestamp;
      }

      const progress = timestamp - startTime;
      const progressRatio = Math.min(progress / duration, 1);
      const easeOut = 1 - Math.pow(1 - progressRatio, 3);

      const currentCount = Math.min(
        Math.floor(easeOut * finalCount),
        finalCount
      );

      setCount(currentCount);

      if (progress < duration) {
        animationFrameId =
          requestAnimationFrame(animateCounter);
      }
    };

    animationFrameId =
      requestAnimationFrame(animateCounter);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  /*
   * Quality typewriter.
   */
  useEffect(() => {
    if (
      subIndex === phrases[index].length &&
      !reverse
    ) {
      const pauseTimer = setTimeout(() => {
        setReverse(true);
      }, 500);

      return () => clearTimeout(pauseTimer);
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);

      setIndex(
        (previousIndex) =>
          (previousIndex + 1) % phrases.length
      );

      return undefined;
    }

    const typingTimer = setTimeout(() => {
      setSubIndex(
        (previousIndex) =>
          previousIndex + (reverse ? -1 : 1)
      );
    }, reverse ? 30 : 55);

    return () => clearTimeout(typingTimer);
  }, [subIndex, index, reverse]);

  const renderRecentProductCard = (
    product,
    uniqueKey,
    isClone = false
  ) => {
    if (product.isPlaceholder) {
      return (
        <div
          className="category-product-card home-category-product-card home-product-placeholder"
          key={uniqueKey}
        >
          <div className="category-product-image">
            <div className="home-empty-product-image" />
          </div>

          <div className="category-product-content">
            <h3>{product.displayName}</h3>

            <p>Product details coming soon.</p>

            <div className="product-card-arrow">
              <span>→</span>
            </div>
          </div>
        </div>
      );
    }

    const cardContent = (
      <>
        <div className="category-product-image">
          <img
            src={product.image}
            alt={isClone ? "" : product.name}
            className={product.imageClass || ""}
          />
        </div>

        <div className="category-product-content">
          <h3>{product.displayName || product.name}</h3>

          <p>{product.subtitle}</p>

          <div className="product-card-arrow">
            <span>→</span>
          </div>
        </div>
      </>
    );

    return (
      <Link
        to={`/products/${product.category}/${product.slug}`}
        className="category-product-card home-category-product-card"
        key={uniqueKey}
        tabIndex={isClone ? -1 : 0}
        aria-hidden={isClone ? "true" : undefined}
      >
        {cardContent}
      </Link>
    );
  };

  return (
    <div className="home-container">
      {/* HERO */}

      <section className="hero-section">
        <div className="hero-content">
          <h1>
            Cancer is one <br />
            of the world’s biggest battles.
          </h1>

          <br />

          <p className="hero-stat-text">
            <span className="text-blue">1 in 6</span>{" "}
            deaths globally is caused by{" "}
            <span className="text-red">cancer</span>.
          </p>

          <button
            type="button"
            className="learn-more-btn"
          >
            Learn More
          </button>
        </div>

        <div className="hero-image">
          <img src="./doctor-hero.png" alt="Doctor" />
        </div>
      </section>

      {/* STATS */}

      <section className="stats-section">
        <div className="stats-grid">
          <div className="stat-card">
            <h3>
              <span>18+</span> Million
            </h3>

            <p>Cancer Cases Annually</p>
          </div>

          <div className="stat-card">
            <h3>
              <span>70%</span> Cases
            </h3>

            <p>Detected Late</p>
          </div>

          <div className="stat-card">
            <h3>
              <span>9.6</span> Million
            </h3>

            <p>Annual Deaths</p>
          </div>
        </div>
      </section>

      {/* LEADER */}

      <section className="leader-section">
        <div className="leader-text">
          <h2>
            <span style={{ color: "#d32027" }}>
              Zuvius
            </span>{" "}
            — A{" "}
            <span className="text-blue">
              Global Leader
            </span>{" "}
            In The Fight Against{" "}
            <span className="text-red">Cancer</span>
          </h2>

          <p>
            Zuvius Lifesciences manufactures one of
            the widest ranges of anti-cancer drugs,
            committed to addressing the growing
            global burden of cancer while redefining
            the quality of life for patients.
          </p>
        </div>

        <div className="leader-infographic-card">
          <div className="leader-sku-box">
            <span className="leader-sku-number">
              {count}+
            </span>

            <span className="leader-sku-label">
              SKUs
            </span>
          </div>

          <div className="leader-product-grid">
            <div className="leader-product-type-card">
              <img src="/tablet.png" alt="Tablet" />
              <h4>Tablet</h4>
            </div>

            <div className="leader-product-type-card">
              <img src="/capsule.png" alt="Capsule" />
              <h4>Capsule</h4>
            </div>

            <div className="leader-product-type-card">
              <img
                src="/injectable-1.png"
                alt="Injectable"
              />
              <h4>Injectable</h4>
            </div>

            <div className="leader-product-type-card">
              <img
                src="/injectable-2.png"
                alt="Lyophilized"
              />
              <h4>Lyophilized</h4>
            </div>
          </div>
        </div>
      </section>

      {/* RECENT LAUNCHES */}

      <section className="products-section">
        <h2 className="accreditation-main-title">
          Recent Launches
        </h2>

        <div className="carousel-container">
          <button
            type="button"
            className="carousel-btn left"
            onClick={prevSlide}
            aria-label="Previous products"
          >
            <FaChevronLeft />
          </button>

          <div
            className={`carousel-track ${
              !isTransitioning
                ? "no-transition"
                : ""
            }`}
            onTransitionEnd={handleTransitionEnd}
            style={{
              transform: `translateX(-${
                slideIndex * 100
              }%)`,
            }}
          >
            {productSlides.map(
              (slideProducts, slideNumber) => (
                <div
                  className="slide"
                  key={`slide-${slideNumber}`}
                >
                  {slideProducts.map((product) =>
                    renderRecentProductCard(
                      product,
                      `slide-${slideNumber}-${product.id}`
                    )
                  )}
                </div>
              )
            )}

            {productSlides.length > 0 && (
              <div
                className="slide"
                aria-hidden="true"
              >
                {productSlides[0].map((product) =>
                  renderRecentProductCard(
                    product,
                    `clone-${product.id}`,
                    true
                  )
                )}
              </div>
            )}
          </div>

          <button
            type="button"
            className="carousel-btn right"
            onClick={nextSlide}
            aria-label="Next products"
          >
            <FaChevronRight />
          </button>
        </div>

        <div className="view-more-container">
          <button
            type="button"
            className="view-more-btn"
            onClick={() => navigate("/products")}
          >
            View More
          </button>
        </div>
      </section>

      {/* ACCREDITATIONS */}

      <section className="accreditation-section">
        <div className="accreditation-layout">
          <div className="accreditation-left">
            <h2 className="accreditation-main-title">
              Our Accreditations
            </h2>

            <p className="accreditation-subtitle">
              Recognized for quality, compliance and
              international standards across global
              healthcare markets.
            </p>

            <div className="accreditation-grid">
              <div className="acc-item">
                <img
                  src="./Accredations/US_FDA.png"
                  alt="US FDA"
                />
              </div>

              <div className="acc-item">
                <img
                  src="./Accredations/Anvisa.png"
                  alt="ANVISA"
                />
              </div>

              <div className="acc-item">
                <img
                  src="./Accredations/EU-GMP.png"
                  alt="EU GMP"
                />
              </div>

              <div className="acc-item">
                <img
                  src="./Accredations/WHO.png"
                  alt="WHO GMP"
                />
              </div>

              <div className="acc-item">
                <img
                  src="./Accredations/Cofepris.png"
                  alt="COFEPRIS"
                />
              </div>

              <div className="acc-item">
                <img
                  src="./Accredations/pics.png"
                  alt="PIC/S"
                />
              </div>

              <div className="acc-item">
                <img
                  src="./Accredations/invima.png"
                  alt="INVIMA"
                />
              </div>
            </div>
          </div>

          <div className="accreditation-right">
            <div className="accreditation-q-card">
              <img
                src="./Quality.png"
                alt="Culture of Quality"
              />

              <div className="typewriter-box accreditation-typewriter">
                <span className="fixed-text">
                  Quality that{" "}
                </span>

                <span className="changing-text">
                  {phrases[index].substring(
                    0,
                    subIndex
                  )}

                  <span className="cursor">|</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OUR REACH */}

      <section className="home-reach-section">
        <div className="home-reach-header">
          <span className="home-reach-tag">
            OUR REACH
          </span>

          <p className="home-reach-subtitle">
            Delivering trusted oncology solutions
            worldwide with advanced manufacturing,
            global compliance and a commitment to
            improving patient lives.
          </p>
        </div>

        <div className="home-reach-card">
          <div className="home-reach-content">
            <span className="home-reach-label">
              DOMESTIC REACH
            </span>

            <h3>
              Strong Presence.
              <br />
              Widespread Impact.
            </h3>

            <p>
              Delivering oncology solutions across
              India through a robust distribution
              network and strategic partnerships.
            </p>

            <div className="home-reach-stats">
              <div className="home-reach-stat">
                <div className="home-reach-icon">
                  <FaMapMarkedAlt />
                </div>

                <div>
                  <strong>28 States</strong>
                  <span>8 Union Territories</span>
                  <small>
                    Pan-India domestic reach
                  </small>
                </div>
              </div>

              <div className="home-reach-stat">
                <div className="home-reach-icon">
                  <FaHospital />
                </div>

                <div>
                  <strong>15,000+</strong>
                  <span>
                    Hospitals &amp; Clinics
                  </span>
                </div>
              </div>

              <div className="home-reach-stat">
                <div className="home-reach-icon">
                  <FaHandshake />
                </div>

                <div>
                  <strong>100+</strong>
                  <span>
                    Distribution Partners
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="home-reach-image home-reach-image-india">
            <video
              className="home-reach-video"
              autoPlay
              muted
              loop
              playsInline
            >
              <source
                src="/IndianMapElementUIfroZVS1.mp4"
                type="video/mp4"
              />
            </video>
          </div>
        </div>

        <div className="home-reach-card home-reach-card-reverse">
          <div className="home-reach-image home-reach-image-global">
            <video
              className="home-reach-video"
              autoPlay
              muted
              loop
              playsInline
            >
              <source
                src="/WorldMapElementUIforZVS1.mp4"
                type="video/mp4"
              />
            </video>
          </div>

          <div className="home-reach-content">
            <span className="home-reach-label">
              GLOBAL REACH
            </span>

            <h3>
              Global Footprint.
              <br />
              Trusted Worldwide.
            </h3>

            <p>
              Our oncology products are trusted in
              over 51+ countries across 6 continents,
              improving patient lives globally.
            </p>

            <div className="home-reach-stats">
              <div className="home-reach-stat">
                <div className="home-reach-icon">
                  <FaGlobeAsia />
                </div>

                <div>
                  <strong>51+</strong>
                  <span>Countries</span>
                  <small>and growing</small>
                </div>
              </div>

              <div className="home-reach-stat">
                <div className="home-reach-icon">
                  <FaGlobe />
                </div>

                <div>
                  <strong>6</strong>
                  <span>Continents</span>
                  <small>Global presence</small>
                </div>
              </div>

              <div className="home-reach-stat">
                <div className="home-reach-icon">
                  <FaHandshake />
                </div>

                <div>
                  <strong>50+</strong>
                  <span>Global Partners</span>
                  <small>
                    Building strong alliances
                  </small>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="home-reach-footer">
          <div>
            <h4>One Mission. Global Impact.</h4>

            <p>
              We are committed to making high-quality
              oncology treatments accessible to
              patients worldwide.
            </p>
          </div>

          <button
            type="button"
            onClick={() => navigate("/contact")}
          >
            Reach Us at
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;