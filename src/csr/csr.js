import React, { useState } from "react";
import "./csr.css";
import PageBanner from "../components/PageBanner";
import { journeyData } from "./journeydata";

const CSR = () => {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [currentGallery, setCurrentGallery] = useState([]);
  const [galleryTitle, setGalleryTitle] = useState("");
  const [zoomedImgUrl, setZoomedImgUrl] = useState(null);

  const [showDescription, setShowDescription] = useState(false);
  const [descriptionTitle, setDescriptionTitle] = useState("");
  const [descriptionContent, setDescriptionContent] = useState("");

  const openPhotosPopup = (item) => {
    setCurrentGallery(item.photos || []);
    setGalleryTitle(item.title);
    setZoomedImgUrl(null);
    setIsLightboxOpen(true);
  };

  const openDescriptionPopup = (item) => {
    setDescriptionTitle(item.title);
    setDescriptionContent(item.fullDescription || "");
    setShowDescription(true);
  };

  const handleCloseLightbox = () => {
    if (zoomedImgUrl) {
      setZoomedImgUrl(null);
    } else {
      setIsLightboxOpen(false);
    }
  };

  return (
    <div className="csr-wrapper-main">
      <PageBanner
        image="/gallery/csrbanner.png"
        title={
          <>
            Corporate Social <br />
            Responsibility
          </>
        }
        description=""
        alt="Corporate Social Responsibility"
      />

      <div className="csr-center-heading-zone">
        <h2 className="csr-section-main-title">
          Initiatives That Reflect Our Purpose
        </h2>
      </div>

      <section className="csr-events-list-feed">
        {journeyData.map((item, index) => (
          <div className="csr-event-master-card-node" key={index}>
            <div className="csr-card-split-row-top">
              <div className="csr-card-text-panel-left">
                <h3 className="csr-event-card-title">{item.title}</h3>

                <p className="csr-event-card-description">
                  {item.description}
                </p>

                <div className="csr-action-links-row">
                  {item.fullDescription &&
                    item.fullDescription.trim() !== "" && (
                      <button
                        className="csr-secondary-outline-btn"
                        onClick={() => openDescriptionPopup(item)}
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
                    poster={item.poster}
                  >
                    <source src={item.video} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
            </div>

            <div className="csr-card-gallery-row-bottom">
              <div
                className="csr-five-image-masonry-grid"
                onClick={() => openPhotosPopup(item)}
              >
               {item.photos.slice(0, 5).map((img, imgIndex) => (
  <div
    className={`csr-grid-photo-frame csr-frame-${imgIndex + 1}`}
    key={imgIndex}
    onClick={() => openPhotosPopup(item)}
  >
    <img
      src={img}
      alt={`${item.title} ${imgIndex + 1}`}
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
  </div>
))}
              </div>
            </div>
          </div>
        ))}
      </section>

      {isLightboxOpen && (
        <div className="csr-lightbox-overlay" onClick={handleCloseLightbox}>
          <div
            className="csr-lightbox-window-box"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="csr-lightbox-close-trigger"
              onClick={handleCloseLightbox}
            >
              {zoomedImgUrl ? "← Back to Grid" : "✕ Close"}
            </button>

            <div className="csr-lightbox-body-layout">
              <h3 className="csr-lightbox-title">
                {galleryTitle}{" "}
                {zoomedImgUrl && (
                  <span className="csr-title-accent-hint">
                    / High-Res View
                  </span>
                )}
              </h3>

              {!zoomedImgUrl ? (
                <div className="csr-popup-gallery-grid-layout">
                  {currentGallery.map((imgUrl, idx) => (
                    <div
                      key={idx}
                      className="csr-popup-grid-item-card"
                      onClick={() => setZoomedImgUrl(imgUrl)}
                    >
                      <img src={imgUrl} alt={`CSR Gallery ${idx + 1}`} />

                      <div className="csr-grid-item-hover-layer">
                        <span className="csr-zoom-icon-symbol">
                          🔍 Click to Zoom
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div
                  className="csr-lightbox-viewer-viewport"
                  onClick={() => setZoomedImgUrl(null)}
                >
                  <img
                    src={zoomedImgUrl}
                    alt="Expanded CSR"
                    className="csr-lightbox-main-canvas"
                  />
                  <p className="csr-zoom-escape-hint">
                    Click inside the image frame anytime to exit zoom view mode
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
          onClick={() => setShowDescription(false)}
        >
          <div
            className="csr-description-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="csr-description-close"
              onClick={() => setShowDescription(false)}
            >
              ✕
            </button>

            <h3>{descriptionTitle}</h3>

            <div className="csr-description-content">
              <p>{descriptionContent}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CSR;