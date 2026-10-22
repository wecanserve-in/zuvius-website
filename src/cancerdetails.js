import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import cancersData from "./cancersData";
import blogs from "./blog/blogdata";
import "./cancerdetail.css";
import useSEO from "./seo/useSEO";
import { cancerSEO, NOT_FOUND_SEO } from "./seo/seoConfig";
import NotFound from "./components/NotFound";

function CancerDetail() {
  const { slug } = useParams();
  const [activeTab, setActiveTab] = useState("overview");

  const cancer = cancersData.find((item) => item.slug === slug);
  useSEO(cancer ? cancerSEO(cancer) : NOT_FOUND_SEO);

  if (!cancer) return <NotFound />;

  // Find blogs related to this cancer type
  const relatedCancerBlogs = blogs.filter((blog) => {
    const targetMatch =
      blog.targetUrl === `/types-of-cancer/${cancer.slug}` ||
      blog.targetUrl?.includes(cancer.slug);

    const titleNormalized = cancer.title.toLowerCase();
    const blogTitleNormalized = blog.title.toLowerCase();
    const titleMatch = blogTitleNormalized.includes(titleNormalized);

    const tagMatch = blog.tags?.some((tag) =>
      tag.toLowerCase().includes(titleNormalized)
    );

    return targetMatch || titleMatch || tagMatch;
  });

  // Base tabs
  const tabOptions = [
    { value: "overview", label: "OVERVIEW" },
    { value: "riskFactors", label: "RISK FACTORS" },
    { value: "symptoms", label: "SYMPTOMS" },
    { value: "diagnosis", label: "DIAGNOSIS" },
    { value: "treatment", label: "TREATMENT" },
  ];

  // Add INSIGHTS tab dynamically if matching articles exist
  if (relatedCancerBlogs.length > 0) {
    tabOptions.push({ value: "articles", label: "ARTICLES & INSIGHTS" });
  }

  return (
    <div className="detail-page-wrapper">
      <div className="toc-hero">
        <div className="toc-hero-left">
          <h1 className="hero-title">{cancer.title}</h1>
          <p className="hero-description">{cancer.description}</p>
        </div>

        {cancer.bannerImg && (
          <div className="toc-hero-right">
            <img fetchPriority="high" src={cancer.bannerImg} alt={cancer.title} />
          </div>
        )}
      </div>

      <div className="tabs-nav-bar">
        {tabOptions.map((tab) => (
          <button
            type="button"
            key={tab.value}
            onClick={() => setActiveTab(tab.value)}
            className={`tab-btn ${
              activeTab === tab.value ? "active" : ""
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="mobile-tabs-dropdown">
        <label htmlFor="cancer-detail-tab">View Information</label>

        <div className="mobile-tabs-select-wrap">
          <select
            id="cancer-detail-tab"
            value={activeTab}
            onChange={(event) => setActiveTab(event.target.value)}
          >
            {tabOptions.map((tab) => (
              <option key={tab.value} value={tab.value}>
                {tab.label}
              </option>
            ))}
          </select>

          <span className="mobile-tabs-arrow">⌄</span>
        </div>
      </div>

      {/* Every tab's content stays on the page (inactive ones are hidden), so search engines can read it all. */}
      <div className="content-container">
        {(
          <div className="overview-layout" hidden={activeTab !== "overview"}>
            <div className="overview-content">
              <h2 className="section-heading">Overview</h2>
              <p className="paragraph-text">{cancer.overview?.intro}</p>
              <p className="paragraph-text">{cancer.overview?.description}</p>
            </div>
          </div>
        )}

        {cancer?.riskFactorsData && (
          <div className="tab-pane" hidden={activeTab !== "riskFactors"}>
            <h2 className="section-heading">Risk Factors</h2>
            <div className="risk-container">
              <div className="risk-column col-uncontrollable">
                <h3 className="risk-col-title">Factors We Cannot Control</h3>
                {cancer.riskFactorsData.uncontrollable?.map((item, i) => (
                  <div key={i} className="risk-row">
                    <div className="risk-icon-wrapper">
                      <img loading="lazy"
                        src={item.icon}
                        alt={item.title}
                        className="risk-icon"
                      />
                    </div>
                    <div>
                      <h4>{item.title}</h4>
                      <p>{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="risk-column col-lifestyle">
                <h3 className="risk-col-title">Lifestyle & Health Factors</h3>
                {cancer.riskFactorsData.lifestyle?.map((item, i) => (
                  <div key={i} className="risk-row">
                    <div className="risk-icon-wrapper">
                      <img loading="lazy"
                        src={item.icon}
                        alt={item.title}
                        className="risk-icon"
                      />
                    </div>
                    <div>
                      <h4>{item.title}</h4>
                      <p>{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {cancer?.symptoms && (
          <div className="tab-pane symptoms-pane" hidden={activeTab !== "symptoms"}>
            <h2 className="symptoms-heading">Symptoms</h2>
            <div className="symptoms-card-grid">
              {cancer.symptoms.items?.map((item, i) => (
                <div key={i} className="symptoms-card">
                  <div className="symptoms-card-text">
                    <h3>
                      {i + 1}. {item.title}
                    </h3>
                    <p>{item.text}</p>
                  </div>
                  <div className="symptoms-card-img">
                    <img loading="lazy" src={item.img} alt={item.title} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {cancer?.diagnosis && (
          <div className="tab-pane diagnosis-pane" hidden={activeTab !== "diagnosis"}>
            <h2 className="section-heading">Diagnosis</h2>
            <div className="diagnosis-clean-grid">
              {cancer.diagnosis.items?.map((item, i) => (
                <div key={i} className="diagnosis-clean-card">
                  <div className="diagnosis-clean-text">
                    <h3>
                      {i + 1}. {item.title}
                    </h3>
                    <p>{item.text}</p>
                  </div>
                  <div className="diagnosis-clean-img">
                    <img loading="lazy" src={item.img} alt={item.title} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {cancer?.treatment && (
          <div className="tab-pane treatment-pane" hidden={activeTab !== "treatment"}>
            <h2 className="treatment-heading">Treatments</h2>
            <div className="treatment-card-grid">
              {cancer.treatment.options?.map((item, i) => (
                <div key={i} className="treatment-card">
                  <div className="treatment-card-text">
                    <h3>
                      {i + 1}. {item.title}
                    </h3>
                    <p>{item.text}</p>
                  </div>
                  <div className="treatment-card-img">
                    <img loading="lazy" src={item.img} alt={item.title} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ARTICLES & INSIGHTS TAB */}
        {relatedCancerBlogs.length > 0 && (
          <div className="tab-pane cancer-articles-pane" hidden={activeTab !== "articles"}>
            <h2 className="section-heading">Articles & Educational Guides</h2>
            <p className="paragraph-text">
              In-depth medical articles, patient perspectives, and treatment guides related to {cancer.title}.
            </p>

            <div className="cancer-article-list">
              {relatedCancerBlogs.map((item) => (
                <div className="cancer-article-item" key={item.id}>
                  <div className="cancer-article-img-wrap">
                    <img loading="lazy"
                      src={item.image}
                      alt={item.title}
                      className={item.imageClass || ""}
                    />
                  </div>

                  <div className="cancer-article-info">
                    <div className="cancer-article-meta">
                      <span className="cancer-article-cat">{item.category}</span>
                      <span>{item.date}</span>
                      <span>{item.readTime}</span>
                    </div>

                    <h3>
                      <Link to={`/blog/${item.slug}`}>{item.title}</Link>
                    </h3>
                    <p>{item.excerpt}</p>
                  </div>

                  <Link
                    to={`/blog/${item.slug}`}
                    className="cancer-article-arrow-btn"
                    aria-label={`Read ${item.title}`}
                  >
                    <span>→</span>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default CancerDetail;