import React from "react";
import "./newsroom.css";
import { newsItems } from "./mediaData";
import PageBanner from "../components/PageBanner";

const Newsroom = () => {
  return (
    <div className="media-page">
      <PageBanner
  image="/newsroom/newsbanner.png"
  title={
    <>
      Newsroom
    </>
  }
  description=""
  alt="Newsroom"
/>

      <section className="media-grid-section">
        <div className="media-grid">
          {newsItems.map((item) => (
            <div className="media-card" key={item.id}>
              <div className="media-card-image">
                <img src={item.image} alt={item.title} />
              </div>

              <div className="media-card-content">
                <h3>{item.title}</h3>
                <p>{item.excerpt}</p>
                <button>Read More →</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      
    </div>
  );
};

export default Newsroom;