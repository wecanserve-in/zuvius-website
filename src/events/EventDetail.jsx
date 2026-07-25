import React, { useEffect, useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./events.css";
import PageBanner from "../components/PageBanner";
import { eventsData } from "./eventsdata";

const EventDetail = () => {
  const { slug } = useParams();

  const eventItem = useMemo(() => {
    return eventsData.find((item) => item.slug === slug);
  }, [slug]);

  const [zoomedImgUrl, setZoomedImgUrl] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  /*
   * useMemo is important here.
   * Using `eventItem?.images || []` directly creates a new empty array
   * on every render and causes the ESLint dependency warning.
   */
  const eventImages = useMemo(() => {
    return eventItem?.images || [];
  }, [eventItem]);

  /*
   * Reset lightbox whenever the route slug changes.
   */
  useEffect(() => {
    setZoomedImgUrl(null);
    setCurrentImageIndex(0);
  }, [slug]);

  /*
   * Close lightbox using Escape.
   */
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setZoomedImgUrl(null);
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, []);

  /*
   * Prevent the background page from scrolling
   * while the image lightbox is open.
   */
  useEffect(() => {
    if (zoomedImgUrl) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [zoomedImgUrl]);

  /*
   * Lightbox keyboard navigation.
   */
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (!zoomedImgUrl || eventImages.length === 0) {
        return;
      }

      const currentIndex = eventImages.findIndex(
        (image) => image === zoomedImgUrl
      );

      /*
       * In case the current image does not exist in the array,
       * safely start navigation from index 0.
       */
      const safeCurrentIndex =
        currentIndex >= 0 ? currentIndex : 0;

      if (event.key === "ArrowRight") {
        const nextIndex =
          (safeCurrentIndex + 1) % eventImages.length;

        setZoomedImgUrl(eventImages[nextIndex]);
        setCurrentImageIndex(nextIndex);
      }

      if (event.key === "ArrowLeft") {
        const previousIndex =
          (safeCurrentIndex - 1 + eventImages.length) %
          eventImages.length;

        setZoomedImgUrl(eventImages[previousIndex]);
        setCurrentImageIndex(previousIndex);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [zoomedImgUrl, eventImages]);

  /*
   * Event not found UI.
   * All hooks are called before this conditional return.
   */
  if (!eventItem) {
    return (
      <div className="events-not-found">
        <h2>Event not found</h2>

        <Link to="/events">
          Back to Events
        </Link>
      </div>
    );
  }

  const firstRowImages = eventImages.slice(0, 5);
  const remainingImages = eventImages.slice(5);

  const openImage = (image, index) => {
    setZoomedImgUrl(image);
    setCurrentImageIndex(index);
  };

  const closeLightbox = () => {
    setZoomedImgUrl(null);
  };

  const goToNextImage = (event) => {
    event.stopPropagation();

    if (eventImages.length === 0) {
      return;
    }

    const currentIndex = eventImages.findIndex(
      (image) => image === zoomedImgUrl
    );

    const safeCurrentIndex =
      currentIndex >= 0 ? currentIndex : currentImageIndex;

    const nextIndex =
      (safeCurrentIndex + 1) % eventImages.length;

    setZoomedImgUrl(eventImages[nextIndex]);
    setCurrentImageIndex(nextIndex);
  };

  const goToPreviousImage = (event) => {
    event.stopPropagation();

    if (eventImages.length === 0) {
      return;
    }

    const currentIndex = eventImages.findIndex(
      (image) => image === zoomedImgUrl
    );

    const safeCurrentIndex =
      currentIndex >= 0 ? currentIndex : currentImageIndex;

    const previousIndex =
      (safeCurrentIndex - 1 + eventImages.length) %
      eventImages.length;

    setZoomedImgUrl(eventImages[previousIndex]);
    setCurrentImageIndex(previousIndex);
  };

  return (
    <div className="cr-wrapper-main event-detail-page">
      <PageBanner
        image={
          eventItem.cardImage ||
          eventImages[0] ||
          ""
        }
        title={eventItem.title}
        description=""
        alt={eventItem.title}
      />

      <section className="event-detail-navigation">
        <Link
          to="/events"
          className="event-back-link"
        >
          ← Back to all events
        </Link>
      </section>

      <section className="ev-events-list-feed event-detail-feed">
        <div className="ev-event-master-card-node">
          <div className="ev-card-split-row-top">
            <div className="ev-card-text-panel-left">
              <div className="ev-category-tag-pill">
                {eventItem.category === "participation"
                  ? "EXHIBITION"
                  : eventItem.categoryLabel ||
                    eventItem.category}
              </div>

              <h2 className="ev-event-card-title">
                {eventItem.title}
              </h2>

              <p className="ev-event-card-description">
                {eventItem.description}
              </p>
            </div>

            {eventItem.videoUrl && (
              <div className="ev-card-video-panel-right">
                <div className="ev-iframe-video-wrapper">
                  <iframe
                    src={eventItem.videoUrl}
                    title={`${eventItem.title} Video Coverage`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>
            )}
          </div>

          {eventImages.length > 0 && (
            <div className="ev-card-gallery-row-bottom">
              <div className="ev-five-image-masonry-grid">
                {firstRowImages.map(
                  (image, imageIndex) => (
                    <button
                      type="button"
                      className={`ev-grid-photo-frame ${
                        imageIndex === 0
                          ? "ev-frame-large-1"
                          : imageIndex === 1
                          ? "ev-frame-large-2"
                          : imageIndex === 2
                          ? "ev-frame-small-1"
                          : imageIndex === 3
                          ? "ev-frame-small-2"
                          : "ev-frame-small-3"
                      }`}
                      key={`${image}-${imageIndex}`}
                      onClick={() =>
                        openImage(
                          image,
                          imageIndex
                        )
                      }
                      aria-label={`View ${eventItem.title} image ${
                        imageIndex + 1
                      }`}
                    >
                      <img
                        src={image}
                        alt={`${eventItem.title} ${
                          imageIndex + 1
                        }`}
                        loading="lazy"
                      />
                    </button>
                  )
                )}
              </div>

              {remainingImages.length > 0 && (
                <div className="ev-continuing-four-image-grid">
                  {remainingImages.map(
                    (image, imageIndex) => {
                      const actualIndex =
                        imageIndex + 5;

                      return (
                        <button
                          type="button"
                          className="ev-continuing-photo-card"
                          key={`${image}-${actualIndex}`}
                          onClick={() =>
                            openImage(
                              image,
                              actualIndex
                            )
                          }
                          aria-label={`View ${eventItem.title} image ${
                            actualIndex + 1
                          }`}
                        >
                          <img
                            src={image}
                            alt={`${eventItem.title} ${
                              actualIndex + 1
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
          className="ev-lightbox-overlay"
          role="dialog"
          aria-modal="true"
          aria-label={`${eventItem.title} image viewer`}
          onClick={closeLightbox}
        >
          <div
            className="ev-lightbox-window-box ev-single-image-lightbox"
            onClick={(event) =>
              event.stopPropagation()
            }
          >
            <button
              type="button"
              className="ev-lightbox-close-trigger"
              onClick={closeLightbox}
              aria-label="Close image"
            >
              ✕ Close
            </button>

            <div className="ev-lightbox-body-layout">
              <h3 className="ev-lightbox-title">
                {eventItem.title}

                <span className="ev-title-accent-hint">
                  {" "}
                  / {currentImageIndex + 1} of{" "}
                  {eventImages.length}
                </span>
              </h3>

              <div className="ev-lightbox-viewer-viewport">
                {eventImages.length > 1 && (
                  <button
                    type="button"
                    className="ev-lightbox-nav ev-lightbox-nav-prev"
                    onClick={goToPreviousImage}
                    aria-label="Previous image"
                  >
                    ‹
                  </button>
                )}

                <img
                  src={zoomedImgUrl}
                  alt={`${eventItem.title} ${
                    currentImageIndex + 1
                  }`}
                  className="ev-lightbox-main-canvas ev-canvas-zoomed-state"
                />

                {eventImages.length > 1 && (
                  <button
                    type="button"
                    className="ev-lightbox-nav ev-lightbox-nav-next"
                    onClick={goToNextImage}
                    aria-label="Next image"
                  >
                    ›
                  </button>
                )}

                <p className="ev-zoom-escape-hint">
                  Click outside, press Escape, or
                  use ← → arrow keys to navigate
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EventDetail;