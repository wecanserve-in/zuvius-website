import React, { useState } from 'react';
import './events.css';
import PageBanner from "../components/PageBanner";

const Events = () => {
  // Active Filter state: 'all', 'events', 'participation', or 'conferences'
  const [activeFilter, setActiveFilter] = useState('all');
  
  // Grid Lightbox States
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [currentGallery, setCurrentGallery] = useState([]);
  const [galleryTitle, setGalleryTitle] = useState('');
  
  // Inner Active Zoom State for individual grid elements
  const [zoomedImgUrl, setZoomedImgUrl] = useState(null);

  // Events dataset matching your categories
  const eventsData = [
    {
      id: 1,
      category: 'participation',
      title: 'Nex Brand The Extraordinnaire',
      description: 'At ITC Maratha, Mumbai on 30th January, 2018. NexBrand is a platform to that identifies and facilitates brands. Zuvius Lifesciences received The Extraordinnaire award. The award was present to Zuvius Team by Bollywood actress Vani Kapoor.',
      videoUrl: 'https://www.youtube.com/embed/ld5OawFQN7U?si=jsHYThcGYaUJQJzA', 
      images: [
        "/events/nexbrand1.jpg",
        "/events/nexbrand2.jpg",
        "/events/nexbrand3.jpg",
        "/events/nexbrand4.jpg",
        "/events/nexbrand5.jpg",
        "/events/nexbrand6.jpg",

      ]
    },
    {
      id: 2,
      category: 'events',
      title: 'Power Brands',
      description: 'At Novotel, Mumbai – 11 Sept 2017 Power brands is a recognises the brands across industry and the individuals behind them including entrepreneurs on one stage. This event was held in Sept 2017.  Zuvius Lifesciences received the award from well-known Bollywood actress Manjari Fadnnis',
      videoUrl: 'https://www.youtube.com/embed/wmA8gR-IbCc?si=zVWf1IkASaOGdr2k',
      images: [
        '/events/powerbrand1.jpg',
        '/events/powerbrand2.jpg',
        '/events/powerbrand3.jpg',
        '/events/powerbrand4.jpg',
        '/events/powerbrand5.jpg',
      ]
    },

  ];

  // Open multi-image grid popup view
  const openPhotosPopup = (eventItem) => {
    setCurrentGallery(eventItem.images);
    setGalleryTitle(eventItem.title);
    setZoomedImgUrl(null); // Clear previous zoom levels
    setIsLightboxOpen(true);
  };

  // Close workflow handler
  const handleCloseLightbox = () => {
    if (zoomedImgUrl) {
      setZoomedImgUrl(null); // If an image is zoomed, back out to the grid first
    } else {
      setIsLightboxOpen(false); // Otherwise close the whole window frame
    }
  };

  // Filter evaluation logic
  const filteredEvents = eventsData.filter(event => {
    if (activeFilter === 'all') return true;
    return event.category === activeFilter;
  });

  return (
    <div className="cr-wrapper-main">
      
      <PageBanner
  image="/events/eventsbanner.png"
  title={
    <>
      Events & <br />
      Conferences
    </>
  }
  description=""
  alt="Events and Conferences"
/>

      {/* --- SECTION 2: MOMENTS HEADING ZONE (POSITIONED ABOVE FILTERS) --- */}
      <div className="ev-center-heading-zone">
        <h2 className="cr-section-main-title ev-center-title">Moments that Define Our Journey</h2>
      </div>

      {/* --- SECTION 3: INTERACTIVE 4-TAB FILTER BAR --- */}
      <div className="ev-filter-navigation-sticky">
        <div className="ev-filter-tabs-container">
          <button 
            className={`ev-tab-item-btn ${activeFilter === 'all' ? 'ev-active-tab' : ''}`}
            onClick={() => setActiveFilter('all')}
          >
            All
          </button>
          <button 
            className={`ev-tab-item-btn ${activeFilter === 'events' ? 'ev-active-tab' : ''}`}
            onClick={() => setActiveFilter('events')}
          >
            Events
          </button>
          <button 
            className={`ev-tab-item-btn ${activeFilter === 'participation' ? 'ev-active-tab' : ''}`}
            onClick={() => setActiveFilter('participation')}
          >
            Participation
          </button>
          <button 
            className={`ev-tab-item-btn ${activeFilter === 'conferences' ? 'ev-active-tab' : ''}`}
            onClick={() => setActiveFilter('conferences')}
          >
            Conferences
          </button>
        </div>
      </div>

      {/* --- SECTION 4: DYNAMIC EVENTS FEED LIST --- */}
      <section className="ev-events-list-feed">
        {filteredEvents.map((item) => (
          <div className="ev-event-master-card-node" key={item.id}>
            
            {/* Top Split Block */}
            <div className="ev-card-split-row-top">
              <div className="ev-card-text-panel-left">
                <div className="ev-category-tag-pill">{item.category}</div>
                <h3 className="ev-event-card-title">{item.title}</h3>
                <p className="ev-event-card-description">{item.description}</p>
                
                <div className="ev-action-links-row">
                  <button className="ev-secondary-outline-btn" onClick={() => openPhotosPopup(item)}>
                    View Photos 
                  </button>
                </div>
              </div>

              <div className="ev-card-video-panel-right">
                <div className="ev-iframe-video-wrapper">
                  <iframe
                    src={item.videoUrl}
                    title={`${item.title} Video Coverage`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>

            {/* 5-Image Grid Showcase Surface */}
            <div className="ev-card-gallery-row-bottom">
              <div className="ev-five-image-masonry-grid" onClick={() => openPhotosPopup(item)}>
                <div className="ev-grid-photo-frame ev-frame-large-1">
                  <img src={item.images[0]} alt={`${item.title} A`} loading="lazy" />
                </div>
                <div className="ev-grid-photo-frame ev-frame-large-2">
                  <img src={item.images[1]} alt={`${item.title} B`} loading="lazy" />
                </div>
                <div className="ev-grid-photo-frame ev-frame-small-1">
                  <img src={item.images[2]} alt={`${item.title} C`} loading="lazy" />
                </div>
                <div className="ev-grid-photo-frame ev-frame-small-2">
                  <img src={item.images[3]} alt={`${item.title} D`} loading="lazy" />
                </div>
              <div className="ev-grid-photo-frame ev-frame-small-3">
  <img
    src={item.images[4]}
    alt={`${item.title} E`}
    loading="lazy"
  />

  <div className="ev-view-more-overlay">
    <span>
      View
      <br />
      More
    </span>
  </div>
</div>
              </div>
            </div>

          </div>
        ))}
      </section>

      {/* --- GRID BASED LIGHTBOX MODAL WITH INTERACTIVE CLICK-TO-ZOOM --- */}
      {isLightboxOpen && (
        <div className="ev-lightbox-overlay" onClick={handleCloseLightbox}>
          <div className="ev-lightbox-window-box" onClick={(e) => e.stopPropagation()}>
            
            {/* Dynamic context header button */}
            <button className="ev-lightbox-close-trigger" onClick={handleCloseLightbox}>
              {zoomedImgUrl ? '← Back to Grid' : '✕ Close'}
            </button>
            
            <div className="ev-lightbox-body-layout">
              <h3 className="ev-lightbox-title">
                {galleryTitle} {zoomedImgUrl && <span className="ev-title-accent-hint">/ High-Res View</span>}
              </h3>
              
              {!zoomedImgUrl ? (
                /* VIEW STATE A: GRID MATRIX VIEW MODE */
                <div className="ev-popup-gallery-grid-layout">
                  {currentGallery.map((imgUrl, idx) => (
                    <div 
                      key={idx} 
                      className="ev-popup-grid-item-card"
                      onClick={() => setZoomedImgUrl(imgUrl)}
                    >
                      <img src={imgUrl} alt={`Gallery index item ${idx + 1}`} />
                      <div className="ev-grid-item-hover-layer">
                        <span className="ev-zoom-icon-symbol">🔍 Click to Zoom</span>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                /* VIEW STATE B: CLICK TO ZOOM EXTENDED CANVAS INTERFACE */
                <div className="ev-lightbox-viewer-viewport" onClick={() => setZoomedImgUrl(null)}>
                  <img 
                    src={zoomedImgUrl} 
                    alt="Expanded Zoom Center Scale View" 
                    className="ev-lightbox-main-canvas ev-canvas-zoomed-state" 
                  />
                  <p className="ev-zoom-escape-hint">Click inside the image frame anytime to exit zoom view mode</p>
                </div>
              )}
            </div>

          </div>
        </div>
      )}

      

    </div>
  );
};

export default Events;