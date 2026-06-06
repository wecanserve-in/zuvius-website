import React from 'react';
import './careers.css';
import PageBanner from "../components/PageBanner";

const Careers = () => {
  return (
    <div className="cr-wrapper-main">
      
      {/* --- SECTION 1: HERO BANNER --- */}
<PageBanner
  image="/contact/careerbanner.png"
  title={
    <>
      Zuvius <br />
      LifeSciences
    </>
  }
  description=""
  alt="Zuvius LifeSciences Careers"
/>

      {/* --- SECTION 2: WHY JOIN US --- */}
      <section className="cr-why-join-block">
        <div className="cr-center-heading-zone">
          <p className="cr-badge-text cr-center-txt">WHY JOIN US</p>
          <h2 className="cr-section-main-title">Grow With Purpose</h2>
          <p className="cr-section-subtitle-prose">
            At Zuvius Lifesciences, we believe careers grow best in an environment built on learning, integrity, collaboration and meaningful work.
          </p>
        </div>

        <div className="cr-cards-triple-grid">
          <div className="cr-benefit-card-horizontal">
            <div className="cr-card-icon-sphere">
              <span className="cr-vector-glyph">⚖️</span>
            </div>
            <div className="cr-card-content-side">
              <h3>Work-Life Balance</h3>
              <p>We want our brave Samaritans to live their best life while making this world a better place. That’s why we are busy cultivating a company culture of flexibility, transparency, learning and belonging.</p>
            </div>
          </div>

          <div className="cr-benefit-card-horizontal">
            <div className="cr-card-icon-sphere">
              <span className="cr-vector-glyph">🌱</span>
            </div>
            <div className="cr-card-content-side">
              <h3>Leadership</h3>
              <p>At Zuvius, we nourish the novice into learners and mould the learners to become leaders. With our advanced trainings, on-field practice and leadership lessons we scrap the dust off to bring out the best in you!</p>
            </div>
          </div>

          <div className="cr-benefit-card-horizontal">
            <div className="cr-card-icon-sphere">
              <span className="cr-vector-glyph">📚</span>
            </div>
            <div className="cr-card-content-side">
              <h3>Learnings</h3>
              <p>We like to have a bunch of curious people in our team. People who love to know things, who keep digging deep, who never stop learning. For them we provide ongoing learning opportunities.</p>
            </div>
          </div>

          <div className="cr-benefit-card-horizontal">
            <div className="cr-card-icon-sphere">
              <span className="cr-vector-glyph">💙</span>
            </div>
            <div className="cr-card-content-side">
              <h3>ZuviCare</h3>
              <p>Zuvius is all about living life to the fullest; in health, happiness and hale. We want the same to reflect in each of our employees. Beyond healthy snacks and nutricare, we organize regular workshops on mindfulness.</p>
            </div>
          </div>

          <div className="cr-benefit-card-horizontal">
            <div className="cr-card-icon-sphere">
              <span className="cr-vector-glyph">🏆</span>
            </div>
            <div className="cr-card-content-side">
              <h3>Reward and Recognition</h3>
              <p>We value the hard work and tireless efforts our employees put in. We salute their dedication and contribution. That’s why we have fair pay policies, rewards and recognitions to honour their valuable achievements.</p>
            </div>
          </div>

          <div className="cr-benefit-card-horizontal">
            <div className="cr-card-icon-sphere">
              <span className="cr-vector-glyph">🤝</span>
            </div>
            <div className="cr-card-content-side">
              <h3>Equality</h3>
              <p>We value the worth of your work. At Zuvius, the gender, colour, category does not matter. We foster an inclusive environment where we open the doors and lay the ladder for anyone who possesses the talent and skills.</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 3: COMPACT OUR CULTURE --- */}
      <section className="cr-culture-split-block-compact">
        <div className="cr-desktop-inner">
          <div className="cr-culture-left-panel">
            <p className="cr-badge-text">OUR CULTURE</p>
            <h2 className="cr-section-main-title">
              Professional. Supportive. <br />Growth-Focused.
            </h2>
            <p className="cr-culture-body-prose">
              We work in an environment where every minute is driven by this intense passion of saving
              lives. Our energies are directed towards a unified vision of uplifting the quality of life with or
              without cancer. We strive everyday to make a better treatment possible, a faster diagnosis
              assessable. With our heads buried in a purpose much bigger than everything else, there is
              no place for anything but positivity and optimism!          
            </p>
          </div>

          <div className="cr-culture-right-panel">
            <div className="cr-culture-frame-wrapper-slim">
              <img 
                src="/Contact/careerimage1.jpg" 
                alt="Zuvius Corporate Culture Workplace" 
                className="cr-culture-photo-compact"
              />
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 4: LIFE AT ZUVIUS PHOTO GALLERY --- */}
      <section className="cr-life-gallery-block">
        <div className="cr-center-heading-zone">
          <p className="cr-badge-text cr-center-txt">LIFE AT ZUVIUS</p>
          <h2 className="cr-section-main-title">Moments From Our Workplace</h2>
          <div className="cr-center-accent-line"></div>
        </div>

        <div className="cr-mosaic-grid-layout">
          <div className="cr-mosaic-cell cr-cell-hero-vertical">
            <img src="./contact/celb-2.png" alt="Team Outdoor Gathering" />
          </div>
          <div className="cr-mosaic-cell"><img src="./contact/celb-1.png" alt="Corporate Meeting" /></div>
          <div className="cr-mosaic-cell"><img src="./contact/celb-2.png" alt="Boardroom Session" /></div>
          <div className="cr-mosaic-cell"><img src="./contact/celb-3.png" alt="Manufacturing Line" /></div>
          <div className="cr-mosaic-cell"><img src="./contact/celb-4.png" alt="Sports Event" /></div>
          <div className="cr-mosaic-cell"><img src="./contact/celb-5.png" alt="Office Celebration" /></div>
          <div className="cr-mosaic-cell"><img src="./contact/celb-1.png" alt="Group Photo" /></div>
        </div>
      </section>

      {/* --- SECTION 5: FINAL APPLICATION CTA --- */}
      <section className="cr-cta-footer-block">
        <div className="cr-cta-inner-card-container">
          <div className="cr-cta-left-identity">
            <div className="cr-cta-file-icon-box">
              <span className="cr-file-glyph">📄</span>
            </div>
            <div className="cr-cta-text-bundle">
              <h3>Ready to Make an Impact?</h3>
              <p>
                We are always looking for passionate individuals across pharma sales, marketing, operations, quality and corporate roles.
              </p>
            </div>
          </div>
          <div className="cr-cta-right-actions">
            <button className="cr-action-btn-blue">
              APPLY NOW <span className="cr-btn-arrow">→</span>
            </button>
            <p className="cr-email-anchor-subtext">
              Send your resume to <a href="mailto:careers@zuviuslifesciences.com">careers@zuviuslifesciences.com</a>
            </p>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Careers;