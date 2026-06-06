import React, { useState } from "react";
import "./contact.css";
import PageBanner from "../components/PageBanner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
  };

  return (
    <div className="cr-wrapper-main">
      <PageBanner
        image="/contact/contactbanner.png"
        title={
          <>
            We're Here <br />
            to Help
          </>
        }
        description=""
        alt="Contact Zuvius Lifesciences"
      />

      {/* --- SECTION 2: GET IN TOUCH --- */}
      <section className="cr-get-in-touch-block">
        <div className="cr-center-heading-zone">
          <p className="cr-badge-text cr-center-txt">GET IN TOUCH</p>
          <h2 className="cr-section-main-title">We would love to hear from you.</h2>
        </div>

        <div className="cr-cards-four-grid">
          <a href="tel:+918657000206" className="cr-contact-info-card cr-clickable-card-wrapper">
            <div className="cr-card-icon-sphere"><span className="cr-vector-glyph">📞</span></div>
            <h3>Phone</h3>
            <p className="cr-highlight-text">+91 865 700 0206</p>
            <p className="cr-sub-text">(Monday to Friday<br />10:00 AM – 06:00 PM)</p>
          </a>

          <a href="mailto:info@zuviuslifesciences.in" className="cr-contact-info-card cr-clickable-card-wrapper">
            <div className="cr-card-icon-sphere"><span className="cr-vector-glyph">✉️</span></div>
            <h3>Email</h3>
            <p className="cr-highlight-text">info@zuviuslifesciences.in</p>
          </a>

          <a href="https://zuviuslifesciences.in/" target="_blank" rel="noreferrer" className="cr-contact-info-card cr-clickable-card-wrapper">
            <div className="cr-card-icon-sphere"><span className="cr-vector-glyph">🌐</span></div>
            <h3>Website</h3>
            <p className="cr-highlight-text">zuviuslifesciences.in</p>
          </a>

          <div className="cr-contact-info-card">
            <div className="cr-card-icon-sphere"><span className="cr-vector-glyph">📢</span></div>
            <h3>Social Media</h3>

            <div className="cr-social-links-flex">
              <a href="https://www.linkedin.com/company/https-www.linkedin.com-search-results-all-heroentitykey-urn-3ali-3aorganization-3a3966110&keywords-z?originalSubdomain=in" target="_blank" rel="noreferrer" className="cr-social-icon-btn" title="LinkedIn">in</a>
              <a href="https://www.facebook.com/ZuviusIndia/" target="_blank" rel="noreferrer" className="cr-social-icon-btn" title="Facebook">f</a>
              <a href="https://www.instagram.com/zuviuslifesciences/" target="_blank" rel="noreferrer" className="cr-social-icon-btn cr-insta-gradient-btn" title="Instagram">
                <span className="cr-insta-glyph-lens"></span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 3: SEND US A MESSAGE --- */}
      <section className="cr-form-split-block">
        <div className="cr-desktop-inner">
          <div className="cr-form-left-panel">
            <h2 className="cr-section-main-title">Send Us a Message</h2>
            <p className="cr-form-instruction">Fill the form below and our team will get back to you.</p>

            <form onSubmit={handleSubmit} className="cr-interactive-message-form">
              <div className="cr-form-input-row">
                <input type="text" name="name" placeholder="Your Name *" value={formData.name} onChange={handleChange} required />
                <input type="email" name="email" placeholder="Your Email *" value={formData.email} onChange={handleChange} required />
              </div>

              <div className="cr-form-input-row">
                <input type="tel" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} />
                <input type="text" name="subject" placeholder="Subject" value={formData.subject} onChange={handleChange} />
              </div>

              <textarea name="message" placeholder="Your Message *" rows="4" value={formData.message} onChange={handleChange} required></textarea>

              <button type="submit" className="cr-action-btn-blue">
                SEND MESSAGE <span className="cr-btn-arrow">→</span>
              </button>
            </form>

            <p className="cr-form-privacy-note">🛡️ Your information is safe with us. We respect your privacy.</p>
          </div>

          <div className="cr-form-right-panel">
            <div className="cr-form-image-frame-wrapper">
              <img src="/contact/contactimage1.png" alt="Zuvius Office Reception Desk" className="cr-form-photo-compact" />
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 4: MAP --- */}
      <section className="cr-locations-map-block">
        <div className="cr-center-heading-zone">
          <p className="cr-badge-text cr-center-txt">OUR LOCATION</p>
          <div className="cr-center-accent-line"></div>
        </div>

        <div className="cr-map-container-frame">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.36902837582!2d72.91334007395149!3d19.091460151489443!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c634c633b087%3A0x7be89702b7a923e2!2sZuvius%20Life%20Sciences%20Private%20Limited!5e0!3m2!1sen!2sin!4v1779272692609!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Zuvius India Location Map"
          ></iframe>
        </div>
      </section>

      {/* --- SECTION 5: FAQ --- */}
      <section className="cr-bottom-faq-full-width-block">
        <div className="cr-faq-full-wrapper">
          <h3 className="cr-faq-section-heading">Frequently Asked Questions</h3>

          <div className="cr-faq-node">
            <details>
              <summary>How can I submit a product enquiry? <span className="cr-accordion-arrow">▼</span></summary>
              <p>You can fill out the form above or email our team directly at info@zuviuslifesciences.in with your requirements.</p>
            </details>
          </div>

          <div className="cr-faq-node">
            <details>
              <summary>How do I report an adverse event? <span className="cr-accordion-arrow">▼</span></summary>
              <p>Please contact our drug safety and customer care division immediately at +91 865 700 0206 or email info@zuviuslifesciences.in.</p>
            </details>
          </div>

          <div className="cr-faq-node">
            <details>
              <summary>I want to partner with Zuvius. How can I reach out? <span className="cr-accordion-arrow">▼</span></summary>
              <p>Please submit a comprehensive overview of your proposal using our contact form with the subject 'Partnership Inquiry'.</p>
            </details>
          </div>

          <div className="cr-faq-node">
            <details>
              <summary>How can I get product-related information? <span className="cr-accordion-arrow">▼</span></summary>
              <p>Detailed portfolios are available upon request through our verified regulatory and medical information portals.</p>
            </details>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;