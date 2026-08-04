import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      
      <div className="footer-content">
        {/* Logo and address */}
        <div className="footer-col address-col">
        <Link to="/" className="footer-logo">
  <img
    src="/zuvius-logo.jpeg"
    alt="Zuvius Lifesciences"
  />
</Link>

          <div className="footer-address">
            <p>
              B/106-113, Link Rd, near Everest Gardens,
            </p>
            <p>
              Sawali Society, Laxmi Nagar,
            </p>
            <p>
              Ghatkopar East, Mumbai,
            </p>
            <p>
              Maharashtra 400075,
            </p>
            <p>
              India
            </p>
          </div>
        </div>

        {/* Useful links */}
        <div className="footer-col">
          <h3>Useful Links</h3>

          <ul>
            <li>
              <Link to="/aboutus">About Us</Link>
            </li>

            <li>
              <Link to="/products">Products</Link>
            </li>

            <li>
              <Link to="/whatiscancer">What is Cancer</Link>
            </li>

            <li>
              <Link to="/types-of-cancer">Types of Cancer</Link>
            </li>

            <li>
              <Link to="/contact">Partner With Us</Link>
            </li>

            <li>
              <Link to="/awards-recognition">Awards & Recognition</Link>
            </li>

            <li>
              <Link to="/newsroom">Newsroom</Link>
            </li>

            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
          </ul>
        </div>

        {/* Products */}
        <div className="footer-col">
          <h3>Products</h3>

          <ul>
            <li>
              <Link to="/products">OncoAce</Link>
            </li>

            <li>
              <Link to="/products">Nutrazeutica</Link>
            </li>
          </ul>
        </div>

        {/* Media */}
        <div className="footer-col media-col">
          <h3>Media</h3>

          <ul>
            <li>
             <Link to="/newsroom">Newsroom</Link>
            </li>

            <li>
              <Link to="/press-release">Press Release</Link>
            </li>

            <li>
              <Link to="/events">Events, Conferences & Participation</Link>
            </li>


           
          </ul>

          <div className="social-icons">
            <a
              href="https://www.facebook.com/ZuviusIndia/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="social-facebook"
            >
              <FaFacebookF />
            </a>

            <a
              href="https://www.linkedin.com/company/https-www.linkedin.com-search-results-all-heroentitykey-urn-3ali-3aorganization-3a3966110&keywords-z/posts/?feedView=all"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="social-linkedin"
            >
              <FaLinkedinIn />
            </a>

            <a
              href="https://www.instagram.com/zuviuslifesciences/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="social-instagram"
            >
              <FaInstagram />
            </a>

            <a
              href="https://www.youtube.com/@zuviuslifesciences"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="social-youtube"
            >
              <FaYoutube />
            </a>
          </div>

          {/* Made in India badge */}
      <div className="made-in-india-badge">
        <img
          src="/made-in-india.png"
          alt="Made in India"
        />
      </div>

        </div>
      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} All rights reserved by
        Zuvius LifeSciences | Design &amp; Developed By{" "}
        <a
          href="https://www.wecanserve.in/"
          target="_blank"
          rel="noopener noreferrer"
          className="developer-link"
        >
          WeCanServe
        </a>
      </div>
    </footer>
  );
};

export default Footer;