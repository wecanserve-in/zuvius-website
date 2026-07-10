import React from "react";
import "./newsroom.css";
import { newsItems } from "./mediaData";
import PageBanner from "../components/PageBanner";
import { useNavigate } from "react-router-dom";

const Newsroom = () => {
  const navigate = useNavigate();

  return (
    <div className="media-page">
      <PageBanner
        image="/newsroom/newsbanner.png"
        title={<>Newsroom</>}
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
                <div className="media-card-header">
                  <span className="media-source">Newsroom</span>

                  <span className="media-year">
                    {item.year || "2025"}
                  </span>
                </div>

                <h3>{item.title}</h3>

                <p>
                  {item.excerpt ||
                    "Read the complete article to learn more about this news and latest updates."}
                </p>

                <button
                  type="button"
                  className="read-article-btn"
                  onClick={() => navigate(`/newsroom/${item.id}`)}
                >
                  Read Article <span>→</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Newsroom;