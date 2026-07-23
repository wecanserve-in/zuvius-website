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

  const [zoomedImgUrl, setZoomedImgUrl] = useState(null);

  useEffect(() => {
    setZoomedImgUrl(null);
  }, [slug]);

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

  const eventImages = eventItem.images || [];
  const firstRowImages = eventImages.slice(0, 5);
  const remainingImages = eventImages.slice(5);

  return (
    <div className="cr-wrapper-main event-detail-page">
      <PageBanner
        image={
          eventItem.cardImage ||
          eventImages[0]
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
    : eventItem.categoryLabel}
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

          {eventImages.length > 0 && (
            <div className="ev-card-gallery-row-bottom">
              {/* First five images: original layout */}
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
                        setZoomedImgUrl(image)
                      }
                      aria-label={`View ${
                        eventItem.title
                      } image ${imageIndex + 1}`}
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

              {/* Remaining images: four per row */}
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
                            setZoomedImgUrl(image)
                          }
                          aria-label={`View ${
                            eventItem.title
                          } image ${
                            actualIndex + 1
                          }`}
                        >
                          <img
                            src={image}
                            alt={`${
                              eventItem.title
                            } ${actualIndex + 1}`}
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
          onClick={() =>
            setZoomedImgUrl(null)
          }
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
              onClick={() =>
                setZoomedImgUrl(null)
              }
              aria-label="Close image"
            >
              ✕ Close
            </button>

            <div className="ev-lightbox-body-layout">
              <h3 className="ev-lightbox-title">
                {eventItem.title}

                <span className="ev-title-accent-hint">
                  {" "}
                  / High-Res View
                </span>
              </h3>

              <div className="ev-lightbox-viewer-viewport">
                <img
                  src={zoomedImgUrl}
                  alt={eventItem.title}
                  className="ev-lightbox-main-canvas ev-canvas-zoomed-state"
                />

                <p className="ev-zoom-escape-hint">
                  Click outside or press Escape to close
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