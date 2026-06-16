// EarlyDiagnosis.js
import React from "react";
import "./earlydiagnosis.css";
import PageBanner from "../components/PageBanner";


const journeyData = [
  {
    title: "Recognize",
    desc: "Be aware of early signs and symptoms. Listen to your body and don’t ignore changes.",
    icon: "fa-solid fa-comments",
  },
  {
    title: "Evaluate",
    desc: "Consult a healthcare professional and undergo appropriate screening or tests.",
    icon: "fa-solid fa-magnifying-glass",
  },
  {
    title: "Act Early",
    desc: "Early detection leads to timely treatment and better chances of recovery.",
    icon: "fa-solid fa-shield-heart",
  },
];

const mattersData = [
  {
    title: "More Treatment Options",
    desc: "Early diagnosis opens up more effective and less aggressive treatment possibilities.",
    img: "/diagnosis/treatment-options.png",
  },
  {
    title: "Improved Quality of Life",
    desc: "Timely care reduces complications and helps maintain a better quality of life.",
    img: "/diagnosis/quality-life.png",
  },
  {
    title: "Lower Healthcare Costs",
    desc: "Early detection can reduce the need for extensive treatments and hospitalization.",
    img: "/diagnosis/lower-cost.png",
  },
];

const signsData = [
  {
    title: "Change in Bowel or Bladder Habits",
    desc: "Long-term changes in bowel movements, stool appearance, or urination patterns should be discussed with a healthcare professional.",
    img: "common_signs/sign-1.png",
  },
  {
    title: "Sores That Do Not Heal",
    desc: "Persistent sores on the skin, mouth, or other body parts that fail to heal may require medical attention.",
    img: "/common_signs/sign-2.png",
  },
  {
    title: "Unusual Bleeding or Discharge",
    desc: "Unexpected bleeding or discharge from any part of the body should never be ignored and should be evaluated by a doctor.",
    img: "/common_signs/sign-3.png",
  },
  {
    title: "Lump or Thickening",
    desc: "A lump or thickened area in the breast, testicles, lymph nodes, or elsewhere may be an important warning sign.",
    img: "/common_signs/sign-4.png",
  },
  {
    title: "Indigestion or Difficulty Swallowing",
    desc: "Persistent indigestion or trouble swallowing that does not improve over time should be medically assessed.",
    img: "/common_signs/sign-5.png",
  },
  {
    title: "Changes in Moles or Mouth Sores",
    desc: "Changes in the size, color, shape, or appearance of moles, freckles, or mouth sores should be checked promptly.",
    img: "/common_signs/sign-6.png",
  },
  {
    title: "Nagging Cough or Hoarseness",
    desc: "A long-lasting cough or unexplained hoarseness may indicate an underlying condition that needs evaluation.",
    img: "/common_signs/sign-7.png",
  },
  {
    title: "Unexplained Weight Loss",
    desc: "Losing weight without changes in diet or activity may be a sign that warrants further medical investigation.",
    img: "/common_signs/sign-8.png",
  },
  {
    title: "Persistent Fever",
    desc: "Recurring fever without a clear cause can sometimes be associated with underlying health conditions.",
    img: "/common_signs/sign-9.png",
  },
  {
    title: "Extreme Fatigue",
    desc: "Feeling unusually tired despite adequate rest may be a symptom that should not be overlooked.",
    img: "/common_signs/sign-10.png",
  },
  {
    title: "Persistent Pain",
    desc: "Pain that lasts for a long period or gradually worsens should be discussed with a healthcare professional.",
    img: "/common_signs/sign-11.png",
  },
  {
    title: "Skin Changes",
    desc: "New or unusual changes in the skin, including color, texture, or appearance, should be examined promptly.",
    img: "/common_signs/sign-12.png",
  },
];

const EarlyDiagnosis = () => {
  return (
    <div className="ed-page">
      <PageBanner
  image="/diagnosis/earlydiagnosisbanner.png"
  title={
    <>
      Early Diagnosis <br />
      Better Outcomes.
    </>
  }
  description=""
  alt="Early Diagnosis"
/>

      <section className="ed-section ed-journey-section">
        <div className="ed-container">
          <h2>The Early Diagnosis Journey</h2>
          <p className="ed-section-sub">
            A simple 3-step path that can lead to early detection and better outcomes.
          </p>

          <div className="ed-journey-row">
            {journeyData.map((item, index) => (
              <React.Fragment key={item.title}>
                <div className="ed-journey-item">
                  <div className="ed-journey-icon">
                    <i className={item.icon}></i>
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>

                {index !== journeyData.length - 1 && (
                  <div className="ed-arrow">→</div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      <section className="ed-section">
        <div className="ed-container">
          <h2>Why Early Diagnosis Matters</h2>
          <div className="ed-blue-line"></div>

          <div className="ed-matters-grid">
            {mattersData.map((item) => (
              <div className="ed-matter-card" key={item.title}>
                <div className="ed-matter-img">
                  <img src={item.img} alt={item.title} />
                </div>
                <div className="ed-matter-content">
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="ed-section ed-signs-section">
        <div className="ed-container">
          <h2>Common Signs to Watch For</h2>
          <div className="signs-grid">
  {signsData.map((item, index) => (
    <div className="sign-card" key={index}>
      <div className="sign-card-img">
        <img src={item.img} alt={item.title} />
      </div>

      <div className="sign-card-content">
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

export default EarlyDiagnosis;