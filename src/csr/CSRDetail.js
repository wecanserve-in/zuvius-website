import React, { useEffect, useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./csr.css";
import PageBanner from "../components/PageBanner";
import { journeyData } from "./journeydata";

const CSRDetail = () => {
  const { slug, eventSlug } = useParams();

  /*
    campaign:
    The main CSR initiative selected from the CSR page.

    Example:
    Pink Street Campaign
  */
  const campaign = useMemo(() => {
    return journeyData.find((item) => item.slug === slug);
  }, [slug]);

  /*
    initiative:
    If an eventSlug exists, find the selected location event.
    Otherwise, use the main campaign itself.

    Examples:
    /csr/pink-street-campaign
      initiative = Pink Street parent

    /csr/pink-street-campaign/pune
      initiative = Pune event
  */
  const initiative = useMemo(() => {
    if (!campaign) {
      return null;
    }

    if (!eventSlug) {
      return campaign;
    }

    return campaign.events?.find(
      (eventItem) => eventItem.slug === eventSlug
    );
  }, [campaign, eventSlug]);

  const isCampaignLanding =
    Boolean(campaign?.events?.length) && !eventSlug;

  const [zoomedImgUrl, setZoomedImgUrl] = useState(null);
  const [showDescription, setShowDescription] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const initiativePhotos = useMemo(() => {
    return initiative?.photos || [];
  }, [initiative]);

  useEffect(() => {
    setZoomedImgUrl(null);
    setShowDescription(false);
    setCurrentImageIndex(0);
  }, [slug, eventSlug]);

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

  /*
    Invalid campaign or invalid location slug
  */
  if (!campaign || !initiative) {
    return (
      <div className="csr-not-found">
        <h2>Initiative not found</h2>

        <Link to="/csr">Back to CSR</Link>
      </div>
    );
  }

  /*
    Pink Street parent page:
    Displays Pune and Karad event cards.
  */
  if (isCampaignLanding) {
    return (
      <div className="csr-wrapper-main csr-campaign-location-page">
        <PageBanner
          image={
            campaign.poster ||
            campaign.events?.[0]?.poster ||
            ""
          }
          title={campaign.title}
          description=""
          alt={campaign.title}
        />

        <section className="csr-detail-navigation">
          <Link to="/csr" className="csr-back-link">
            <span aria-hidden="true">←</span>
            Back to CSR
          </Link>
        </section>


        <section className="csr-location-events-section">
          <div className="csr-center-heading-zone">
            <span className="csr-location-small-heading">
              Campaign Locations
            </span>

            <h2 className="csr-section-main-title">
              Explore Pink Street Events
            </h2>

            <div className="csr-main-title-line" />
          </div>

          <div className="csr-location-events-grid">
            {campaign.events.map((eventItem) => (
              <Link
                to={`/csr/${campaign.slug}/${eventItem.slug}`}
                className="csr-location-event-card"
                key={eventItem.slug}
              >
                <div className="csr-location-event-image-wrapper">
                  <img
                    src={
                      eventItem.poster ||
                      eventItem.photos?.[0] ||
                      campaign.poster
                    }
                    alt={eventItem.title}
                    loading="lazy"
                  />

                  {eventItem.location && (
                    <span className="csr-location-image-badge">
                      {eventItem.location}
                    </span>
                  )}
                </div>

                <div className="csr-location-event-card-content">
                  {eventItem.category && (
                    <span className="csr-location-card-category">
                      {eventItem.category}
                    </span>
                  )}

                  <h3>
                    {eventItem.cardTitle || eventItem.title}
                  </h3>

                  <p>{eventItem.description}</p>

                  <span className="csr-initiative-card-button">
                    Explore Event
                    <strong>→</strong>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    );
  }

  const firstGalleryPhotos = initiativePhotos.slice(0, 5);
  const remainingGalleryPhotos = initiativePhotos.slice(5);

  const openImage = (image, index) => {
    if (!image) {
      return;
    }

    const imageIndexInGallery =
      initiativePhotos.findIndex(
        (galleryImage) => galleryImage === image
      );

    setZoomedImgUrl(image);

    setCurrentImageIndex(
      imageIndexInGallery >= 0
        ? imageIndexInGallery
        : index
    );
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

  const featuredImage =
    initiative.poster || initiativePhotos[0] || "";

  const backLink = eventSlug
    ? `/csr/${campaign.slug}`
    : "/csr";

  const backText = eventSlug
    ? `Back to ${campaign.title}`
    : "Back to CSR";

  return (
    <div className="csr-wrapper-main csr-detail-page">
      <PageBanner
        image={featuredImage}
        title={initiative.title}
        description=""
        alt={initiative.title}
      />

      <section className="csr-detail-navigation">
        <Link to={backLink} className="csr-back-link">
          <span aria-hidden="true">←</span>
          {backText}
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

              {initiative.location && (
                <p className="csr-event-location-text">
                  <span aria-hidden="true">⌖</span>
                  {initiative.location}
                </p>
              )}

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
                    onClick={() => setShowDescription(true)}
                  >
                    Read More
                  </button>
                </div>
              )}
            </div>

            {(initiative.video || featuredImage) && (
              <div className="csr-card-video-panel-right">
                <div className="csr-video-wrapper">
                  {initiative.video ? (
                    <video
                      controls
                      preload="metadata"
                      className="csr-video-player"
                      poster={featuredImage}
                    >
                      <source
                        src={initiative.video}
                        type="video/mp4"
                      />

                      Your browser does not support the video tag.
                    </video>
                  ) : (
                    <button
                      type="button"
                      className="csr-featured-image-button"
                      onClick={() =>
                        openImage(featuredImage, 0)
                      }
                      aria-label={`Open ${initiative.title} featured image`}
                    >
                      <img
                        src={featuredImage}
                        alt={initiative.title}
                        className="csr-featured-image"
                      />

                      <span className="csr-featured-image-overlay">
                        View Image
                      </span>
                    </button>
                  )}
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
                        openImage(image, imageIndex)
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

                {initiativePhotos.length > 0 && (
                  <span className="csr-title-accent-hint">
                    {" "}
                    / {currentImageIndex + 1} of{" "}
                    {initiativePhotos.length}
                  </span>
                )}
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
                  Click outside, press Escape, or use ← →
                  arrow keys to navigate
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

            <h3>{initiative.title}</h3>

            {initiative.location && (
              <p className="csr-description-location">
                {initiative.location}
              </p>
            )}

            <div className="csr-description-content">
              <p>{initiative.fullDescription}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CSRDetail;