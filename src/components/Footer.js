import React from "react";
import "./Footer.css";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

// change path

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">

        {/* Address */}
        <div className="footer-col address-col">
          <div className="footer-logo">
            <img src= "/zuvius-logo.jpeg" alt="Logo" />
          </div>

          <p>B/108-113,</p>
          <p>Kanara Business Centre,</p>
          <p>Ghatkopar East,</p>
          <p>Mumbai 400075</p>
        </div>

        {/* Useful Links */}
        <div className="footer-col">
          <h3>USEFUL LINKS</h3>

          <ul>
            <li><a href="/">Zuvius</a></li>
            <li><a href="/">Product</a></li>
            <li><a href="/">What is Cancer</a></li>
            <li><a href="/">Types of cancer</a></li>
            <li><a href="/">Partner With Us</a></li>
            <li><a href="/">Awards & Recognition</a></li>
            <li><a href="/">Media</a></li>
            <li><a href="/">Contact Us</a></li>
          </ul>
        </div>

        {/* Category */}
        <div className="footer-col">
          <h3>CATEGORY</h3>

          <ul>
            <li><a href="/">Oncoace</a></li>
            <li><a href="/">Nutrazeutica</a></li>
          </ul>
        </div>

        {/* Media */}
        <div className="footer-col media-col">
          <h3>MEDIA</h3>

          <ul>
            <li><a href="/">Newsroom</a></li>
            <li><a href="/">Press Release</a></li>
            <li><a href="/">Events Conference and Participation</a></li>
            <li><a href="/">Blogs</a></li>
            <li><a href="/">Testimonials</a></li>
          </ul>

          <div className="social-icons">
  <a
    href="https://www.facebook.com/ZuviusIndia/"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Facebook"
  >
    <FaFacebookF />
  </a>

  <a
    href="https://www.linkedin.com/company/https-www.linkedin.com-search-results-all-heroentitykey-urn-3ali-3aorganization-3a3966110&keywords-z/"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="LinkedIn"
  >
    <FaLinkedinIn />
  </a>

  <a
    href="https://www.instagram.com/zuviuslifesciences/"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Instagram"
  >
    <FaInstagram />
  </a>

  <a
    href="https://www.youtube.com/@zuviuslifesciences"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="YouTube"
  >
    <FaYoutube />
  </a>
</div>
        </div>

      </div>

      <div className="footer-bottom">
        © 2026 All rights reserved by Zuvius LifeSciences | Design & Developed By <a href="https://www.wecanserve.in/" target="_blank" rel="noopener noreferrer">WeCanServe</a>
      </div>
    </footer>
  );
};

export default Footer;

