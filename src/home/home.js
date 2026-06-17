import React from "react";
import { useState, useEffect } from "react";

import {
  FaMapMarkedAlt,
  FaHospital,
  FaHandshake,
  FaGlobeAsia,
  FaGlobe,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

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




const Home = () => 
{

  const products = [
  { id: 1, name: "Capetaz-500", img: "./home-products/Capetaz-500.jpeg" },
  { id: 2, name: "Cytraz-100", img: "./home-products/Cytraz-100.jpeg" },
  { id: 3, name: "Enzumide-160", img: "./home-products/Enzumide-160.jpeg" },
  { id: 4, name: "Melphalaz-2", img: "./home-products/Melphalaz-2.jpeg" },
  { id: 5, name: "Zaxol-260", img: "./home-products/Zaxol-260.jpeg" },
  { id: 6, name: "Zucarb", img: "./home-products/Zucarb.jpeg" },
];

  const [count, setCount] = useState(0);

const [slideIndex, setSlideIndex] = useState(0);
const [isTransitioning, setIsTransitioning] = useState(true);

const totalSlides = 2;
const nextSlide = () => {
  if (slideIndex >= totalSlides) return;

  setIsTransitioning(true);
  setSlideIndex((prev) => prev + 1);
};
const prevSlide = () => {
  if (slideIndex === 0) {
    setIsTransitioning(false);
    setSlideIndex(totalSlides);

    setTimeout(() => {
      setIsTransitioning(true);
      setSlideIndex(totalSlides - 1);
    }, 50);
  } else {
    setIsTransitioning(true);
    setSlideIndex((prev) => prev - 1);
  }
};

const handleTransitionEnd = (e) => {
  if (e.target !== e.currentTarget) return;

  if (slideIndex === totalSlides) {
    setIsTransitioning(false);
    setSlideIndex(0);

    setTimeout(() => {
      setIsTransitioning(true);
    }, 50);
  }
};


useEffect(() => {
  const end = 250;
  const duration = 5500; // ⬅️ slower (3.5 seconds)
  let startTime = null;

  const animate = (timestamp) => {
    if (!startTime) startTime = timestamp;
    const progress = timestamp - startTime;

    // Ease-out effect (slows down near end)
    const easeOut = 1 - Math.pow(1 - progress / duration, 3);

    const current = Math.min(Math.floor(easeOut * end), end);
    setCount(current);

    if (progress < duration) {
      requestAnimationFrame(animate);
    }
  };

  requestAnimationFrame(animate);
}, []);

const [index, setIndex] = useState(0);
const [subIndex, setSubIndex] = useState(0);
const [reverse, setReverse] = useState(false);

useEffect(() => {
  // When word is fully typed → pause → start deleting
  if (subIndex === phrases[index].length && !reverse) {
    setTimeout(() => setReverse(true), 1000);
    return;
  }

  // When fully deleted → move to next word
  if (subIndex === 0 && reverse) {
    setReverse(false);
    setIndex((prev) => (prev + 1) % phrases.length);
    return;
  }

  const timeout = setTimeout(() => {
    setSubIndex((prev) => prev + (reverse ? -1 : 1));
  }, reverse ? 60 : 120); // typing vs deleting speed

  return () => clearTimeout(timeout);
}, [subIndex, index, reverse]);


  return (
    <div className="home-container">
      {/* --- HERO SECTION --- */}
      <section className="hero-section">
        <div className="hero-content">
        <h1>
            Cancer is one <br />of the world’s biggest battles.
            </h1>          
            {/* <p className="hero-subtitle">
            Zuvius Lifesciences is on the frontlines—developing anti cancer drugs that fight it every single day.
          </p> */}
          <br />
            <p className="hero-stat-text">
            <span className="text-blue">1 in 6</span> deaths globally is caused by 
            <span className="text-red"> cancer</span>.
          </p>          
            <button className="learn-more-btn">Learn More</button>
        </div>
        <div className="hero-image">
          {/* Replace with your doctor image path */}
          <img src="./doctor-hero.png" alt="Doctor" />
        </div>
      </section>

      {/* --- STATS SECTION --- */}
      <section className="stats-section">
        {/* <p className="stats-lead">
          Early detection is crucial as many cases show no symptoms until it’s too late.
        </p> */}
        <div className="stats-grid">
          <div className="stat-card">
            <h3><span>18+</span> Million</h3>
            <p>Cancer Cases Annually</p>
          </div>
          <div className="stat-card">
            <h3><span>70%</span> Cases</h3>
            <p>Detected Late</p>
          </div>
          <div className="stat-card">
            <h3><span>9.6</span> Million</h3>
            <p>Annual Deaths</p>
          </div>
        </div>
      </section>

      <section className="leader-section">
  {/* LEFT */}
  <div className="leader-text">
   <h2>
  <span style={{ color: "#d32027" }}>Zuvius</span> — A <span className="text-blue">Global Leader</span> In The Fight Against
  <span className="text-red"> Cancer</span>
</h2>

    <p>
      Zuvius Lifesciences manufactures one of the widest ranges of anti-cancer drugs,
      committed to addressing the growing global burden of cancer while redefining
      the quality of life for patients.
    </p>

    {/* UPDATED BOTTOM SECTION */}
    <div className="leader-bottom">

      {/* COUNTER */}
      <div className="leader-counter">
        <h3>{count}+</h3>
        <p>SKUs</p>
      </div>

      {/* PRODUCTS */}
      <div className="leader-products">

        <div className="leader-product-item">
          <img src="/tablet.png" alt="Tablet" />
          <p>Tablet</p>
        </div>

        <div className="leader-product-item">
          <img src="/capsule.png" alt="Capsule" />
          <p>Capsule</p>
        </div>

        <div className="leader-product-item">
          <img src="/injectable-1.png" alt="Injectable" />
          <p>Injectable</p>
        </div>

        <div className="leader-product-item">
          <img src="/injectable-2.png" alt="Lyophilized" />
          <p>Lyophilized</p>
        </div>

      </div>
    </div>
  </div>

  {/* RIGHT */}
  <div className="leader-image-container">
    <div className="leader-image">
      <img src="./Quality.png" alt="Lab Research" />
    </div>

    <div className="typewriter-box">
      <span className="fixed-text">Quality that </span>
      <span className="changing-text">
        {`${phrases[index].substring(0, subIndex)}`}
        <span className="cursor">|</span>
      </span>
    </div>
  </div>
</section>
    
<section className="products-section">
  <h2 className="accreditation-main-title">Recent Launches</h2>

  <div className="carousel-container">

  <button className="carousel-btn left" onClick={prevSlide}>
    <FaChevronLeft />
  </button>

<div
  className={`carousel-track ${!isTransitioning ? "no-transition" : ""}`}
  onTransitionEnd={handleTransitionEnd}
  style={{
    transform: `translateX(-${slideIndex * 100}%)`,
  }}
>

    {/* SLIDE 1 */}
    <div className="slide">
      {products.slice(0, 3).map((product) => (
        <div className="product-card" key={product.id}>
          <img src={product.img} alt={product.name} />
          <div className="product-info">
            <h4>{product.name}</h4>
          </div>
        </div>
      ))}
    </div>

    {/* SLIDE 2 */}
    <div className="slide">
      {products.slice(3, 6).map((product) => (
        <div className="product-card" key={product.id}>
          <img src={product.img} alt={product.name} />
          <div className="product-info">
            <h4>{product.name}</h4>
          </div>
        </div>
      ))}
    </div>

    {/* SLIDE 1 CLONE */}
<div className="slide">
  {products.slice(0, 3).map((product) => (
    <div className="product-card" key={`clone-${product.id}`}>
      <img src={product.img} alt={product.name} />
      <div className="product-info">
        <h4>{product.name}</h4>
      </div>
    </div>
  ))}
</div>

  </div>

  <button className="carousel-btn right" onClick={nextSlide}>
    <FaChevronRight />
  </button>

</div>

  <div className="view-more-container">
    <button
      className="view-more-btn"
      onClick={() => (window.location.href = "/products")}
    >
      View More
    </button>
  </div>
</section>

<section className="accreditation-section">
  <h2 className="accreditation-main-title">
    Our Accreditations
  </h2>

  <div className="accreditation-grid">
    <div className="acc-item"><img src="./Accredations/US_FDA.png" alt="US FDA" /></div>
    <div className="acc-item"><img src="./Accredations/Anvisa.png" alt="INVIMA" /></div>
    <div className="acc-item"><img src="./Accredations/EU-GMP.png" alt="EU GMP" /></div>
    <div className="acc-item"><img src="./Accredations/WHO.png" alt="WHO GMP" /></div>
    <div className="acc-item"><img src="./Accredations/Cofepris.png" alt="COFEPRIS" /></div>
    <div className="acc-item"><img src="./Accredations/pics.png" alt="ANVISA" /></div>

    {/* New accreditation here */}
    <div className="acc-item">
      <img src="./Accredations/invima.png" alt="New Accreditation" />
    </div>
  </div>
</section>

 <section className="home-reach-section">
      <div className="home-reach-header">
        <span className="home-reach-tag">OUR REACH</span>

        <h2 className="home-reach-title">
          Innovating For A Cancer-Free Future
        </h2>

        <p className="home-reach-subtitle">
          Delivering trusted oncology solutions worldwide with advanced
          manufacturing, global compliance and a commitment to improving
          patient lives.
        </p>
      </div>

      {/* India Reach */}
    {/* India Reach */}
<div className="home-reach-card">
  <div className="home-reach-content">
    <span className="home-reach-label">DOMESTIC REACH</span>

    <h3>
      Strong Presence.
      <br />
      Widespread Impact.
    </h3>

    <p>
      Delivering oncology solutions across India through a robust
      distribution network and strategic partnerships.
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
      <span>Hospitals & Clinics</span>
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
        src="/IndianMapElementUIfroZVS1.mp4"
        type="video/mp4"
      />
    </video>
  </div>
</div>

      {/* Global Reach */}
     <div className="home-reach-card home-reach-card-reverse">
  <div className="home-reach-image home-reach-image-global">
    <video
      className="home-reach-video"
      autoPlay
      muted
      loop
      playsInline
    >
      <source src="/WorldMapElementUIforZVS1.mp4" type="video/mp4" />
    </video>
  </div>

        <div className="home-reach-content">
          <span className="home-reach-label">GLOBAL REACH</span>

          <h3>
            Global Footprint.
            <br />
            Trusted Worldwide.
          </h3>

          <p>
             Our oncology products are trusted in over 40+ countries across
    6 continents, improving patient lives globally.
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
      <small>Building strong alliances</small>
    </div>
  </div>
</div>

        </div>
      </div>

      <div className="home-reach-footer">
        <div>
          <h4>One Mission. Global Impact.</h4>

          <p>
            We are committed to making high-quality oncology treatments
            accessible to patients worldwide.
          </p>
        </div>

        <button>Explore Our Global Presence</button>
      </div>
    </section>   
</div>
  );
};

export default Home;




