import React, { useEffect, useState } from "react";
import "./awards.css";
import PageBanner from "../components/PageBanner";

const awardItems = [
  {
    title: "Healthcare Excellence Certificate",
    image:
      "/awards and certifications/healthcare excellence cert.png",
    info:
      "A recognition highlighting Zuvius Lifesciences’ commitment to quality, patient care and excellence in the healthcare sector.",
  },
  {
    title: "Healthcare Excellence",
    image:
      "/awards and certifications/healthcare execellence.png",
    info:
      "An industry recognition celebrating consistent contribution, innovation and excellence within healthcare.",
  },
  {
    title: "Limca Book of Records 2019",
    image:
      "/awards and certifications/limca book records.jpeg",
    info:
      "Recognition associated with the Limca Book of Records 2019, acknowledging an important achievement by Zuvius Lifesciences.",
  },
  {
    title: "Most Promising Brand",
    image:
      "/awards and certifications/most promising brand.png",
    info:
      "An award recognising Zuvius Lifesciences as a promising pharmaceutical brand focused on growth, trust and quality.",
  },
  {
    title: "Quality Orientation Certificate",
    image:
      "/awards and certifications/quality orientation cert.jpeg",
    info:
      "A certificate recognising the organisation’s strong quality orientation and commitment to maintaining reliable standards.",
  },
  {
    title: "Rising Star",
    image:
      "/awards and certifications/rising star.jpeg",
    info:
      "A recognition celebrating the organisation’s growth, progress and expanding contribution to the healthcare industry.",
  },
  {
    title: "Smart Healthcare Leader",
    image:
      "/awards and certifications/smart healthcare leader.jpeg",
    info:
      "Recognition for leadership, innovation and progressive approaches within the healthcare and pharmaceutical sector.",
  },
];

const membershipItems = [
  {
    title: "Bombay Chamber of Commerce & Industry",
    image: "/membership/bombay chamber logo.png",
    info:
      "Zuvius Lifesciences is associated with the Bombay Chamber of Commerce & Industry, supporting responsible business practices, collaboration, industry development and sustainable organisational growth.",
  },
  {
    title: "Certificate of Membership",
    image: "/membership/cert of membership.png",
    info:
      "This certificate represents Zuvius Lifesciences’ membership in a recognised industry organisation and reflects its commitment to professional standards, collaboration and continuous development.",
  },
  {
    title: "IDMA Certificate",
    image: "/membership/idma cert.png",
    info:
      "Membership with the Indian Drug Manufacturers’ Association reflects Zuvius Lifesciences’ association with the pharmaceutical industry and its commitment to quality, compliance and responsible manufacturing practices.",
  },
  {
    title: "Pharmexcil Certificate",
    image: "/membership/pharmixcil cert.png",
    info:
      "The Pharmexcil membership reflects Zuvius Lifesciences’ participation in India’s pharmaceutical export community and its commitment to delivering quality healthcare products across international markets.",
  },
];

const accreditationItems = [
  {
    title: "Anvisa",
    image: "/Accredations/Anvisa.png",
  },
  {
    title: "Cofepris",
    image: "/Accredations/Cofepris.png",
  },
  {
    title: "EU GMP",
    image: "/Accredations/EU-GMP.png",
  },
  {
    title: "Invima",
    image: "/Accredations/invima.png",
  },
  {
    title: "US FDA",
    image: "/Accredations/US_FDA.png",
  },
  {
    title: "WHO",
    image: "/Accredations/WHO.png",
  },
  {
    title: "PIC/S",
    image: "/Accredations/pics.png",
  },
];

const Awards = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [modalType, setModalType] = useState(null);

  const openDetailModal = (item, type) => {
    setSelectedItem(item);
    setModalType(type);
  };

  const openImageModal = (item) => {
    setSelectedItem(item);
    setModalType("image");
  };

  const closeModal = () => {
    setSelectedItem(null);
    setModalType(null);
  };

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        closeModal();
      }
    };

    if (selectedItem) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleEscape);
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleEscape);
    };
  }, [selectedItem]);

  const handleOverlayClick = (event) => {
    if (event.target === event.currentTarget) {
      closeModal();
    }
  };

  const handleCardKeyDown = (event, callback) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      callback();
    }
  };

  const isDetailModal =
    modalType === "award" || modalType === "membership";

  return (
    <div className="awards-page">
      <PageBanner
        image="/awards and certifications/awardsbanner.png"
        title={
          <>
            AWARDS &amp; <br />
            RECOGNITION
          </>
        }
        description=""
        alt="Awards and recognition"
      />

      <main className="awards-content">
        {/* Awards and certification */}

        <section className="awards-certification">
          <div className="awards-section-head">
            <h2>AWARDS &amp; CERTIFICATION</h2>
            <div className="awards-small-line" />
          </div>

          <p>
            Zuvius Lifesciences has garnered numerous accolades,
            certifications and affiliations, solidifying its standing
            as a prominent player in the healthcare industry.
          </p>

          <div className="awards-timeline-wrap">
            <div className="awards-timeline-grid">
              {awardItems.map((award) => (
                <div
                  className="awards-timeline-item awards-clickable-image"
                  key={award.title}
                  onClick={() =>
                    openDetailModal(award, "award")
                  }
                  role="button"
                  tabIndex={0}
                  aria-label={`View details for ${award.title}`}
                  onKeyDown={(event) =>
                    handleCardKeyDown(event, () =>
                      openDetailModal(award, "award")
                    )
                  }
                >
                  <div className="awards-image-box">
                    <img
                      src={award.image}
                      alt={award.title}
                      loading="lazy"
                    />
                  </div>

                  <h4>{award.title}</h4>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Membership */}

        <section className="awards-membership-section">
          <div className="awards-section-head">
            <h2>MEMBERSHIP</h2>
            <div className="awards-small-line" />
          </div>

          <p className="awards-section-description">
            Zuvius Lifesciences is a proud member of prestigious
            industry associations that encourage collaboration,
            quality and advancement in healthcare.
          </p>

          <div className="awards-membership-grid">
            {membershipItems.map((item) => (
              <button
                type="button"
                className="awards-membership-card"
                key={item.title}
                onClick={() =>
                  openDetailModal(item, "membership")
                }
                aria-label={`View details for ${item.title}`}
              >
                <div className="awards-membership-logo">
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                  />
                </div>

                <h4>{item.title}</h4>

                <span className="certificate-view-text">
                  View details
                </span>
              </button>
            ))}
          </div>
        </section>

        {/* Accreditation */}

        <section className="awards-accreditation-card">
          <div className="awards-section-head">
            <h2>ACCREDITATION</h2>
            <div className="awards-small-line" />
          </div>

          <p className="awards-section-description">
            Our accreditations reflect our commitment to international
            quality, compliance and pharmaceutical manufacturing
            standards.
          </p>

          <div className="awards-accreditation-grid">
            {accreditationItems.map((item) => (
              <button
                type="button"
                className="awards-accreditation-item"
                key={item.title}
                onClick={() => openImageModal(item)}
                aria-label={`View ${item.title} accreditation`}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                />

                <span>{item.title}</span>
              </button>
            ))}
          </div>
        </section>
      </main>

      {/* Popup modal */}

      {selectedItem && (
        <div
          className="awards-image-modal"
          role="presentation"
          onClick={handleOverlayClick}
        >
          <div
            className={`awards-image-modal-content ${
              isDetailModal
                ? "awards-detail-modal"
                : "awards-zoom-modal"
            }`}
            role="dialog"
            aria-modal="true"
            aria-labelledby="awards-modal-title"
          >
            <button
              type="button"
              className="awards-modal-close"
              onClick={closeModal}
              aria-label="Close popup"
            >
              ×
            </button>

            {isDetailModal ? (
              <div className="award-popup-layout">
                <div className="award-popup-image">
                  <img
                    src={selectedItem.image}
                    alt={selectedItem.title}
                  />
                </div>

                <div className="award-popup-info">
                  <span className="award-popup-label">
                    {modalType === "membership"
                      ? "Membership"
                      : "Award & Recognition"}
                  </span>

                  <h3 id="awards-modal-title">
                    {selectedItem.title}
                  </h3>

                  <div className="award-popup-line" />

                  <p>{selectedItem.info}</p>
                </div>
              </div>
            ) : (
              <>
                <div className="zoom-popup-image">
                  <img
                    src={selectedItem.image}
                    alt={selectedItem.title}
                  />
                </div>

                <h3 id="awards-modal-title">
                  {selectedItem.title}
                </h3>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Awards;