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

const accreditationItems = [
  {
    title: "Anvisa",
    image: "./Accredations/Anvisa.png",
  },
  {
    title: "Cofepris",
    image: "./Accredations/Cofepris.png",
  },
  {
    title: "EU GMP",
    image: "./Accredations/EU-GMP.png",
  },
  {
    title: "Invima",
    image: "./Accredations/Invima.png",
  },
  {
    title: "US FDA",
    image: "./Accredations/US_FDA.png",
  },
  {
    title: "WHO",
    image: "./Accredations/WHO.png",
  },
  {
    title: "PIC/S",
    image: "./Accredations/PICS.png",
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

      <div className="awards-content">
        <section className="awards-accreditation-card">
          <div className="awards-section-head">
            <h3>ACCREDITATION</h3>
            <div className="awards-small-line"></div>
          </div>

          <div className="awards-accreditation-grid">
            {accreditationItems.map((item, index) => (
              <div className="awards-accreditation-item" key={index}>
                <img src={item.image} alt={item.title} />
              </div>
            ))}
          </div>
        </section>

        <section className="awards-certification">
          <div className="awards-section-head">
            <h2>AWARDS & CERTIFICATION</h2>
            <div className="awards-small-line"></div>
          </div>

          <p>
            Zuvius Lifesciences has garnered numerous accolades,
            certifications, and affiliations, solidifying its standing as a
            prominent player in the healthcare industry.
          </p>

          <div className="awards-timeline-wrap">
            <div className="awards-timeline-line"></div>

            <div className="awards-timeline-grid">
              {awardItems.map((award, index) => (
                <div className="awards-timeline-item" key={index}>
                  <div className="awards-image-box">
                    <img src={award.image} alt={award.title} />
                  </div>

                  <div className="awards-number">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <h4>{award.title}</h4>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="awards-membership-section">
          <div className="awards-membership-info">
            <h3>MEMBERSHIP</h3>
            <div className="awards-white-line"></div>

            <p>
              Zuvius Lifesciences is a proud member of various prestigious
              industry associations, fostering collaboration and promoting
              advancements in healthcare.
            </p>
          </div>

          <div className="awards-membership-grid">
            {membershipItems.map((item, index) => (
              <div className="awards-membership-card" key={index}>
                <div className="awards-membership-logo">
                  <img src={item.image} alt={item.title} />
                </div>

                <h4>{item.title}</h4>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Awards;