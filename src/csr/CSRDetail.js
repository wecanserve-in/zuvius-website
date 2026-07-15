import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./csr.css";
import PageBanner from "../components/PageBanner";
import { journeyData } from "./journeydata";

const CSRDetail = () => {
  const { slug } = useParams();

  const initiative = journeyData.find(
    (item) => item.slug === slug
  );

  const [isLightboxOpen, setIsLightboxOpen] =
    useState(false);

  const [zoomedImgUrl, setZoomedImgUrl] =
    useState(null);

  const [showDescription, setShowDescription] =
    useState(false);

  useEffect(() => {
    setIsLightboxOpen(false);
    setZoomedImgUrl(null);
    setShowDescription(false);
  }, [slug]);

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        if (zoomedImgUrl) {
          setZoomedImgUrl(null);
        } else {
          setIsLightboxOpen(false);
          setShowDescription(false);
        }
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener(
        "keydown",
        handleEscape
      );
    };
  }, [zoomedImgUrl]);

  if (!initiative) {
    return (
      <div className="csr-not-found">
        <h2>Initiative not found</h2>

        <Link to="/csr">Back to CSR</Link>
      </div>
    );
  }

  const openPhotosPopup = () => {
    setZoomedImgUrl(null);
    setIsLightboxOpen(true);
  };

  const handleCloseLightbox = () => {
    if (zoomedImgUrl) {
      setZoomedImgUrl(null);
      return;
    }

    setIsLightboxOpen(false);
  };

  return (
    <div className="csr-wrapper-main csr-detail-page">
      <PageBanner
        image={initiative.poster}
        title={initiative.title}
        description=""
        alt={initiative.title}
      />

      <section className="csr-detail-navigation">
        <Link
          to="/csr"
          className="csr-back-link"
        >
          ← Back to all initiatives
        </Link>
      </section>

      <section className="csr-events-list-feed csr-detail-feed">
        <div className="csr-event-master-card-node">
          <div className="csr-card-split-row-top">
            <div className="csr-card-text-panel-left">
              <span className="csr-detail-category">
                {initiative.category}
              </span>

              <h2 className="csr-event-card-title">
                {initiative.title}
              </h2>

              <p className="csr-event-card-description">
                {initiative.description}
              </p>

              <div className="csr-action-links-row">
                {initiative.fullDescription?.trim() && (
                  <button
                    type="button"
                    className="csr-secondary-outline-btn"
                    onClick={() =>
                      setShowDescription(true)
                    }
                  >
                    Read More
                  </button>
                )}

                
              </div>
            </div>

            <div className="csr-card-video-panel-right">
              <div className="csr-video-wrapper">
                <video
                  controls
                  className="csr-video-player"
                  poster={initiative.poster}
                >
                  <source
                    src={initiative.video}
                    type="video/mp4"
                  />

                  Your browser does not support the
                  video tag.
                </video>
              </div>
            </div>
          </div>

          <div className="csr-card-gallery-row-bottom">
            <div className="csr-five-image-masonry-grid">
              {initiative.photos
                .slice(0, 5)
                .map((img, imgIndex) => (
                  <button
                    type="button"
                    className={`csr-grid-photo-frame csr-frame-${
                      imgIndex + 1
                    }`}
                    key={img}
                    onClick={openPhotosPopup}
                  >
                    <img
                      src={img}
                      alt={`${initiative.title} ${
                        imgIndex + 1
                      }`}
                      loading="lazy"
                    />

                    {imgIndex === 4 && (
                      <div className="csr-view-more-overlay">
                        <span>
                          View
                          <br />
                          More
                        </span>
                      </div>
                    )}
                  </button>
                ))}
            </div>
          </div>
        </div>
      </section>

      {isLightboxOpen && (
        <div
          className="csr-lightbox-overlay"
          onClick={handleCloseLightbox}
        >
          <div
            className="csr-lightbox-window-box"
            onClick={(event) =>
              event.stopPropagation()
            }
          >
            <button
              type="button"
              className="csr-lightbox-close-trigger"
              onClick={handleCloseLightbox}
            >
              {zoomedImgUrl
                ? "← Back to Grid"
                : "✕ Close"}
            </button>

            <div className="csr-lightbox-body-layout">
              <h3 className="csr-lightbox-title">
                {initiative.title}

                {zoomedImgUrl && (
                  <span className="csr-title-accent-hint">
                    {" "}
                    / High-Res View
                  </span>
                )}
              </h3>

              {!zoomedImgUrl ? (
                <div className="csr-popup-gallery-grid-layout">
                  {initiative.photos.map(
                    (imgUrl, index) => (
                      <button
                        type="button"
                        key={imgUrl}
                        className="csr-popup-grid-item-card"
                        onClick={() =>
                          setZoomedImgUrl(imgUrl)
                        }
                      >
                        <img
                          src={imgUrl}
                          alt={`${initiative.title} ${
                            index + 1
                          }`}
                        />

                        <div className="csr-grid-item-hover-layer">
                          <span className="csr-zoom-icon-symbol">
                            🔍 Click to Zoom
                          </span>
                        </div>
                      </button>
                    )
                  )}
                </div>
              ) : (
                <div
                  className="csr-lightbox-viewer-viewport"
                  onClick={() =>
                    setZoomedImgUrl(null)
                  }
                >
                  <img
                    src={zoomedImgUrl}
                    alt={initiative.title}
                    className="csr-lightbox-main-canvas"
                  />

                  <p className="csr-zoom-escape-hint">
                    Click inside the image frame to
                    return to the gallery
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {showDescription && (
        <div
          className="csr-description-overlay"
          onClick={() =>
            setShowDescription(false)
          }
        >
          <div
            className="csr-description-modal"
            onClick={(event) =>
              event.stopPropagation()
            }
          >
            <button
              type="button"
              className="csr-description-close"
              onClick={() =>
                setShowDescription(false)
              }
              aria-label="Close description"
            >
              ✕
            </button>

            <h3>{initiative.title}</h3>

            <div className="csr-description-content">
              <p>
                {initiative.fullDescription}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CSRDetail;