import React from "react";
import "./newsroom.css";
import { pressItems } from "./mediaData";
import { pressSlug } from "../seo/seoConfig";
import PageBanner from "../components/PageBanner";
import { Link, useNavigate } from "react-router-dom";

const PressRelease = () => {
  const navigate = useNavigate();

  return (
    <div className="media-page">
      <PageBanner
        image="/newsroom/pressreleasebanner.png"
        title={
          <>
            Media <br />
            Coverage
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
          <img loading="lazy" src="/newsroom/forbes-logo.png" alt="Forbes" />
          <img loading="lazy" src="/newsroom/ceo-logo.png" alt="CEO Insights" />
          <img loading="lazy" src="/newsroom/ceoinsights.png" alt="CEO Insights" />
          <img loading="lazy" src="/newsroom/csrlogo.png" alt="CSR" />
          <img loading="lazy" src="/newsroom/express.png" alt="Express" />
        </div>
      </section>

      {/* GRID */}
      <section className="media-grid-section">
        <div className="media-grid">
          {pressItems.map((item) => (
            <article className="media-card" key={item.id}>
              <div className="media-card-image">
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                />
              </div>

              <div className="media-card-content">
                <div className="media-card-header">
                  <span className="media-source">Press Release</span>
                  <span className="media-year">{item.year}</span>
                </div>

                <h3>
                  {/* A real link so search engines can reach each press release. */}
                  <Link to={`/press-release/${pressSlug(item)}`} className="media-card-title-link">
                    {item.title}
                  </Link>
                </h3>

                <p>
                  {item.excerpt ||
                    "Read the complete article to learn more about this feature and insights."}
                </p>

                <button
                  type="button"
                  className="read-article-btn"
                  onClick={() => navigate(`/press-release/${pressSlug(item)}`)}
                >
                  Read Article <span aria-hidden="true">→</span>
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
};

export default PressRelease;