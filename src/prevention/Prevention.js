import React from "react";
import "./prevention.css";
import PageBanner from "../components/PageBanner";

const healthyChoices = [
  {
    title: "Yoga & Cancer",
    desc: "Discover how yoga helps improve well-being, reduce stress and support recovery.",
    img: "/prevention/yoga.png",
  },
  {
    title: "Diet & Cancer",
    desc: "Explore the power of a balanced diet in reducing cancer risk and supporting overall health.",
    img: "/prevention/diet.png",
  },
  {
    title: "Lifestyle & Support",
    desc: "Learn how a healthy lifestyle and support from loved ones make a big difference.",
    img: "/prevention/support.png",
  },
];

const detectionData = [
  {
    title: "Awareness",
    desc: "Understanding the warning signs, symptoms, and risk factors of cancer helps individuals make informed decisions and seek medical advice at the right time.",
    icon: "fa-solid fa-hand-holding-heart",
  },
  {
    title: "Early Diagnosis",
    desc: "Identifying cancer at an early stage through timely medical evaluation can expand treatment options and improve the chances of successful outcomes.",
    icon: "fa-solid fa-magnifying-glass",
  },
  {
    title: "Screening",
    desc: "Regular screening can detect certain cancers before symptoms appear, allowing earlier intervention and supporting more effective treatment outcomes.",
    icon: "fa-solid fa-users",
  },
];

const strategies = [
  {
    title: "Avoid tobacco in any form",
    desc: "Say no to smoking and other tobacco products.",
    img: "/prevention/tabacco.png",
    icon: "fa-solid fa-ban-smoking",
  },
  {
    title: "Get vaccinated (HPV & Hepatitis B)",
    desc: "Vaccination can prevent certain cancer-causing infections.",
    img: "/prevention/vaccine.png",
    icon: "fa-solid fa-syringe",
  },
  {
    title: "Protect from UV exposure",
    desc: "Use sunscreen, wear protective clothing and avoid tanning.",
    img: "/prevention/uv.png",
    icon: "fa-regular fa-sun",
  },
  {
    title: "Limit exposure to radiation",
    desc: "Avoid unnecessary radiation and follow safety guidelines.",
    img: "/prevention/radiation.png",
    icon: "fa-solid fa-person-running",
  },
  {
    title: "Eat healthy & stay physically active",
    desc: "A balanced diet and regular exercise lower cancer risk.",
    img: "/prevention/food.png",
    icon: "fa-solid fa-apple-whole",
  },
  {
    title: "Regular check-ups save lives",
    desc: "Routine check-ups help detect issues early.",
    img: "/prevention/checkup.png",
    icon: "fa-solid fa-shield-heart",
  },
];  

const Prevention = () => {
  return (
    <div className="prevention-page">
      {/* HERO */}
      <PageBanner
  image="/prevention/preventionbanner.png"
  title={
    <>
      Prevent Today <br />
      Protect Tomorrow
    </>
  }
  description=""
  alt="Prevention"
/>

      {/* HEALTHY CHOICES */}
      <section className="prevention-section">
        <div className="prevention-container">
          <h2>Healthy choices lead to a healthier tomorrow</h2>
          <div className="prevention-heading-line"></div>

          <div className="healthy-grid">
            {healthyChoices.map((item) => (
              <div className="healthy-card" key={item.title}>
                <div className="healthy-img">
                  <img src={item.img} alt={item.title} />
                </div>

                <div className="healthy-content">
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EARLY DETECTION */}
      <section className="prevention-section detection-section">
        <div className="prevention-container">
          <h2>Early Detection Saves Lives</h2>
          <div className="prevention-heading-line"></div>

          <div className="detection-row">
            {detectionData.map((item) => (
              <div className="detection-item" key={item.title}>
                <div className="detection-icon">
                  <i className={item.icon}></i>
                </div>

                <div>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STRATEGIES */}
      <section className="prevention-section strategies-section">
        <div className="prevention-container">
          <h2>Prevention Strategies</h2>
          <div className="prevention-heading-line"></div>

          <div className="strategies-grid">
            {strategies.map((item) => (
              <div className="strategy-card" key={item.title}>
                <div className="strategy-img">
                  <img src={item.img} alt={item.title} />
                </div>

                <div className="strategy-content">
                  <div className="strategy-icon">
                    <i className={item.icon}></i>
                  </div>

                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default Prevention;