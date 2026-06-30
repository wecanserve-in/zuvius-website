import React from "react";
import { useParams, Link } from "react-router-dom";
import { pressItems } from "./mediaData";

import "./PressReleaseDetails.css";

const PressReleaseDetails = () => {
  const { id } = useParams();

const item = pressItems.find(
  (press) => press.id.toString() === id
);

if (!item) {
    return (
      <div className="pressdetailpage-notfound">
        <h2>Article Not Found</h2>
      </div>
    );
  }

  return (
    <div className="pressdetailpage">

      {/* HERO BANNER */}

      {/* ARTICLE HERO */}

<section className="pressdetail-hero">

  <div className="pressdetail-hero-content">

    <span className="pressdetail-badge">
     {item.category || "Press Release"}
    </span>

<h1>{item.title}</h1>

 <p>
  {item.subtitle ||
    "Discover insights, milestones and achievements from Zuvius Lifesciences."}
</p>

    <div className="pressdetail-hero-meta">

      <div className="pressdetail-meta-item">
        <span>Publication</span>
        <strong>
{item.publication || "Zuvius Lifesciences"}
        </strong>
      </div>

      <div className="pressdetail-meta-item">
        <span>Published</span>
<strong>{item.published || "2025"}</strong>
      </div>

    </div>

    <div className="pressdetail-hero-buttons">

   {item.link && item.link !== "#" && (
        <a
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          className="pressdetail-primary-btn"
        >
          Read Original Article
        </a>
      )}

      <Link
        to="/press-release"
        className="pressdetail-secondary-btn"
      >
        Back to Press Releases
      </Link>

    </div>

  </div>

  <div className="pressdetail-hero-image">
  <img
  src={item.heroImage || item.image}
  alt={item.title}
/>
  </div>

</section>

    
    
      {/* CONTENT */}

      <section className="pressdetailpage-content-section">

        <div className="pressdetailpage-content-container">

          {/* LEFT SIDE */}

          <div className="pressdetailpage-main-content">

            <h2>About the Article</h2>

<p>
  {item.about ||
    "Article details will be updated soon."}
</p>

            {item.highlights?.length > 0 && (
              <>
                <hr className="pressdetailpage-divider" />

                <h2>Key Highlights</h2>

                <ul className="pressdetailpage-highlights">
{(item.highlights || []).map((point, index) => (
                    <li key={index}>{point}</li>
                  ))}
                </ul>
              </>
            )}

          </div>

          {/* RIGHT SIDEBAR */}

          <aside className="pressdetailpage-sidebar">

            {/* PUBLICATION */}

            <div className="pressdetailpage-sidebar-card">

              <h3>About the Publication</h3>

              {item.publicationLogo && (
                <img
                  src={item.publicationLogo}
                  alt={item.publication}
                  className="pressdetailpage-publication-logo"
                />
              )}

              {!item.publicationLogo && (
               <h4 className="pressdetailpage-publication-title">
  {item.publication || "Zuvius Lifesciences"}
</h4>
              )}

       <p>
  {item.publicationDescription ||
    `${
      item.publication || "This publication"
    } is a reputed publication covering leadership, business, healthcare and industry developments.`}
</p>

            </div>

            {/* DETAILS */}

            <div className="pressdetailpage-sidebar-card">

              <h3>Article Details</h3>

              <div className="pressdetailpage-sidebar-item">
                <strong>Publication</strong>
                <span>{item.publication || "Zuvius Lifesciences"}</span>
              </div>

              <div className="pressdetailpage-sidebar-item">
                <strong>Published</strong>
                <span>{item.date || "2025"}</span>
              </div>

              <div className="pressdetailpage-sidebar-item">
                <strong>Category</strong>
                <span>{item.category || "Press Release"}</span>
              </div>

              {item.topics?.length > 0 && (
                <div className="pressdetailpage-sidebar-item">
                  <strong>Topics</strong>
                  <span>
                    {item.topics.join(" • ")}
                  </span>
                </div>
              )}

            </div>

          </aside>

        </div>

      </section>

      {/* CTA */}

{item.link && item.link !== "#" && (
        <section className="pressdetailpage-cta">

          <div className="pressdetailpage-cta-content">

           <h3>
  Read the Full Story on{" "}
  {item.publication || "the Original Publication"}
</h3>
            <p>
              Click below to read the complete article on the original publication website.
            </p>

          </div>

          <a
           href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="pressdetailpage-cta-btn"
          >
            Read Original Article ↗
          </a>

        </section>
      )}

      {/* BACK BUTTON */}

      <div className="pressdetailpage-bottom-btn">

        <Link
          to="/press-release"
          className="pressdetailpage-back-btn"
        >
          ← Back to Press Releases
        </Link>

      </div>

    </div>
  );
};

export default PressReleaseDetails;