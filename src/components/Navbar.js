import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState(null);

  const navData = [
    {
      name: "Zuvius",
      path: "/",
      dropdown: [
        { name: "About Us", path: "/aboutus" },
        { name: "CSR", path: "/csr" },
        { name: "Events", path: "/events" },
        { name: "Awards", path: "/awards-recognition" },
      ],
    },
    { name: "Products", path: "/products" },
    {
      name: "What is Cancer",
      path: "/whatiscancer",
      dropdown: [
        { name: "Prevention", path: "/prevention" },
        { name: "Early Diagnosis", path: "/early-diagnosis" },
      ],
    },
    { name: "Types of Cancer", path: "/types-of-cancer" },
    { name: "Career", path: "/careers" },
    {
      name: "Media",
      dropdown: [
        { name: "Newsroom", path: "/newsroom" },
        { name: "Press Release", path: "/press-release" },
      ],
    },
    { name: "Contact", path: "/contact" },
  ];

  const closeMobileMenu = () => {
    setMobileOpen(false);
    setMobileDropdown(null);
  };

  return (
    <nav className="navbar">
      <div className="nav-logo">
        <Link to="/" onClick={closeMobileMenu}>
          <img src="/zuvius-logo.jpeg" alt="Zuvius Logo" className="logo-img" />
        </Link>
      </div>

      <button
        className={`hamburger-btn ${mobileOpen ? "active" : ""}`}
        onClick={() => setMobileOpen(!mobileOpen)}
        aria-label="Toggle navigation menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <ul className={`nav-links ${mobileOpen ? "mobile-open" : ""}`}>
        {navData.map((item, index) => (
          <li
            key={index}
            className={item.dropdown ? "nav-item-dropdown" : ""}
            onMouseEnter={() => item.dropdown && setActiveDropdown(index)}
            onMouseLeave={() => item.dropdown && setActiveDropdown(null)}
          >
            {item.dropdown ? (
              <>
                <div className="dropdown-container">
                  {item.path ? (
                    <Link
                      to={item.path}
                      className="nav-link-dropdown"
                      onClick={closeMobileMenu}
                    >
                      {item.name}
                    </Link>
                  ) : (
                    <span className="nav-link-dropdown nav-link-nonclick">
                      {item.name}
                    </span>
                  )}

                  <button
                    className="dropdown-arrow"
                    onClick={(e) => {
                      e.preventDefault();
                      setMobileDropdown(
                        mobileDropdown === index ? null : index
                      );
                    }}
                    aria-label={`Toggle ${item.name} dropdown`}
                  >
                    ▾
                  </button>
                </div>

                <div
                  className={`dropdown-menu ${
                    activeDropdown === index ? "desktop-visible" : ""
                  } ${mobileDropdown === index ? "mobile-visible" : ""}`}
                >
                  {item.dropdown.map((sub) => (
                    <Link
                      key={sub.path}
                      to={sub.path}
                      onClick={closeMobileMenu}
                    >
                      {sub.name}
                    </Link>
                  ))}
                </div>
              </>
            ) : (
              <NavLink
                to={item.path}
                end={item.path === "/"}
                onClick={closeMobileMenu}
              >
                {item.name}
              </NavLink>
            )}
          </li>
        ))}

        <li className="mobile-inquiry-wrap">
<a
  href="/zuvius-brochure.pdf" 
  download
  className="btn-brochure mobile-inquiry"
>
  Download Brochure
</a>        </li>
      </ul>

      <div className="nav-action">
  <a
    href="/zuvius-brochure.pdf"
    download
    className="btn-brochure"
  >
    Download Brochure
  </a>
</div>
    </nav>
  );
};

export default Navbar;