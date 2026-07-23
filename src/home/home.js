import React, { useEffect, useState } from "react";
import {
  FaMapMarkedAlt,
  FaHospital,
  FaHandshake,
  FaGlobeAsia,
  FaGlobe,
} from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
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

const heroSlides = [
  {
    id: 1,
    image: "/doctor-hero.png",
    alt: "Doctor hero visual",
  },
  {
    id: 2,
    image: "/manufacturer-slide.png",
    alt: "Manufacturer of widest range of anticancer drugs",
  },
];

const recentLaunchProducts = [
  {
    id: 1,
    name: "Zydrox Cap",
    genericName: "Hydroxyurea Capsule",
    image: "/new_product_page/Zydrox-500.png",
    imageClass: "recent-image-zydrox-cap",
    route: "/products/oncoace/zydrox-cap",
  },
  {
    id: 2,
    name: "Zaxotein",
    genericName: "Paclitaxel Inj",
    image: "/new_product_page/Zaxotien-100.png",
    imageClass: "recent-image-zaxotein",
    route: "/products/oncoace/zaxotein",
  },
  {
    id: 3,
    name: "Zoplide",
    genericName: "Leuprolide Acetate Inj",
    image: "/new_product_page/zoplide-goup.png",
    imageClass: "recent-image-zoplide",
    route: "/products/oncoace/zoplide",
  },
  {
    id: 4,
    name: "Acalataz",
    genericName: "Acalabrutinib Capsules",
    image: "/new_product_page/Acalataz-100.png",
    imageClass: "recent-image-acalataz",
    route: "/products/oncoace/acalataz",
  },
  {
    id: 5,
    name: "Zomacta",
    genericName: "Eltrombopag Olamine Tablet",
    image: "/new_product_page/zomacta-group.png",
    imageClass: "recent-image-zomacta",
    route: "/products/oncoace/zomacta",
  },
  {
    id: 6,
    name: "Zoserlin",
    genericName: "Goserelin Acetate Implant Injection",
    image: "/new_product_page/Zoserlin-3.6.png",
    imageClass: "recent-image-zoserlin",
    route: "/products/oncoace/zoserlin",
  },
  {
    id: 7,
    name: "Zuvistatin",
    genericName: "Octreotide Acetate",
    image: "/new_product_page/zuvistatin-group.png",
    imageClass: "recent-image-zuvistatin",
    route: "/products/oncoace/zuvistatin",
  },
  {
    id: 8,
    name: "Acantha",
    genericName: "Olaparib Tablets",
    image: "/new_product_page/acantha-group.png",
    imageClass: "recent-image-acantha",
    route: "/products/oncoace/acantha",
  },
  {
    id: 9,
    name: "Zuvisome",
    genericName: "Liposomal Amphotericin B Injection",
    image: "/new_product_page/Zuvisome-50.png",
    imageClass: "recent-image-zuvisome",
    route: "/products/oncoace/zuvisome",
  },
];


const Home = () => {
  const navigate = useNavigate();

  const [count, setCount] = useState(0);

  const [heroSlideIndex, setHeroSlideIndex] = useState(0);

  const [phraseIndex, setPhraseIndex] = useState(0);
  const [typedText, setTypedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);



  useEffect(() => {
    const heroInterval = setInterval(() => {
      setHeroSlideIndex(
        (previousIndex) =>
          (previousIndex + 1) % heroSlides.length
      );
    }, 3500);

    return () => clearInterval(heroInterval);
  }, []);


  useEffect(() => {
    const finalCount = 250;
    const duration = 2500;

    let startTime = null;
    let animationFrameId;

    const animateCounter = (timestamp) => {
      if (!startTime) startTime = timestamp;

      const progress = timestamp - startTime;
      const progressRatio = Math.min(progress / duration, 1);
      const eased = 1 - Math.pow(1 - progressRatio, 3);

      const currentCount = Math.min(
        Math.floor(eased * finalCount),
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

    return () =>
      cancelAnimationFrame(animationFrameId);
  }, []);

  useEffect(() => {
    const currentPhrase = phrases[phraseIndex];
    let timer;

    if (!isDeleting && typedText.length < currentPhrase.length) {
      timer = setTimeout(() => {
        setTypedText(
          currentPhrase.slice(0, typedText.length + 1)
        );
      }, 60);
    } else if (
      !isDeleting &&
      typedText.length === currentPhrase.length
    ) {
      timer = setTimeout(() => {
        setIsDeleting(true);
      }, 1200);
    } else if (isDeleting && typedText.length > 0) {
      timer = setTimeout(() => {
        setTypedText(
          currentPhrase.slice(0, typedText.length - 1)
        );
      }, 28);
    } else if (isDeleting && typedText.length === 0) {
      setIsDeleting(false);
      setPhraseIndex(
        (previousIndex) =>
          (previousIndex + 1) % phrases.length
      );
    }

    return () => clearTimeout(timer);
  }, [typedText, isDeleting, phraseIndex]);


  const renderRecentProductCard = (product, uniqueKey, isDuplicate = false) => {
    return (
      <Link
        to={product.route}
        className="home-recent-product-card"
        key={uniqueKey}
        tabIndex={isDuplicate ? -1 : undefined}
        aria-hidden={isDuplicate ? true : undefined}
      >
        <div className="home-recent-product-image">
          <img
            src={product.image}
            alt={product.name}
            className={`home-recent-image ${product.imageClass}`}
            loading="lazy"
          />
        </div>

        <div className="home-recent-product-content">
          <h3>{product.name}</h3>
          <p>{product.genericName}</p>

          <div className="home-recent-product-arrow">
            <span>→</span>
          </div>
        </div>
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

          <p className="hero-stat-text">
            <span className="text-blue">1 in 6</span>{" "}
            deaths globally is caused by{" "}
            <span className="text-red">cancer</span>.
          </p>

          <button
            type="button"
            className="learn-more-btn"
            onClick={() => navigate("/whatiscancer")}
          >
            Learn More
          </button>
        </div>

        <div className="hero-slider-wrapper">
          <div
            className="hero-slider-track"
            style={{
              transform: `translateX(-${heroSlideIndex * 100}%)`,
            }}
          >
            {heroSlides.map((slide) => (
              <div className="hero-slide" key={slide.id}>
                <img
                  src={slide.image}
                  alt={slide.alt}
                  className="hero-slide-image"
                />
              </div>
            ))}
          </div>

          <div className="hero-slider-dots">
            {heroSlides.map((slide, index) => (
              <button
                key={slide.id}
                type="button"
                className={`hero-dot ${
                  heroSlideIndex === index ? "active" : ""
                }`}
                onClick={() => setHeroSlideIndex(index)}
                aria-label={`Go to hero slide ${index + 1}`}
              />
            ))}
          </div>
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

      {/* GLOBAL LEADER / SKU */}

      <section className="leader-section">
        <div className="leader-text">
          <h2>
            <span className="text-red">Zuvius</span> — A{" "}
            <span className="text-blue">Global Leader</span> In
            The Fight Against{" "}
            <span className="text-red">Cancer</span>
          </h2>

          <p>
            Zuvius Lifesciences manufactures one of the
            widest ranges of anti-cancer drugs, committed
            to addressing the growing global burden of
            cancer while redefining the quality of life for
            patients.
          </p>
        </div>

        <div className="leader-infographic-card">
          <div className="leader-sku-box">
            <span className="leader-sku-number">{count}+</span>
            <span className="leader-sku-label">SKUs</span>
           
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
                alt="Injectable Liquid"
              />
              <h4>Injectable Liquid</h4>
            </div>

            <div className="leader-product-type-card">
              <img
                src="/injectable-2.png"
                alt="Injectable Lyophilized"
              />
              <h4>Injectable Lyophilized</h4>
            </div>

            <div className="leader-product-type-card leader-product-type-card-full">
              <img src="/injectable-3.png" alt="PFS" />
              <h4>PFS (Pre-filled Syringes)</h4>
            </div>
          </div>
        </div>
      </section>

      {/* RECENT LAUNCHES */}

      <section className="products-section">
        <div className="section-heading">
          <h2 className="section-title section-title-light">
            Recent Launches
          </h2>
        </div>

        <div
          className="recent-marquee"
          role="region"
          aria-label="Recent product launches"
        >
          <div className="recent-marquee-track">
            {[0, 1].map((copyIndex) => (
              <div
                className="recent-marquee-group"
                key={`recent-marquee-group-${copyIndex}`}
                aria-hidden={copyIndex === 1 ? true : undefined}
              >
                {recentLaunchProducts.map((product) =>
                  renderRecentProductCard(
                    product,
                    `recent-${copyIndex}-${product.id}`,
                    copyIndex === 1
                  )
                )}
              </div>
            ))}
          </div>
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
            <h2 className="section-title">
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
                  src="/Accredations/US_FDA.png"
                  alt="US FDA"
                />
              </div>

              <div className="acc-item">
                <img
                  src="/Accredations/Anvisa.png"
                  alt="ANVISA"
                />
              </div>

              <div className="acc-item">
                <img
                  src="/Accredations/EU-GMP.png"
                  alt="EU GMP"
                />
              </div>

              <div className="acc-item">
                <img src="/Accredations/WHO.png" alt="WHO" />
              </div>

              <div className="acc-item">
                <img
                  src="/Accredations/Cofepris.png"
                  alt="COFEPRIS"
                />
              </div>

              <div className="acc-item">
                <img src="/Accredations/pics.png" alt="PIC/S" />
              </div>

              <div className="acc-item">
                <img
                  src="/Accredations/invima.png"
                  alt="INVIMA"
                />
              </div>
            </div>
          </div>

          <div className="accreditation-right">
            <div className="accreditation-q-card">
              <img
                src="/Quality.png"
                alt="Culture of Quality"
                className="quality-image"
              />

              <div className="accreditation-typewriter">
                <div className="fixed-text">Quality that</div>

                <div className="changing-text-row">
                  <span className="changing-text">
                    {typedText}
                  </span>
                  <span className="cursor">|</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OUR REACH */}

      <section className="home-reach-section">
        <div className="home-reach-header">
          <span className="home-reach-tag">OUR REACH</span>

          <p className="home-reach-subtitle">
            Delivering trusted oncology solutions
            worldwide with advanced manufacturing,
            global compliance and a commitment to
            improving patient lives.
          </p>
        </div>

        {/* INDIA SECTION */}

        <div className="home-reach-card">
          <div className="home-reach-content">
            <span className="home-reach-label">
              DOMESTIC REACH
            </span>

            

            <p>
              Delivering oncology solutions across India
              through a robust distribution network and
              strategic partnerships.
            </p>

            <div className="home-reach-stats">
              <div className="home-reach-stat">
                <div className="home-reach-icon">
                  <FaMapMarkedAlt />
                </div>

                <div>
                  <strong>28 States</strong>
                  <span>8 Union Territories</span>
                  <small>Pan-India domestic reach</small>
                </div>
              </div>

              <div className="home-reach-stat">
                <div className="home-reach-icon">
                  <FaHospital />
                </div>

                <div>
                  <strong>15,000+</strong>
                  <span>Hospitals &amp; Clinics</span>
                </div>
              </div>

              <div className="home-reach-stat">
                <div className="home-reach-icon">
                  <FaHandshake />
                </div>

                <div>
                  <strong>100+</strong>
                  <span>Distribution Partners</span>
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
                src="/IndianMapElementUIfroZVS2.mp4"
                type="video/mp4"
              />
            </video>
          </div>
        </div>

        {/* WORLD SECTION */}

        <div className="home-reach-global-card">
          <div className="home-reach-global-top">
            <span className="home-reach-label">GLOBAL REACH</span>


            <p>
              Our oncology products are trusted in over
              51+ countries across 6 continents,
              improving patient lives globally.
            </p>
          </div>

          <div className="home-reach-global-map">
            <video
              className="home-reach-video"
              autoPlay
              muted
              loop
              playsInline
            >
              <source
                src="/WorldMapElementUIforZVS2.mp4"
                type="video/mp4"
              />
            </video>
          </div>

          <div className="home-reach-global-stats">
            <div className="home-reach-global-stat-card">
              <div className="home-reach-icon">
                <FaGlobeAsia />
              </div>

              <strong>51+ Countries</strong>
              <small>and growing</small>
            </div>

            <div className="home-reach-global-stat-card">
              <div className="home-reach-icon">
                <FaGlobe />
              </div>

              <strong>6 Continents</strong>
              <small>Global presence</small>
            </div>

            <div className="home-reach-global-stat-card">
              <div className="home-reach-icon">
                <FaHandshake />
              </div>

              <strong>50+ Global Partners</strong>
              <small>Building strong alliances</small>
            </div>
          </div>
        </div>

        <div className="home-reach-footer">
          <div>
            <h4>One Mission. Global Impact.</h4>

            <p>
              We are committed to making high-quality
              oncology treatments accessible to patients
              worldwide.
            </p>
          </div>

          <button
            type="button"
            onClick={() => navigate("/contact")}
          >
            Reach Us
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;