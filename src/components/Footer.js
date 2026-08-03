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
              <a href="/about-us">About Us</a>
            </li>

            <li>
              <a href="/products">Products</a>
            </li>

            <li>
              <a href="/whatiscancer">
                What is Cancer
              </a>
            </li>

            <li>
              <a href="/types-of-cancer">
                Types of Cancer
              </a>
            </li>

            <li>
              <a href="/contact">
                Partner With Us
              </a>
            </li>

            <li>
              <a href="/awards-recognition">
                Awards &amp; Recognition
              </a>
            </li>

            <li>
              <a href="/newsroom">
                Newsroom
              </a>
            </li>

            <li>
              <a href="/contact">
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        {/* Products */}
        <div className="footer-col">
          <h3>Products</h3>

          <ul>
            <li>
              <a href="/products">
                OncoAce
              </a>
            </li>

            <li>
              <a href="/products">
                Nutrazeutica
              </a>
            </li>
          </ul>
        </div>

        {/* Media */}
        <div className="footer-col media-col">
          <h3>Media</h3>

          <ul>
            <li>
              <a href="/newsroom">
                Newsroom
              </a>
            </li>

            <li>
              <a href="/press-release">
                Press Release
              </a>
            </li>

            <li>
              <a href="/events">
                Events, Conferences &amp; Participation
              </a>
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