import React, { useState } from "react";
import "./newsroom.css";
import { pressItems } from "./mediaData";
import PageBanner from "../components/PageBanner";
import { useNavigate } from "react-router-dom";

const categories = [
  "All",
  "Leadership",
  "Healthcare",
  "CSR",
  "Awards",
  "Global",
];

const PressRelease = () => {
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState("All");

  // Since your data doesn't have categories yet,
  // we'll divide them manually using IDs for now.

  const filteredItems =
    activeFilter === "All"
      ? pressItems
      : pressItems.filter((item) => {
          switch (activeFilter) {
            case "Leadership":
              return [1, 4].includes(item.id);

            case "Healthcare":
              return [2, 3, 6].includes(item.id);

            case "CSR":
              return [7, 8, 9].includes(item.id);

            case "Awards":
              return [5].includes(item.id);

            case "Global":
              return [1, 2, 6].includes(item.id);

            default:
              return true;
          }
        });

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

      {/* FEATURED IN */}
      <section className="featured-section">
        <div className="featured-header">
          <span></span>
          <h3>FEATURED IN</h3>
          <span></span>
        </div>

        <div className="featured-logos">
          <img src="/newsroom/forbes-logo.png" alt="Forbes" />
          <img src="/newsroom/ceo-logo.png" alt="CEO Insights" />
          <img src="/newsroom/ceoinsights.png" alt="Ceo inSights" />
          <img src="/newsroom/csrlogo.png" alt="CSR" />
          <img src="/newsroom/express.png" alt="Express" />
        </div>
      </section>

      {/* FILTERS */}
      <section className="media-filters-section">
        <div className="media-filters">
          {categories.map((category) => (
            <button
              key={category}
              className={
                activeFilter === category ? "active" : ""
              }
              onClick={() => setActiveFilter(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      {/* GRID */}
      <section className="media-grid-section">
        <div className="media-grid">
          {filteredItems.map((item) => (
            <div className="media-card" key={item.id}>
              <div className="media-card-image">
                <img src={item.image} alt={item.title} />
              </div>

              <div className="media-card-content">
                <div className="media-card-header">
                  <span className="media-source">
                    Press Release
                  </span>

                  <span className="media-year">
                    2025
                  </span>
                </div>

                <h3>{item.title}</h3>

              <p>
  {item.excerpt ||
    "Read the complete article to learn more about this feature and insights."}
</p>

                <button
                  className="read-article-btn"
                  onClick={() =>
                    navigate(`/press-release/${item.id}`)
                  }
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

export default PressRelease;