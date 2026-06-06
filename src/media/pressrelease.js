import React, { useState } from "react";
import "./newsroom.css";
import { pressItems } from "./mediaData";
import PageBanner from "../components/PageBanner";

const PressRelease = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <div className="media-page">
      <PageBanner
        image="/newsroom/pressreleasebanner.png"
        title={
          <>
            Press <br />
            Release
          </>
        }
        description=""
        alt="Press Release"
      />

      <section className="media-grid-section">
        <div className="media-grid">
          {pressItems.map((item) => (
            <div className="media-card" key={item.id}>
              <div className="media-card-image">
                <img src={item.image} alt={item.title} />
              </div>

              <div className="media-card-content">
                <h3>{item.title}</h3>

                <button onClick={() => setSelectedItem(item)}>
                  Read More →
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {selectedItem && (
        <div className="media-popup-overlay">
          <div className="media-popup-box">
            <button
              className="media-popup-close"
              onClick={() => setSelectedItem(null)}
            >
              ×
            </button>

            <div className="media-popup-image">
              <img src={selectedItem.image} alt={selectedItem.title} />
            </div>

            <div className="media-popup-content">
              <h2>{selectedItem.title}</h2>
              <p>{selectedItem.fullInfo || selectedItem.excerpt}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PressRelease;