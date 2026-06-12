import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import cancersData from "./cancersData";
import "./cancerdetail.css";


function CancerDetail() {
  const { slug } = useParams();
  const [activeTab, setActiveTab] = useState("overview");
  const cancer = cancersData.find((item) => item.slug === slug);

  if (!cancer) return <div>Cancer Type Not Found</div>;

  return (
    <div className="detail-page-wrapper">
      <div className="toc-hero">
        <div className="toc-hero-left">
          <h1 className="hero-title">{cancer.title}</h1>
          <p className="hero-description">{cancer.description}</p>
        </div>
      </div>

      <div className="tabs-nav-bar">
        {["overview", "typesStages", "riskFactors", "symptoms", "diagnosis", "treatment"].map((tab) => (
          <button key={tab} onClick={() => setActiveTab(tab)} className={`tab-btn ${activeTab === tab ? "active" : ""}`}>
            {tab.replace(/([A-Z])/g, ' $1').toUpperCase()}
          </button>
        ))}
      </div>  

      <div className="content-container">
        {activeTab === "overview" && (
          <div className="tab-pane">
            <h2 className="section-heading">Overview</h2>
            <p className="paragraph-text">{cancer.overview.intro}</p>
            <div className="overview-grid">
              {cancer.overview.cards.map((card, idx) => (
                <div key={idx} className="overview-card">
                  <div className="card-top"><img src={card.img} alt={card.title} /></div>
                  <div className="card-bottom">
                    <h3>{card.title}</h3>
                    <p>{card.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
{activeTab === "typesStages" && cancer?.typesStages && (
  <div className="tab-pane">
    
    {/* STAGES SECTION */}
    <h3 className="section-heading-left">Stages Information</h3>
    <div className="stages-grid" style={{ marginBottom: "60px" }}>
      {cancer.typesStages.stages?.map((stage, i) => ( // "?" add kiya hai yaha
        <div key={i} className="stage-card-small">
          <div className="stage-badge-small">{stage.label}</div>
          <h4>{stage.title}</h4>
          <p>{stage.text}</p>
        </div>
      ))}
    </div>

    {/* TYPES SECTION */}
    <h3 className="section-heading-left">Types</h3>
    <div className="types-list">
      {cancer.typesStages.types?.map((type, i) => ( // "?" add kiya hai yaha
        <div key={i} className="type-card-horizontal">
          <div className="type-img">
            <img src={type.img} alt={type.title} />
          </div>
          <div className="type-text">
            <h4>{type.title}</h4>
            <p>{type.text}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
)}

{activeTab === "riskFactors" && cancer?.riskFactorsData && (
  <div className="tab-pane">
    {/* Main Headline */}
    <h2 className="section-heading">Risk Factors</h2>
    
    {/* Risk Columns Section */}
    <div className="risk-container">
      <div className="risk-column col-uncontrollable">
        <h3 className="risk-col-title">Factors We Cannot Control</h3>
        {cancer.riskFactorsData.uncontrollable.map((item, i) => (
          <div key={i} className="risk-row">
            <div className="risk-icon-wrapper">
              <img src={item.icon} alt={item.title} className="risk-icon" />
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
        {cancer.riskFactorsData.lifestyle.map((item, i) => (
          <div key={i} className="risk-row">
            <div className="risk-icon-wrapper">
              <img src={item.icon} alt={item.title} className="risk-icon" />
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
{activeTab === "diagnosis" && cancer?.diagnosis && (
  <div className="tab-pane diagnosis-pane">
    <h2 className="section-heading">Diagnosis</h2>

    <div className="diagnosis-clean-grid">
      {cancer.diagnosis.items.map((item, i) => (
        <div key={i} className="diagnosis-clean-card">
          <div className="diagnosis-clean-text">
            <h3>{i + 1}. {item.title}</h3>
            <p>{item.text}</p>
          </div>

          <div className="diagnosis-clean-img">
            <img src={item.img} alt={item.title} />
          </div>
        </div>
      ))}
    </div>
  </div>
)}
{activeTab === "symptoms" && cancer?.symptoms && (
  <div className="tab-pane symptoms-pane">
    <h2 className="symptoms-heading">Symptoms</h2>

  

    <div className="symptoms-card-grid">
      {cancer.symptoms.items.map((item, i) => (
        <div key={i} className="symptoms-card">
          <div className="symptoms-card-text">
            <h3>{i + 1}. {item.title}</h3>
            <p>{item.text}</p>
          </div>

          <div className="symptoms-card-img">
            <img src={item.img} alt={item.title} />
          </div>
        </div>
      ))}
    </div>
  </div>
)}
{activeTab === "treatment" && cancer?.treatment && (
  <div className="tab-pane treatment-pane">
    <h2 className="treatment-heading">Treatments</h2>



    <div className="treatment-card-grid">
      {cancer.treatment.options.map((item, i) => (
        <div key={i} className="treatment-card">
          <div className="treatment-card-text">
            <h3>{i + 1}. {item.title}</h3>
            <p>{item.text}</p>
          </div>

          <div className="treatment-card-img">
            <img src={item.img} alt={item.title} />
          </div>
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