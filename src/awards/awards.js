import React from "react";
import "./awards.css";
import PageBanner from "../components/PageBanner";

const awardItems = [
  {
    title: "Healthcare Excellence Certificate",
    image: "/awards and certifications/healthcare excellence cert.png",
  },
  {
    title: "Healthcare Excellence",
    image: "/awards and certifications/healthcare execellence.png",
  },
  {
    title: "Limca Book of Records 2019",
    image: "/awards and certifications/limca book records.jpeg",
  },
  {
    title: "Most Promising Brand",
    image: "/awards and certifications/most promising brand.png",
  },
  {
    title: "Quality Orientation Certificate",
    image: "/awards and certifications/quality orientation cert.jpeg",
  },
  {
    title: "Rising Star",
    image: "/awards and certifications/rising star.jpeg",
  },
  {
    title: "Smart Healthcare Leader",
    image: "/awards and certifications/smart healthcare leader.jpeg",
  },
];

const membershipItems = [
  {
    title: "Bombay Chamber of Commerce & Industry",
    image: "/membership/bombay chamber logo.png",
  },
  {
    title: "Certificate of Membership",
    image: "/membership/cert of membership.png",
  },
  {
    title: "IDMA Certificate",
    image: "/membership/idma cert.png",
  },
  {
    title: "Pharmexcil Certificate",
    image: "/membership/pharmixcil cert.png",
  },
  {
    title: "Udyog Aadhaar Certificate",
    image: "/membership/udyog adhar cert.png",
  },
];

const Awards = () => {
  return (
    <div className="awards-page">
<PageBanner
  image="/awards and certifications/awardsbanner.png"
  title={
    <>
      AWARDS & <br />
      RECOGNITION
    </>
  }
  description=""
  alt="Awards Hero"
/>

      <section className="accreditation-card">
        <div className="accreditation-top">
          <h3>ACCREDITATION</h3>
          <div className="mini-line"></div>
        </div>

        <div className="accreditation-logo-row">
          <div className="accreditation-logo-item">
            <img src="/Accredations/Anvisa.png" alt="Anvisa" />
          </div>

          <div className="accreditation-logo-item">
            <img src="/Accredations/Cofepris.png" alt="Cofepris" />
          </div>

          <div className="accreditation-logo-item">
            <img src="/Accredations/EU-GMP.png" alt="EU GMP" />
          </div>

          <div className="accreditation-logo-item">
            <img src="/Accredations/Invima.png" alt="Invima" />
          </div>

          <div className="accreditation-logo-item">
            <img src="/Accredations/US_FDA.png" alt="US FDA" />
          </div>

          <div className="accreditation-logo-item">
            <img src="/Accredations/WHO.png" alt="WHO" />
          </div>

          <div className="accreditation-logo-item">
  <img src="/Accredations/PICS.png" alt="PIC/S" />
</div>

        </div>
      </section>

      <section className="awards-certification">
        <h2>AWARDS & CERTIFICATION</h2>
        <div className="center-line"></div>

        <p>
          Zuvius Lifesciences has garnered numerous accolades, certifications,
          and affiliations, solidifying its standing as a prominent player in the
          healthcare industry.
        </p>

        <div className="timeline-wrap">
          {/* <button className="timeline-arrow left">‹</button> */}

          <div className="timeline-line"></div>

          <div className="timeline-grid">
            {awardItems.map((award, index) => (
              <div className="timeline-item" key={index}>
                <div className="award-image-box">
                  <img src={award.image} alt={award.title} />
                </div>

                <div className="timeline-number">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <h4>{award.title}</h4>
              </div>
            ))}
          </div>

          {/* <button className="timeline-arrow right">›</button> */}
        </div>
      </section>

      <section className="membership-section">
        <div className="membership-blue-card">
          
          <h3>MEMBERSHIP</h3>
          <div className="white-line"></div>
          <p>
            Zuvius Lifesciences is a proud member of various prestigious
            industry associations, fostering collaboration and promoting
            advancements in healthcare.
          </p>
        </div>

        <div className="membership-cards">
          {membershipItems.map((item, index) => (
            <div className="membership-card" key={index}>
              <div className="membership-logo">
                <img src={item.image} alt={item.title} />
              </div>
              <h4>{item.title}</h4>
            </div>
          ))}
        </div>
      </section>

      
    </div>
  );
};

export default Awards;