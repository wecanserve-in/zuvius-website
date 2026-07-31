import React, { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import "./careers.css";
import PageBanner from "../components/PageBanner";

const celebrationGalleries = [
  {
    id: "christmas",
    title: "Christmas Celebration",
    subtitle: "Joy, togetherness and festive cheer",
    cover: "/contact/celb-3.png",
    photos: [
      "/contact/celb-2.JPG",
      "/contact/celb-11.JPG",
      "/contact/celb-3.png",
      "/contact/celb-4.JPG",
      "/contact/celb-5.JPG",
      "/contact/celb-6.JPG",
      "/contact/celb-7.JPG",
      "/contact/celb-8.JPG",
      "/contact/celb-9.JPG",
      "/contact/celb-10.JPG",
      "/contact/celb-12.JPG",
      "/contact/celb-13.JPG",
      "/contact/celb-14.JPG",
      "/contact/celb-15.JPG",
      "/contact/celb-16.JPG",
      "/contact/celb-17.JPG",
      "/contact/celb-18.JPG",
      "/contact/celb-19.JPG",
      "/contact/celb-20.JPG",
      "/contact/celb-21.JPG",
      "/contact/celb-22.JPG",

    ],
  },
  {
    id: "diwali",
    title: "Diwali Celebration",
    subtitle: "Lights, happiness and shared moments",
    cover: "/contact/diwali-6.jpg",
    photos: [
      "/contact/diwali-1.Jpeg",
      "/contact/diwali-2.JPG",
      "/contact/diwali-3.JPG",
      "/contact/diwali-4.JPG",
      "/contact/diwali-5.JPG",
      "/contact/diwali-6.jpg",
      "/contact/diwali-7.JPG",
      "/contact/diwali-8.Jpeg",
      "/contact/diwali-9.JPG",
      
      "/contact/diwali-11.Jpeg",
      "/contact/diwali-12.Jpeg",
      
      "/contact/diwali-14.Jpeg",
      "/contact/diwali-15.JPG",
      "/contact/diwali-16.Jpeg",
      "/contact/diwali-17.JPG",
      "/contact/diwali-18.JPG",
      "/contact/diwali-19.JPG",
      "/contact/diwali-20.jPG",
      "/contact/diwali-21.JPG",
      "/contact/diwali-22.JPG",
      "/contact/diwali-23.JPG",
      "/contact/diwali-24.JPG",
      "/contact/diwali-25.JPG",
      "/contact/diwali-26.JPG",
    ],
  },
  {
    id: "annual-meet",
    title: "Annual Meet",
    subtitle: "Celebrating teamwork and achievements",
    cover: "/contact/annual-meet/annual-meet-1.jpeg",
    photos: [
      "/contact/annual-meet/annual-meet-1.jpeg",
      "/contact/annual-meet/annual-meet-2.jpeg",
      "/contact/annual-meet/annual-meet-3.jpeg",
      "/contact/annual-meet/annual-meet-4.jpeg",
      "/contact/annual-meet/annual-meet-5.jpeg",
    ],
  },
];

const Careers = () => {
  const [selectedGallery, setSelectedGallery] = useState(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);
  const [isZoomed, setIsZoomed] = useState(false);

  const thumbnailRefs = useRef([]);

  const openGallery = (gallery) => {
    setSelectedGallery(gallery);
    setSelectedImageIndex(null);
    setIsZoomed(false);
  };

  const closeGallery = () => {
    setSelectedGallery(null);
    setSelectedImageIndex(null);
    setIsZoomed(false);
  };

  const openImage = (index) => {
    setSelectedImageIndex(index);
    setIsZoomed(false);
  };

  const closeImage = () => {
    setSelectedImageIndex(null);
    setIsZoomed(false);
  };

  const showPreviousImage = () => {
    if (!selectedGallery || selectedImageIndex === null) return;

    setSelectedImageIndex((currentIndex) =>
      currentIndex === 0
        ? selectedGallery.photos.length - 1
        : currentIndex - 1
    );

    setIsZoomed(false);
  };

  const showNextImage = () => {
    if (!selectedGallery || selectedImageIndex === null) return;

    setSelectedImageIndex((currentIndex) =>
      currentIndex === selectedGallery.photos.length - 1
        ? 0
        : currentIndex + 1
    );

    setIsZoomed(false);
  };

  useEffect(() => {
    if (!selectedGallery) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        if (selectedImageIndex !== null) {
          closeImage();
        } else {
          closeGallery();
        }
      }

      if (selectedImageIndex !== null && event.key === "ArrowLeft") {
        showPreviousImage();
      }

      if (selectedImageIndex !== null && event.key === "ArrowRight") {
        showNextImage();
      }
    };

    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedGallery, selectedImageIndex]);

  useEffect(() => {
    if (selectedImageIndex === null) return;

    const activeThumbnail = thumbnailRefs.current[selectedImageIndex];

    if (activeThumbnail) {
      activeThumbnail.scrollIntoView({
        behavior: "smooth",
        inline: "center",
        block: "nearest",
      });
    }
  }, [selectedImageIndex]);

  return (
    <div className="cr-wrapper-main">
      {/* HERO BANNER */}
      <PageBanner
        image="/contact/careerbanner.png"
        title={
          <>
            Zuvius <br />
            LifeSciences
          </>
        }
        description=""
        alt="Zuvius LifeSciences Careers"
      />

      {/* WHY JOIN US */}
      <section className="cr-why-join-block">
        <div className="cr-center-heading-zone">
          <p className="cr-badge-text cr-center-txt">WHY JOIN US</p>

          <h2 className="cr-section-main-title">Grow With Purpose</h2>

          <p className="cr-section-subtitle-prose">
            At Zuvius Lifesciences, we believe careers grow best in an
            environment built on learning, integrity, collaboration and
            meaningful work.
          </p>
        </div>

        <div className="cr-cards-triple-grid">
          <div className="cr-benefit-card-horizontal">
            <div className="cr-card-icon-sphere">
              <span className="cr-vector-glyph">⚖️</span>
            </div>

            <div className="cr-card-content-side">
              <h3>Work-Life Balance</h3>

              <p>
                We want our brave Samaritans to live their best life while
                making this world a better place. That’s why we are busy
                cultivating a company culture of flexibility, transparency,
                learning and belonging.
              </p>
            </div>
          </div>

          <div className="cr-benefit-card-horizontal">
            <div className="cr-card-icon-sphere">
              <span className="cr-vector-glyph">🌱</span>
            </div>

            <div className="cr-card-content-side">
              <h3>Leadership</h3>

              <p>
                At Zuvius, we nourish the novice into learners and mould the
                learners to become leaders. With our advanced trainings,
                on-field practice and leadership lessons, we bring out the best
                in you.
              </p>
            </div>
          </div>

          <div className="cr-benefit-card-horizontal">
            <div className="cr-card-icon-sphere">
              <span className="cr-vector-glyph">📚</span>
            </div>

            <div className="cr-card-content-side">
              <h3>Learnings</h3>

              <p>
                We like to have a bunch of curious people in our team. People
                who love to know things, keep digging deep and never stop
                learning. For them, we provide ongoing learning opportunities.
              </p>
            </div>
          </div>

          <div className="cr-benefit-card-horizontal">
            <div className="cr-card-icon-sphere">
              <span className="cr-vector-glyph">💙</span>
            </div>

            <div className="cr-card-content-side">
              <h3>ZuviCare</h3>

              <p>
                Zuvius is all about living life to the fullest in health and
                happiness. Beyond healthy snacks and nutricare, we organize
                regular workshops on mindfulness and employee wellbeing.
              </p>
            </div>
          </div>

          <div className="cr-benefit-card-horizontal">
            <div className="cr-card-icon-sphere">
              <span className="cr-vector-glyph">🏆</span>
            </div>

            <div className="cr-card-content-side">
              <h3>Reward and Recognition</h3>

              <p>
                We value the hard work and tireless efforts our employees put
                in. We have fair pay policies, rewards and recognitions to
                honour their valuable achievements.
              </p>
            </div>
          </div>

          <div className="cr-benefit-card-horizontal">
            <div className="cr-card-icon-sphere">
              <span className="cr-vector-glyph">🤝</span>
            </div>

            <div className="cr-card-content-side">
              <h3>Equality</h3>

              <p>
                We value the worth of your work. At Zuvius, gender, colour and
                category do not matter. We foster an inclusive environment for
                anyone who possesses the right talent and skills.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* OUR CULTURE */}
      <section className="cr-culture-split-block-compact">
        <div className="cr-desktop-inner">
          <div className="cr-culture-left-panel">
            <p className="cr-badge-text">OUR CULTURE</p>

            <h2 className="cr-section-main-title">
              Professional. Supportive. <br />
              Growth-Focused.
            </h2>

            <p className="cr-culture-body-prose">
              We work in an environment where every minute is driven by this
              intense passion of saving lives. Our energies are directed
              towards a unified vision of uplifting the quality of life with or
              without cancer. We strive everyday to make a better treatment
              possible, a faster diagnosis accessible. With our heads buried in
              a purpose much bigger than everything else, there is no place for
              anything but positivity and optimism!
            </p>
          </div>

          <div className="cr-culture-right-panel">
            <div className="cr-culture-frame-wrapper-slim">
              <img
                src="/contact/careerimage2.jpeg"
                alt="Zuvius corporate culture"
                className="cr-culture-photo-compact"
              />
            </div>
          </div>
        </div>
      </section>

      {/* LIFE AT ZUVIUS */}
      <section className="cr-life-gallery-block">
        <div className="cr-center-heading-zone">
          <p className="cr-badge-text cr-center-txt">LIFE AT ZUVIUS</p>

          <h2 className="cr-section-main-title">
            Moments From Our Workplace
          </h2>

          <p className="cr-section-subtitle-prose">
            Explore celebrations, events and memorable experiences shared by
            our team.
          </p>

          <div className="cr-center-accent-line" />
        </div>

        <div className="cr-celebration-card-grid">
          {celebrationGalleries.map((gallery) => (
            <button
              type="button"
              className="cr-celebration-card"
              key={gallery.id}
              onClick={(event) => {
                event.preventDefault();
                event.stopPropagation();
                openGallery(gallery);
              }}
            >
              <div className="cr-celebration-image-wrapper">
                <img
                  src={gallery.cover}
                  alt={gallery.title}
                  className="cr-celebration-cover-image"
                />

                <div className="cr-celebration-overlay">
                  <span className="cr-gallery-view-icon">↗</span>
                  <span>View Gallery</span>
                </div>
              </div>

              <div className="cr-celebration-card-content">
                <div>
                  <h3>{gallery.title}</h3>
                  <p>{gallery.subtitle}</p>
                </div>

                <span className="cr-celebration-arrow">→</span>
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* APPLICATION CTA */}
      <section className="cr-cta-footer-block">
        <div className="cr-cta-inner-card-container">
          <div className="cr-cta-left-identity">
            <div className="cr-cta-file-icon-box">
              <span className="cr-file-glyph">📄</span>
            </div>

            <div className="cr-cta-text-bundle">
              <h3>Ready to Make an Impact?</h3>

              <p>
                We are always looking for passionate individuals across pharma
                sales, marketing, operations, quality and corporate roles.
              </p>
            </div>
          </div>

          <div className="cr-cta-action-area">
            <a
              className="cr-action-btn-blue"
              href="mailto:hr@zuviuslifesciences.in?subject=Job Application at Zuvius Lifesciences"
            >
              APPLY NOW <span className="cr-btn-arrow">→</span>
            </a>

            <p className="cr-email-anchor-subtext">
              Send your resume to{" "}
              <a href="mailto:hr@zuviuslifesciences.in">
                hr@zuviuslifesciences.in
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* ALL PHOTOS GALLERY POPUP */}
      {selectedGallery &&
        createPortal(
          <div
            className="cr-event-gallery-backdrop"
            role="presentation"
            onClick={closeGallery}
          >
            <div
              className="cr-event-gallery-modal"
              role="dialog"
              aria-modal="true"
              aria-label={`${selectedGallery.title} gallery`}
              onClick={(event) => event.stopPropagation()}
            >
              <div className="cr-event-gallery-header">
                <div>
                  <p>LIFE AT ZUVIUS</p>
                  <h2>{selectedGallery.title}</h2>

                  <span>
                    {selectedGallery.photos.length}{" "}
                    {selectedGallery.photos.length === 1 ? "Photo" : "Photos"}
                  </span>
                </div>

                <button
                  type="button"
                  className="cr-event-gallery-close"
                  onClick={closeGallery}
                  aria-label="Close gallery"
                >
                  ×
                </button>
              </div>

              <div className="cr-event-photo-scroll-area">
                <div className="cr-event-photo-grid">
                  {selectedGallery.photos.map((photo, index) => (
                    <button
                      type="button"
                      className="cr-event-photo-card"
                      key={`${selectedGallery.id}-${index}`}
                      onClick={() => openImage(index)}
                      aria-label={`Open photo ${index + 1}`}
                    >
                      <img
                        src={photo}
                        alt={`${selectedGallery.title} ${index + 1}`}
                      />

                      <div className="cr-event-photo-overlay">
                        <span className="cr-event-zoom-symbol">⌕</span>
                        <span>View Photo</span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>,
          document.body
        )}

      {/* SINGLE PHOTO LIGHTBOX */}
      {selectedGallery &&
        selectedImageIndex !== null &&
        createPortal(
          <div
            className="cr-photo-lightbox-backdrop"
            role="presentation"
            onClick={closeImage}
          >
            <div
              className="cr-photo-lightbox"
              role="dialog"
              aria-modal="true"
              aria-label={`${selectedGallery.title} photo ${
                selectedImageIndex + 1
              }`}
              onClick={(event) => event.stopPropagation()}
            >
              <div className="cr-photo-lightbox-topbar">
                <div className="cr-photo-title-counter">
                  <span className="cr-photo-lightbox-title">
                    {selectedGallery.title}
                  </span>

                  <span className="cr-photo-counter">
                    {selectedImageIndex + 1} /{" "}
                    {selectedGallery.photos.length}
                  </span>
                </div>

                <div className="cr-photo-lightbox-actions">
                  <button
                    type="button"
                    onClick={() => setIsZoomed((current) => !current)}
                  >
                    {isZoomed ? "Zoom Out −" : "Zoom In +"}
                  </button>

                  <button
                    type="button"
                    className="cr-photo-close-button"
                    onClick={closeImage}
                    aria-label="Close image"
                  >
                    ×
                  </button>
                </div>
              </div>

              <div
                className={`cr-photo-image-stage ${
                  isZoomed ? "cr-photo-image-stage-zoomed" : ""
                }`}
              >
                <button
                  type="button"
                  className="cr-photo-arrow cr-photo-arrow-left"
                  onClick={showPreviousImage}
                  aria-label="Previous photo"
                >
                  ‹
                </button>

                <div className="cr-photo-image-scroll">
                  <img
                    src={selectedGallery.photos[selectedImageIndex]}
                    alt={`${selectedGallery.title} ${
                      selectedImageIndex + 1
                    }`}
                    onClick={() => setIsZoomed((current) => !current)}
                  />
                </div>

                <button
                  type="button"
                  className="cr-photo-arrow cr-photo-arrow-right"
                  onClick={showNextImage}
                  aria-label="Next photo"
                >
                  ›
                </button>
              </div>

              <div className="cr-photo-thumbnail-strip">
                {selectedGallery.photos.map((photo, index) => (
                  <button
                    type="button"
                    key={`${selectedGallery.id}-thumbnail-${index}`}
                    ref={(element) => {
                      thumbnailRefs.current[index] = element;
                    }}
                    className={`cr-photo-thumbnail ${
                      selectedImageIndex === index
                        ? "cr-photo-thumbnail-active"
                        : ""
                    }`}
                    onClick={() => openImage(index)}
                    aria-label={`Open photo ${index + 1}`}
                  >
                    <img
                      src={photo}
                      alt={`${selectedGallery.title} thumbnail ${index + 1}`}
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>,
          document.body
        )}
    </div>
  );
};

export default Careers;