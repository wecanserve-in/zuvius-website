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

  const [zoomedImgUrl, setZoomedImgUrl] =
    useState(null);

  const [showDescription, setShowDescription] =
    useState(false);

  useEffect(() => {
    setZoomedImgUrl(null);
    setShowDescription(false);
  }, [slug]);

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setZoomedImgUrl(null);
        setShowDescription(false);
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener(
        "keydown",
        handleEscape
      );
    };
  }, []);

  useEffect(() => {
    if (zoomedImgUrl || showDescription) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [zoomedImgUrl, showDescription]);

  if (!initiative) {
    return (
      <div className="csr-not-found">
        <h2>Initiative not found</h2>

        <Link to="/csr">
          Back to CSR
        </Link>
      </div>
    );
  }

  const initiativePhotos = initiative.photos || [];
  const firstGalleryPhotos =
    initiativePhotos.slice(0, 5);
  const remainingGalleryPhotos =
    initiativePhotos.slice(5);

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
                  preload="metadata"
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

          {initiativePhotos.length > 0 && (
            <div className="csr-card-gallery-row-bottom">
              {/* Original first-five-photo layout */}
              <div className="csr-five-image-masonry-grid">
                {firstGalleryPhotos.map(
                  (img, imgIndex) => (
                    <button
                      type="button"
                      className={`csr-grid-photo-frame csr-frame-${
                        imgIndex + 1
                      }`}
                      key={`${img}-${imgIndex}`}
                      onClick={() =>
                        setZoomedImgUrl(img)
                      }
                      aria-label={`Open ${
                        initiative.title
                      } photo ${imgIndex + 1}`}
                    >
                      <img
                        src={img}
                        alt={`${initiative.title} ${
                          imgIndex + 1
                        }`}
                        loading="lazy"
                      />
                    </button>
                  )
                )}
              </div>

              {/* All remaining photos */}
              {remainingGalleryPhotos.length > 0 && (
                <div className="csr-continuing-four-image-grid">
                  {remainingGalleryPhotos.map(
                    (img, imgIndex) => {
                      const actualPhotoIndex =
                        imgIndex + 5;

                      return (
                        <button
                          type="button"
                          className="csr-continuing-photo-card"
                          key={`${img}-${actualPhotoIndex}`}
                          onClick={() =>
                            setZoomedImgUrl(img)
                          }
                          aria-label={`Open ${
                            initiative.title
                          } photo ${
                            actualPhotoIndex + 1
                          }`}
                        >
                          <img
                            src={img}
                            alt={`${
                              initiative.title
                            } ${
                              actualPhotoIndex + 1
                            }`}
                            loading="lazy"
                          />
                        </button>
                      );
                    }
                  )}
                </div>
              )}
            </div>
          )}
        </div>
      </section>

      {/* High-resolution photo viewer */}
      {zoomedImgUrl && (
        <div
          className="csr-lightbox-overlay"
          role="dialog"
          aria-modal="true"
          aria-label={`${initiative.title} image viewer`}
          onClick={() =>
            setZoomedImgUrl(null)
          }
        >
          <div
            className="csr-lightbox-window-box csr-single-image-lightbox"
            onClick={(event) =>
              event.stopPropagation()
            }
          >
            <button
              type="button"
              className="csr-lightbox-close-trigger"
              onClick={() =>
                setZoomedImgUrl(null)
              }
              aria-label="Close image"
            >
              ✕ Close
            </button>

            <div className="csr-lightbox-body-layout">
              <h3 className="csr-lightbox-title">
                {initiative.title}

                <span className="csr-title-accent-hint">
                  {" "}
                  / High-Res View
                </span>
              </h3>

              <div className="csr-lightbox-viewer-viewport">
                <img
                  src={zoomedImgUrl}
                  alt={initiative.title}
                  className="csr-lightbox-main-canvas"
                />

                <p className="csr-zoom-escape-hint">
                  Click outside or press Escape to close
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Full description popup */}
      {showDescription && (
        <div
          className="csr-description-overlay"
          role="dialog"
          aria-modal="true"
          aria-label={`${initiative.title} description`}
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