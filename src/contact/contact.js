import React, { useState } from "react";
import "./contact.css";
import PageBanner from "../components/PageBanner";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));
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

      {/* CONTACT FORM */}

      <section className="cr-form-split-block">
        <div className="cr-form-card">
          <div className="cr-form-heading-zone">
            <p className="cr-form-heading-label">
              CONTACT US
            </p>

            <h2 className="cr-section-main-title">
              Fill the form below and our team will get back to you.
            </h2>
          </div>

          <form
            onSubmit={handleSubmit}
            className="cr-interactive-message-form"
          >
            <div className="cr-form-input-row">
              <div className="cr-form-field">
                <label htmlFor="contact-name">
                  Your Name
                </label>

                <input
                  id="contact-name"
                  type="text"
                  name="name"
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={handleChange}
                  autoComplete="name"
                  required
                />
              </div>

              <div className="cr-form-field">
                <label htmlFor="contact-email">
                  Email Address
                </label>

                <input
                  id="contact-email"
                  type="email"
                  name="email"
                  placeholder="Enter your email address"
                  value={formData.email}
                  onChange={handleChange}
                  autoComplete="email"
                  required
                />
              </div>
            </div>

            <div className="cr-form-input-row">
              <div className="cr-form-field">
                <label htmlFor="contact-phone">
                  Phone Number
                </label>

                <input
                  id="contact-phone"
                  type="tel"
                  name="phone"
                  placeholder="Enter your phone number"
                  value={formData.phone}
                  onChange={handleChange}
                  autoComplete="tel"
                />
              </div>

              <div className="cr-form-field">
                <label htmlFor="contact-subject">
                  Subject
                </label>

                <input
                  id="contact-subject"
                  type="text"
                  name="subject"
                  placeholder="How can we help?"
                  value={formData.subject}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="cr-form-field cr-message-field">
              <label htmlFor="contact-message">
                Your Message
              </label>

              <textarea
                id="contact-message"
                name="message"
                placeholder="Write your message here..."
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>

            <div className="cr-form-footer">
              <p className="cr-form-privacy-note">
                <span
                  className="cr-privacy-icon"
                  aria-hidden="true"
                >
                  ✓
                </span>

                Your information is secure and will remain private.
              </p>

              <button
                type="submit"
                className="cr-action-btn-blue"
              >
                Send Message

                <span
                  className="cr-btn-arrow"
                  aria-hidden="true"
                >
                  →
                </span>
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* GET IN TOUCH */}

      <section className="cr-get-in-touch-block">
        <div className="cr-center-heading-zone">
          <p className="cr-badge-text cr-center-txt">
            GET IN TOUCH
          </p>

          <h2 className="cr-section-main-title">
            We would love to hear from you.
          </h2>
        </div>

        <div className="cr-cards-four-grid">
          {/* PHONE CARD */}

          <a
            href="tel:+918657000206"
            className="cr-contact-info-card cr-clickable-card-wrapper"
            aria-label="Call Zuvius Lifesciences"
          >
            <div className="cr-card-icon-sphere">
              <span
                className="cr-vector-glyph"
                aria-hidden="true"
              >
                📞
              </span>
            </div>

            <h3>Phone</h3>

            <p className="cr-highlight-text">
              +91 865 700 0206
            </p>

            <p className="cr-sub-text">
              Monday to Friday
              <br />
              10:00 AM – 06:00 PM
            </p>
          </a>

          {/* EMAIL CARD */}

          <a
            href="mailto:info@zuviuslifesciences.in"
            className="cr-contact-info-card cr-clickable-card-wrapper"
            aria-label="Email Zuvius Lifesciences"
          >
            <div className="cr-card-icon-sphere">
              <span
                className="cr-vector-glyph"
                aria-hidden="true"
              >
                ✉️
              </span>
            </div>

            <h3>Email</h3>

            <p className="cr-highlight-text">
              info@zuviuslifesciences.in
            </p>
          </a>

          {/* SOCIAL MEDIA CARD */}

          <div className="cr-contact-info-card cr-social-media-card">
            <div className="cr-card-icon-sphere">
              <span
                className="cr-vector-glyph"
                aria-hidden="true"
              >
                📢
              </span>
            </div>

            <h3>Social Media</h3>

            <div className="social-icons cr-contact-social-icons">
              <a
                href="https://www.facebook.com/ZuviusIndia/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                title="Facebook"
                className="social-facebook"
              >
                <FaFacebookF />
              </a>

              <a
                href="https://www.linkedin.com/company/https-www.linkedin.com-search-results-all-heroentitykey-urn-3ali-3aorganization-3a3966110&keywords-z/posts/?feedView=all"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                title="LinkedIn"
                className="social-linkedin"
              >
                <FaLinkedinIn />
              </a>

              <a
                href="https://www.instagram.com/zuviuslifesciences/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                title="Instagram"
                className="social-instagram"
              >
                <FaInstagram />
              </a>

              <a
                href="https://www.youtube.com/@zuviuslifesciences"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                title="YouTube"
                className="social-youtube"
              >
                <FaYoutube />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* LOCATION MAP */}

      <section className="cr-locations-map-block">
        <div className="cr-center-heading-zone">
          <p className="cr-badge-text cr-center-txt">
            OUR LOCATION
          </p>

          <div className="cr-center-accent-line" />
        </div>

        <div className="cr-map-container-frame">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.36902837582!2d72.91334007395149!3d19.091460151489443!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c634c633b087%3A0x7be89702b7a923e2!2sZuvius%20Life%20Sciences%20Private%20Limited!5e0!3m2!1sen!2sin!4v1779272692609!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Zuvius India Location Map"
          />
        </div>
      </section>
    </div>
  );
};

export default Contact;