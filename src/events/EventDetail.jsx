import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./events.css";
import PageBanner from "../components/PageBanner";
import { eventsData } from "./eventsdata";

const EventDetail = () => {
  const { slug } = useParams();

  const eventItem = eventsData.find(
    (item) => item.slug === slug
  );

  const [isLightboxOpen, setIsLightboxOpen] =
    useState(false);

  const [zoomedImgUrl, setZoomedImgUrl] =
    useState(null);

  useEffect(() => {
    setIsLightboxOpen(false);
    setZoomedImgUrl(null);
  }, [slug]);

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key !== "Escape") {
        return;
      }

      if (zoomedImgUrl) {
        setZoomedImgUrl(null);
      } else {
        setIsLightboxOpen(false);
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
    <div className="cr-wrapper-main event-detail-page">
      <PageBanner
        image={eventItem.cardImage || eventItem.images[0]}
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
                {eventItem.categoryLabel}
              </div>

              <h2 className="ev-event-card-title">
                {eventItem.title}
              </h2>

              <p className="ev-event-card-description">
                {eventItem.description}
              </p>

              
            </div>

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
          </div>

          <div className="ev-card-gallery-row-bottom">
            <div className="ev-five-image-masonry-grid">
              {eventItem.images
                .slice(0, 5)
                .map((image, imageIndex) => (
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
                    key={image}
                    onClick={openPhotosPopup}
                  >
                    <img
                      src={image}
                      alt={`${eventItem.title} ${imageIndex + 1}`}
                      loading="lazy"
                    />

                    {imageIndex === 4 && (
                      <div className="ev-view-more-overlay">
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
          className="ev-lightbox-overlay"
          onClick={handleCloseLightbox}
        >
          <div
            className="ev-lightbox-window-box"
            onClick={(event) =>
              event.stopPropagation()
            }
          >
            <button
              type="button"
              className="ev-lightbox-close-trigger"
              onClick={handleCloseLightbox}
            >
              {zoomedImgUrl
                ? "← Back to Grid"
                : "✕ Close"}
            </button>

            <div className="ev-lightbox-body-layout">
              <h3 className="ev-lightbox-title">
                {eventItem.title}

                {zoomedImgUrl && (
                  <span className="ev-title-accent-hint">
                    {" "}
                    / High-Res View
                  </span>
                )}
              </h3>

              {!zoomedImgUrl ? (
                <div className="ev-popup-gallery-grid-layout">
                  {eventItem.images.map(
                    (imgUrl, index) => (
                      <button
                        type="button"
                        key={imgUrl}
                        className="ev-popup-grid-item-card"
                        onClick={() =>
                          setZoomedImgUrl(imgUrl)
                        }
                      >
                        <img
                          src={imgUrl}
                          alt={`${eventItem.title} ${
                            index + 1
                          }`}
                        />

                        <div className="ev-grid-item-hover-layer">
                          <span className="ev-zoom-icon-symbol">
                            🔍 Click to Zoom
                          </span>
                        </div>
                      </button>
                    )
                  )}
                </div>
              ) : (
                <div
                  className="ev-lightbox-viewer-viewport"
                  onClick={() =>
                    setZoomedImgUrl(null)
                  }
                >
                  <img
                    src={zoomedImgUrl}
                    alt={eventItem.title}
                    className="ev-lightbox-main-canvas ev-canvas-zoomed-state"
                  />

                  <p className="ev-zoom-escape-hint">
                    Click inside the image frame to
                    return to gallery
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EventDetail;