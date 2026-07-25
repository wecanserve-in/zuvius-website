import React, { useEffect, useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./csr.css";
import PageBanner from "../components/PageBanner";
import { journeyData } from "./journeydata";

const CSRDetail = () => {
  const { slug } = useParams();

  const initiative = useMemo(() => {
    return journeyData.find((item) => item.slug === slug);
  }, [slug]);

  const [zoomedImgUrl, setZoomedImgUrl] = useState(null);
  const [showDescription, setShowDescription] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Keeps the array reference stable and fixes the Vercel ESLint error.
  const initiativePhotos = useMemo(() => {
    return initiative?.photos || [];
  }, [initiative]);

  useEffect(() => {
    setZoomedImgUrl(null);
    setShowDescription(false);
    setCurrentImageIndex(0);
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
      window.removeEventListener("keydown", handleEscape);
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

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (!zoomedImgUrl || initiativePhotos.length === 0) {
        return;
      }

      const foundIndex = initiativePhotos.findIndex(
        (image) => image === zoomedImgUrl
      );

      const safeCurrentIndex =
        foundIndex >= 0 ? foundIndex : currentImageIndex;

      if (event.key === "ArrowRight") {
        const nextIndex =
          (safeCurrentIndex + 1) % initiativePhotos.length;

        setZoomedImgUrl(initiativePhotos[nextIndex]);
        setCurrentImageIndex(nextIndex);
      }

      if (event.key === "ArrowLeft") {
        const previousIndex =
          (safeCurrentIndex - 1 + initiativePhotos.length) %
          initiativePhotos.length;

        setZoomedImgUrl(initiativePhotos[previousIndex]);
        setCurrentImageIndex(previousIndex);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [zoomedImgUrl, initiativePhotos, currentImageIndex]);

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

  const firstGalleryPhotos = initiativePhotos.slice(0, 5);
  const remainingGalleryPhotos = initiativePhotos.slice(5);

  const openImage = (image, index) => {
    setZoomedImgUrl(image);
    setCurrentImageIndex(index);
  };

  const closeImageViewer = () => {
    setZoomedImgUrl(null);
  };

  const closeDescription = () => {
    setShowDescription(false);
  };

  const goToNextImage = (event) => {
    event.stopPropagation();

    if (initiativePhotos.length === 0) {
      return;
    }

    const foundIndex = initiativePhotos.findIndex(
      (image) => image === zoomedImgUrl
    );

    const safeCurrentIndex =
      foundIndex >= 0 ? foundIndex : currentImageIndex;

    const nextIndex =
      (safeCurrentIndex + 1) % initiativePhotos.length;

    setZoomedImgUrl(initiativePhotos[nextIndex]);
    setCurrentImageIndex(nextIndex);
  };

  const goToPreviousImage = (event) => {
    event.stopPropagation();

    if (initiativePhotos.length === 0) {
      return;
    }

    const foundIndex = initiativePhotos.findIndex(
      (image) => image === zoomedImgUrl
    );

    const safeCurrentIndex =
      foundIndex >= 0 ? foundIndex : currentImageIndex;

    const previousIndex =
      (safeCurrentIndex - 1 + initiativePhotos.length) %
      initiativePhotos.length;

    setZoomedImgUrl(initiativePhotos[previousIndex]);
    setCurrentImageIndex(previousIndex);
  };

  return (
    <div className="csr-wrapper-main csr-detail-page">
      <PageBanner
        image={
          initiative.poster ||
          initiativePhotos[0] ||
          ""
        }
        title={initiative.title}
        description=""
        alt={initiative.title}
      />

      <section className="csr-detail-navigation">
        <Link
          to="/csr"
          className="csr-back-link"
        >
          <span aria-hidden="true">
            ←
          </span>

          Back to CSR
        </Link>
      </section>

      <section className="csr-events-list-feed csr-detail-feed">
        <div className="csr-event-master-card-node">
          <div className="csr-card-split-row-top">
            <div className="csr-card-text-panel-left">
              {initiative.category && (
                <span className="csr-detail-category">
                  {initiative.category}
                </span>
              )}

              <h2 className="csr-event-card-title">
                {initiative.title}
              </h2>

              {initiative.description && (
                <p className="csr-event-card-description">
                  {initiative.description}
                </p>
              )}

              {initiative.fullDescription?.trim() && (
                <div className="csr-action-links-row">
                  <button
                    type="button"
                    className="csr-secondary-outline-btn"
                    onClick={() =>
                      setShowDescription(true)
                    }
                  >
                    Read More
                  </button>
                </div>
              )}
            </div>

            {initiative.video && (
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

                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
            )}
          </div>

          {initiativePhotos.length > 0 && (
            <div className="csr-card-gallery-row-bottom">
              <div className="csr-five-image-masonry-grid">
                {firstGalleryPhotos.map(
                  (image, imageIndex) => (
                    <button
                      type="button"
                      className={`csr-grid-photo-frame csr-frame-${
                        imageIndex + 1
                      }`}
                      key={`${image}-${imageIndex}`}
                      onClick={() =>
                        openImage(
                          image,
                          imageIndex
                        )
                      }
                      aria-label={`Open ${initiative.title} photo ${
                        imageIndex + 1
                      }`}
                    >
                      <img
                        src={image}
                        alt={`${initiative.title} ${
                          imageIndex + 1
                        }`}
                        loading="lazy"
                      />
                    </button>
                  )
                )}
              </div>

              {remainingGalleryPhotos.length > 0 && (
                <div className="csr-continuing-four-image-grid">
                  {remainingGalleryPhotos.map(
                    (image, imageIndex) => {
                      const actualPhotoIndex =
                        imageIndex + 5;

                      return (
                        <button
                          type="button"
                          className="csr-continuing-photo-card"
                          key={`${image}-${actualPhotoIndex}`}
                          onClick={() =>
                            openImage(
                              image,
                              actualPhotoIndex
                            )
                          }
                          aria-label={`Open ${initiative.title} photo ${
                            actualPhotoIndex + 1
                          }`}
                        >
                          <img
                            src={image}
                            alt={`${initiative.title} ${
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

      {zoomedImgUrl && (
        <div
          className="csr-lightbox-overlay"
          role="dialog"
          aria-modal="true"
          aria-label={`${initiative.title} image viewer`}
          onClick={closeImageViewer}
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
              onClick={closeImageViewer}
              aria-label="Close image"
            >
              ✕ Close
            </button>

            <div className="csr-lightbox-body-layout">
              <h3 className="csr-lightbox-title">
                {initiative.title}

                <span className="csr-title-accent-hint">
                  {" "}
                  / {currentImageIndex + 1} of{" "}
                  {initiativePhotos.length}
                </span>
              </h3>

              <div className="csr-lightbox-viewer-viewport">
                {initiativePhotos.length > 1 && (
                  <button
                    type="button"
                    className="csr-lightbox-nav csr-lightbox-nav-prev"
                    onClick={goToPreviousImage}
                    aria-label="Previous image"
                  >
                    ‹
                  </button>
                )}

                <img
                  src={zoomedImgUrl}
                  alt={`${initiative.title} ${
                    currentImageIndex + 1
                  }`}
                  className="csr-lightbox-main-canvas"
                />

                {initiativePhotos.length > 1 && (
                  <button
                    type="button"
                    className="csr-lightbox-nav csr-lightbox-nav-next"
                    onClick={goToNextImage}
                    aria-label="Next image"
                  >
                    ›
                  </button>
                )}

                <p className="csr-zoom-escape-hint">
                  Click outside, press Escape, or use ← → arrow keys to navigate
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {showDescription && (
        <div
          className="csr-description-overlay"
          role="dialog"
          aria-modal="true"
          aria-label={`${initiative.title} description`}
          onClick={closeDescription}
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
              onClick={closeDescription}
              aria-label="Close description"
            >
              ✕
            </button>

            <h3>
              {initiative.title}
            </h3>

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