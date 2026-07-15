import React from "react";
import { Link } from "react-router-dom";
import "./csr.css";
import PageBanner from "../components/PageBanner";
import { journeyData } from "./journeydata";

const CSR = () => {
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

      
      <section className="csr-initiative-section">
        <div className="csr-center-heading-zone">
          <h2 className="csr-section-main-title">
            Our Initiatives
          </h2>

          <div className="csr-main-title-line" />
        </div>

        <div className="csr-initiative-grid">
          {journeyData.map((item) => (
            <Link
              to={`/csr/${item.slug}`}
              className="csr-initiative-card"
              key={item.slug}
            >
              <img
                src={item.poster}
                alt={item.title}
                className="csr-initiative-card-image"
              />

              <div className="csr-initiative-card-overlay" />

              <div className="csr-initiative-card-content">
                <h3>{item.title}</h3>

                <p>{item.cardSubtitle}</p>

                <span className="csr-initiative-card-button">
                  Explore Initiative <strong>→</strong>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default CSR;