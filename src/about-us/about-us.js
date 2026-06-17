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

const timelineItems = [
  {
    year: "1995",
    title: "Back to where it all began",
    short:
      "A 19-year-old started Nimish Medical Services with a small medical distribution setup in Mumbai.",
    full:
      "With a paltry initial capital, a 19-year-old lad started a medical distribution company in 1995 named Nimish Medical Services that catered to generic medicines covering the central suburbs of Mumbai.",
  },
  {
    year: "2003",
    title: "Growing branch by branch",
    short:
      "Nimish Medical Services slowly bloomed into newer healthcare segments.",
    full:
      "Slowly and steadily, Nimish Medical Services bloomed. It ventured into newer segments – Immunology, Cardiology, Gynecology, Neurology, Nephrology and finally – Oncology.",
  },
  {
    year: "2004",
    title: "Monopoly is the game",
    short:
      "The firm earned monopoly in distributing high-end medicines of this niche segment.",
    full:
      "By 2004, the firm earned monopoly in distributing high-end medicines of this niche segment. By this time, the company added two more jewels, Mrs. Alka Chavan and Mr. Shailesh Shetty.",
  },
  {
    year: "2005",
    title: "The bigger calling",
    short:
      "The team felt a bigger calling and stepped up to build its own pharmaceutical company.",
    full:
      "Life was good and business flourishing. But the team felt the quiver of a bigger calling! They stepped up to set a pharmaceutical company of their own and that marked the birth of ‘Zuvius Life Sciences’.",
  },
  {
    year: "2006",
    title: "To new beginnings",
    short:
      "Zuvius started with one product and expanded across Pan India within a year.",
    full:
      "Zuvius was built on the foundation of ‘quality care for cancer patients’. We started with a single product and in less than a year, we sprawled across Pan India with a full-fledged team of 28 employees. With great growth came greater responsibilities.",
  },
  {
    year: "2007",
    title: "Hitting rock bottom",
    short:
      "Zuvius faced a huge crisis that led to heavy losses, dead stock and zero inflows.",
    full:
      "Zuvius faced a huge crisis that led to crippling loss amounting to crores. A major delay in delivery led to hefty salaries and huge expenses. When stocks arrived, the sales fizzed. The dead stocks lied unsold at various points across the country. With heavy pay outs and zero inflows, Zuvius started to sink.",
  },
  {
    year: "2008",
    title: "Falling further apart",
    short:
      "The team pulled the shutters down, but gathered courage for one last shot.",
    full:
      "We still remember the date, 30th March 2008. Our heart sank as we pulled the shutters down, thinking it was the end we never saw coming. But with a dim gleam of hope, the three of us gathered the grit for one last shot! We called back all the dead stocks from different points and sent out post-dated cheques as refund. Our only hope at that point was to recover the money by selling off the stock.",
  },
  {
    year: "2010",
    title: "Resurrecting from the ashes",
    short:
      "Credibility, hard work and integrity helped Zuvius rise again.",
    full:
      "Our credibility in the industry helped us in picking the pieces. Nimish handled the sales in West India and Alka took over the East. Sailesh stayed back to uphold the pillar once again. It was a harrowing but fulfilling experience. Nimish and Alka allied with distributors from different zones and soon they had the cash flowing in. At the bottom of the abyss, they found a new beginning. The hard work and integrity displayed by the team earned them respect and trust within the industry circle. Zuvius also tucked another feather in the cap with notable research scientist Dr. Ulhas Ganu becoming a part of the core team. In due time, Zuvius became the most respected brand of oncology medication in India.",
  },
  {
    year: "2015",
    title: "Growing out and abound",
    short:
      "Zuvius built a 70+ anti-cancer drug portfolio and expanded its global presence.",
    full:
      "Once, the company strengthened its foothold in the industry there was no looking back. They increased the product range, launched several new molecules for the first time, and continued rigorous research on cancer treatment. By 2015, they had built a portfolio of 70+ anti-cancer drugs. And their dream of building global access to cancer care started to take form. Zuvius registered its products in many countries covering Africa, Latin America, CIS, and South-East Asia. Today, Zuvius is actively invested in research and development of life-saving drugs against cancer. It is making new strides in supportive therapies and nutraceuticals that adds value to the quality of life. And above all, Zuvius is embracing its dream by spanning across borders reaching out to people in need.",
  },
  {
    year: "2020",
    title: "Covid Times",
    short:
      "During Covid, Zuvius continued production and served cancer patients with dedication.",
    full:
      "The company was expecting a steep growth in coming years, when the world was hit by Covid. Everything came to stand still. Moving around was difficult, from manufacturing to transportation to delivery. But the passion didn’t die. The call for requirement of medicines from hospitals and doctors could be heard loud and clear. The cancer patients were suffering as many hospitals were turned into covid centers. The patients were in deep stress and were looking for the treatment to be continued. In this challenging time, we ensured that production continues with minimum number of labourers, and we managed to provide supplies. The entire team at Zuvius was dedicated, be it production, sales or back office. They silently fulfilled their duties and served the Cancer patients dedicatedly. The team didn’t give up. We worked together, we cared for each other. Essential members travelled to office, while others worked from home. The sales team were in touch with their clients throughout. Our silent fighters fought the covid times and fought very hard. We demonstrated a great team effort and togetherness. We moved on and sustained. The government indeed help to ensure that medical supplies does not stop.",
  },
  {
    year: "2022",
    title: "Onward and Upward, No Turning Back",
    short:
      "Zuvius crossed 200+ oncology products and expanded exports to 32 countries.",
    full:
      "This was the time when the market opened and welcomed with open arms. The requirement for anticancer medicines within and outside the nation grew in length and breadth. Simultaneously, with our continuous improvement we launched more products thereby taking our product basket to over 200 products in oncology domain. With the weapon of widest range of anticancer medicines, and consistent quality products, Zuvius leaped to different parts of the world. Capitalizing on such huge opportunity, we connected ourselves to African, Asian, and LatAm countries. With EU GMP certification, we started our journey in regulated European markets as well. We are now exporting to 32 countries.",
  },
];

const AboutUs = () => {
const [showMore, setShowMore] = useState(false);
const [openTimeline, setOpenTimeline] = useState(null);
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

<section className="timeline-section">
  <div className="about-container">
    <div className="section-heading timeline-heading">
      <h3>Our Journey</h3>
      <h2>Milestones That Shaped Zuvius</h2>
      <p>
        A journey built on resilience, purpose and a commitment to redefining
        cancer care.
      </p>
      <div className="small-line center"></div>
    </div>

    <div className="timeline-wrapper">
      {timelineItems.map((item, index) => (
        <div className="timeline-item" key={index}>
          <div className="timeline-year">{item.year}</div>

          <div className="timeline-dot">
            <FaCapsules />
          </div>

          <div className="timeline-card">
            <h3>{item.title}</h3>
            <p className="timeline-short-text">{item.short}</p>

<div
  className={`timeline-full-text ${
    openTimeline === index ? "show" : ""
  }`}
>
  <p>{item.full}</p>
</div>

<button
  type="button"
  className="timeline-read-more-btn"
  onClick={() =>
    setOpenTimeline(openTimeline === index ? null : index)
  }
>
  {openTimeline === index ? "Read Less" : "Read More"}
  <span>{openTimeline === index ? "−" : "+"}</span>
</button>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>
    </main>
  );
};

export default AboutUs;