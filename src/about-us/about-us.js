import React, { useState } from "react";
import "./about-us.css";
import PageBanner from "../components/PageBanner";

import {
  FaBullseye,
  FaEye,
  FaUsers,
  FaGlobe,
  FaIndustry,
  FaCapsules,
  FaLinkedinIn,
} from "react-icons/fa";

const leaders = [
  {
    name: "Mr. Nimish Thakkar",
    role: "Chairman & Managing Director",
    image: "/aboutus/nimish-thakkar.png",
    linkedin: "https://www.linkedin.com/in/nimishh-thakkar-90a78a14/",
    desc: "An audacious visionary with excellent entrepreneurial wisdom helps in achieving international standards with cost-effective methods.",
  },
  {
    name: "Dr. Ulhas Ganu",
    role: "Technical Director",
    image: "/aboutus/ulhas-ghanu.png",
    linkedin: "https://www.linkedin.com/in/dr-ulhas-ganu-81a885a/",
    desc: "Oncology research scientist with 27 years of experience, driving innovation and quality excellence at Zuvius."
  },
  {
    name: "Mr. Shailesh Shetty",
    role: "Director – Finance, Admin, HR & Operations",
    image: "/aboutus/shailesh-shetty.png",
    linkedin: "https://www.linkedin.com/in/shailesh-shetty-6788006a/",
    desc: "Finance, Administration and HR leader with 18+ years of experience in building efficient and scalable operations."
  },
  {
    name: "Mrs. Alka Chavan",
    role: "Director – Sales & Marketing",
    image: "/aboutus/alka-chavan.png",
    linkedin: "https://www.linkedin.com/in/alka-chavan-ab881914/",
    desc: "Pharmaceutical marketing professional with 26 years of expertise across management, P&L, sales and marketing."
  },
  {
    name: "Mr. Swapnil Kamble",
    role: "Director – Marketing",
    image: "/aboutus/swapnil-kamble.png",
    linkedin: "https://www.linkedin.com/in/swapnil-kamble-173334b9/",
    desc: "Marketing leader with 20 years of experience, known for driving growth and fostering a culture of innovation."
  },
];

const counters = [
  { icon: <FaUsers />, number: "1500+", label: "Team Members" },
  { icon: <FaGlobe />, number: "51+", label: "Countries" },
  { icon: <FaIndustry />, number: "3", label: "Manufacturing Facilities" },
  { icon: <FaCapsules />, number: "250+", label: "Products" },
];

const AboutUs = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <main className="about-page">
      <PageBanner
  image="/aboutus/aboutsusbanner.png"
  title={
    <>
      Redefining <br />
      Life Together.
    </>
  }
  description=""
  alt="Aboutus"
/>

      <section className="video-section">
        <div className="about-container video-grid">
          <div className="video-text">
            <span className="section-label">Corporate Video</span>
            <h2>Welcome to Zuvius Lifesciences</h2>
            <div className="small-line"></div>

            <p>
              Zuvius Lifesciences is the manufacturer of the widest range of
              anticancer drugs in the world. The company is headquartered in
              Mumbai, India, and is a global healthcare company specializing in
              chemotherapeutic formulations.
            </p>

            <button
              type="button"
              className="about-read-more-btn"
              onClick={() => setShowMore((prev) => !prev)}
            >
              {showMore ? "Read Less" : "Read More"} <span>→</span>
            </button>
          </div>

          <div className="youtube-box">
            <iframe
              src="https://www.youtube.com/embed/sFT7s3GLvP8?si=JSAw4i4NyNai4CNg"
              title="Zuvius Corporate Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>

      {showMore && (
        <section className="about-more-section">
          <div className="about-full-content">
            <p>
              Dedicated towards redefining quality of life, our products span
              the breadth of cancer care. Enriched with a portfolio of leading
              science-based offerings in oncology care and nutraceuticals, we
              have delivered values in the lives of people for more than 20
              years.
            </p>

            <p>
              Zuvius is an integrated research-based organization, renowned for
              its quality and commitment. Built with a vision of making
              affordable cancer care accessible across the globe, the company
              has curated a range of 200+ high-quality anti-cancer medicines
              that reach out to patients.
            </p>

            <p>
              Backed by some of the finest talents of the pharmaceutical
              industry, Zuvius stands strong in building a legacy of delivering
              innovative solutions and therapies that would change the perception
              of cancer.
            </p>

            <p>
              The word ‘Zuvius’ inspires a ring of positivity, joy and optimism.
              Zuvius Lifesciences was incepted with the vision of spreading good
              health across the globe and thereby emerging out as one of the
              most respected pharmaceutical brands in the industry, specializing
              in super specialty medicines.
            </p>

            <p>
              Zuvius Lifesciences is much more than a company, more than simply
              a manufacturer of super speciality products. We are an eclectic
              and an ever-expanding mix of people with perspectives and skills
              to collectively work under the shared responsibility towards our
              consumers, partners, colleagues and most importantly, towards each
              other.
            </p>
          </div>
        </section>
      )}

      <section className="mission-section">
        <div className="about-container mission-grid">
          <div className="mission-card">
            <div className="mission-icon">
              <FaBullseye />
            </div>
            <div>
              <h3>Our Mission</h3>
              <div className="small-line"></div>
              <p>
                Steering towards a world where cancer is just another disease,
                treatable and curable! Redefining Health, Rediscovering Life.
              </p>
            </div>
          </div>

          <div className="mission-card vision-card">
            <div className="mission-icon">
              <FaEye />
            </div>
            <div>
              <h3>Our Vision</h3>
              <div className="small-line"></div>
              <p>
                To become a global leader in creating a holistic portfolio of
                quality cancer care that encompasses every aspect from early
                diagnosis to treatment to palliative care!
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="counter-section">
        <div className="about-container counter-box">
          {counters.map((item, index) => (
            <div className="counter-item" key={index}>
              <div className="counter-icon">{item.icon}</div>
              <h3>{item.number}</h3>
              <p>{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="leadership-section">
  <div className="about-container">
    <div className="section-heading">
      <h2>Leadership That Inspires</h2>
      <div className="small-line center"></div>
    </div>

    {/* Main Leader */}
    <div className="main-leader-card">
      <div className="main-leader-img">
        <img src={leaders[0].image} alt={leaders[0].name} />
      </div>

      <div className="main-leader-content">
        <h3>{leaders[0].name}</h3>
        <h4>{leaders[0].role}</h4>
        <p>{leaders[0].desc}</p>

      <a
  href={leaders[0].linkedin}
  target="_blank"
  rel="noopener noreferrer"
  className="linkedin-btn"
>
          <FaLinkedinIn />
          <span>LinkedIn</span>
        </a>
      </div>
    </div>

    {/* Other Leaders */}
    <div className="leader-grid">
      {leaders.slice(1).map((leader, index) => (
        <div className="leader-card" key={index}>
          <div className="leader-image-wrap">
            <img src={leader.image} alt={leader.name} />
          </div>

          <div className="leader-card-content">
            <h3>{leader.name}</h3>

            <p className="leader-role">
              {leader.role}
            </p>

            <p className="leader-desc">
              {leader.desc}
            </p>
          </div>

         <a
  href={leader.linkedin}
  target="_blank"
  rel="noopener noreferrer"
  className="linkedin-btn"
>
            <FaLinkedinIn />
            <span>LinkedIn</span>
          </a>
        </div>
      ))}
    </div>
  </div>
</section>
    </main>
  );
};

export default AboutUs;