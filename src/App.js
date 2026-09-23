import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import Home from "./home/home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import ProductMain from "./products/productmain";
import ProductCategory from "./products/productcategory";
import ProductDetail from "./products/productdetail";

import Newsroom from "./media/newsroom";
import PressRelease from "./media/pressrelease";

import Awards from "./awards/awards";
import Careers from "./careers/careers";
import Contact from "./contact/contact";
import Events from "./events/events";
import EventDetail from "./events/EventDetail";

import WhatIsCancer from "./whatiscancer/WhatIsCancer";
import EarlyDiagnosis from "./earlydiagnosis/EarlyDiagnosis";
import AboutUs from "./about-us/about-us";
import Prevention from "./prevention/Prevention";
import TypesOfCancer from "./types/TypesOfCancer";
import CancerDetail from "./cancerdetails";

import CSR from "./csr/csr";
import CSRDetail from "./csr/CSRDetail";

import ScrollToTop from "./components/ScrollToTop";

import PressReleaseDetails from "./media/PressReleaseDetails";

/* ============================================================
   BLOG
   ============================================================ */

import Blog from "./blog/Blog";
import BlogDetail from "./blog/BlogDetail";
import blogs from "./blog/blogdata";

import "./App.css";

/* ============================================================
   CENTRAL SEO MANAGER
   ============================================================ */

const SEO_DATA = {
  /* =========================================================
     HOME
     ========================================================= */

  "/": {
    title:
      "Zuvius Lifesciences | Leading Anticancer & Oncology Drug Manufacturer",

    description:
      "Zuvius Lifesciences - Global manufacturer of the widest range of anticancer and oncology formulations. Dedicated EU GMP & PIC/S approved facilities providing high-quality chemotherapy solutions.",
  },

  /* =========================================================
     PRODUCTS
     ========================================================= */

  "/products": {
    title:
      "Anticancer & Oncology Drugs | Pharmaceutical Portfolio | Zuvius Lifesciences",

    description:
      "Explore the oncology pharmaceutical product portfolio of Zuvius Lifesciences, including specialized anticancer treatments and supportive nutraceutical products.",
  },

  "/products/oncoace": {
    title:
      "OncoAce | Anticancer & Oncology Formulations | Zuvius Lifesciences",

    description:
      "Explore the OncoAce portfolio of specialized oncology drugs and cytotoxic anticancer pharmaceutical products from Zuvius Lifesciences.",
  },

  "/products/nutrazeutica": {
    title:
      "Nutrazeutica | Nutraceutical & Supportive Oncology Care | Zuvius Lifesciences",

    description:
      "Explore the Nutrazeutica portfolio of nutritional healthcare and supportive oncology products designed for patient wellness by Zuvius Lifesciences.",
  },

  /* =========================================================
     ABOUT
     ========================================================= */

  "/aboutus": {
    title:
      "About Zuvius Lifesciences | Leading Oncology Pharmaceutical Company",

    description:
      "Learn about Zuvius Lifesciences, a global oncology healthcare company headquartered in Mumbai, specializing in chemotherapeutic formulations and cancer care.",
  },

  /* =========================================================
     CONTACT
     ========================================================= */

  "/contact": {
    title:
      "Contact Zuvius Lifesciences | Oncology Pharmaceutical Inquiries",

    description:
      "Contact Zuvius Lifesciences for commercial and distribution enquiries about oncology products, anticancer medicines, institutional supply, and global partnerships.",
  },

  /* =========================================================
     CAREERS
     ========================================================= */

  "/careers": {
    title:
      "Careers at Zuvius Lifesciences | Oncology & Pharma Opportunities",

    description:
      "Explore pharmaceutical career opportunities at Zuvius Lifesciences and join an innovative team dedicated to advancing global oncology treatments.",
  },

  /* =========================================================
     NEWSROOM
     ========================================================= */

  "/newsroom": {
    title:
      "Newsroom & Oncology Updates | Zuvius Lifesciences",

    description:
      "Read the latest oncology news, company updates, research milestones, and pharmaceutical developments from Zuvius Lifesciences.",
  },

  /* =========================================================
     BLOG
     ========================================================= */

  "/blog": {
    title:
      "Blog | Oncology Insights & Pharmaceutical Articles | Zuvius Lifesciences",

    description:
      "Explore clinical oncology insights, pharmaceutical research, patient guides, and healthcare perspectives from Zuvius Lifesciences.",
  },

  /* =========================================================
     PRESS RELEASE
     ========================================================= */

  "/press-release": {
    title:
      "Press Releases | Corporate & Oncology Announcements | Zuvius Lifesciences",

    description:
      "Read official press releases, product launches, and oncology corporate announcements from Zuvius Lifesciences.",
  },

  /* =========================================================
     AWARDS
     ========================================================= */

  "/awards-recognition": {
    title:
      "Awards & Recognition | Oncology Excellence | Zuvius Lifesciences",

    description:
      "Explore industry awards, global quality certifications, and international oncology pharmaceutical recognitions achieved by Zuvius Lifesciences.",
  },

  /* =========================================================
     EVENTS
     ========================================================= */

  "/events": {
    title:
      "Events & Conferences | Global Oncology Summits | Zuvius Lifesciences",

    description:
      "Discover upcoming and past oncology conferences, international exhibitions, and medical trade events featuring Zuvius Lifesciences.",
  },

  /* =========================================================
     CANCER AWARENESS
     ========================================================= */

  "/whatiscancer": {
    title:
      "What Is Cancer? | Oncology Education & Awareness | Zuvius Lifesciences",

    description:
      "Learn about cancer biology, early warning signs, oncology treatment modalities, and comprehensive cancer care awareness with Zuvius Lifesciences.",
  },

  "/early-diagnosis": {
    title:
      "Early Cancer Diagnosis | Oncology Screening Guidelines | Zuvius Lifesciences",

    description:
      "Understand the critical importance of early cancer detection, regular oncology screening, and timely medical intervention for better survival outcomes.",
  },

  "/prevention": {
    title:
      "Cancer Prevention | Risk Factors & Oncology Wellness | Zuvius Lifesciences",

    description:
      "Learn about evidence-based cancer prevention strategies, lifestyle risk factor reduction, and oncology wellness practices from Zuvius Lifesciences.",
  },

  "/types-of-cancer": {
    title:
      "Types of Cancer | Comprehensive Oncology Guides | Zuvius Lifesciences",

    description:
      "Explore detailed oncology guides covering different cancer types, symptoms, staging, and therapeutic treatment pathways.",
  },

  /* =========================================================
     CSR
     ========================================================= */

  "/csr": {
    title:
      "Corporate Social Responsibility | Community Oncology Care | Zuvius Lifesciences",

    description:
      "Explore corporate social responsibility initiatives, free cancer screening camps, and community oncology care programs supported by Zuvius Lifesciences.",
  },
};

/* ============================================================
   GET SEO DATA
   ============================================================ */

const getSEOData = (pathname) => {
  /* =========================================================
     Exact static routes
     ========================================================= */

  if (SEO_DATA[pathname]) {
    return SEO_DATA[pathname];
  }

  /* =========================================================
     Product detail pages
     ProductDetail already manages its own SEO metadata.
     ========================================================= */

  if (/^\/products\/[^/]+\/[^/]+\/?$/.test(pathname)) {
    return null;
  }

  /* =========================================================
     Blog detail pages
     ========================================================= */

  if (/^\/blog\/[^/]+\/?$/.test(pathname)) {
    const slug = pathname
      .replace(/^\/blog\//, "")
      .replace(/\/+$/, "");

    const blog = blogs.find((item) => item.slug === slug);

    if (blog) {
      return {
        title: blog.metaTitle || `${blog.title} | Oncology Insights | Zuvius Lifesciences`,
        description: blog.metaDescription || blog.excerpt,
      };
    }

    return {
      title: "Blog | Oncology Insights | Zuvius Lifesciences",
      description:
        "Explore oncology insights, clinical guides, and healthcare perspectives from Zuvius Lifesciences.",
    };
  }

  /* =========================================================
     Press release detail
     ========================================================= */

  if (/^\/press-release\/[^/]+\/?$/.test(pathname)) {
    return {
      title: "Press Release | Oncology Innovations | Zuvius Lifesciences",
      description:
        "Read the latest press release, oncology breakthroughs, and official company announcements from Zuvius Lifesciences.",
    };
  }

  /* =========================================================
     Event detail
     ========================================================= */

  if (/^\/events\/[^/]+\/?$/.test(pathname)) {
    return {
      title: "Event Details | Global Oncology Summits | Zuvius Lifesciences",
      description:
        "Explore medical conference schedules, oncology exhibitions, and summit updates from Zuvius Lifesciences.",
    };
  }

  /* =========================================================
     Cancer detail
     ========================================================= */

  if (/^\/types-of-cancer\/[^/]+\/?$/.test(pathname)) {
    return {
      title: "Cancer Information & Guides | Oncology Care | Zuvius Lifesciences",
      description:
        "Learn more about cancer types, clinical oncology characteristics, warning signs, and evidence-based treatment pathways.",
    };
  }

  /* =========================================================
     CSR detail
     ========================================================= */

  if (/^\/csr\/[^/]+(\/[^/]+)?\/?$/.test(pathname)) {
    return {
      title: "CSR Initiative | Community Oncology Care | Zuvius Lifesciences",
      description:
        "Explore corporate social responsibility initiatives, oncology outreach, and community wellness programs by Zuvius Lifesciences.",
    };
  }

  /* =========================================================
     Unknown route fallback
     ========================================================= */

  return {
    title: "Zuvius Lifesciences | Leading Oncology Pharmaceutical Company",
    description:
      "Zuvius Lifesciences is a leading pharmaceutical company specializing in oncology formulations and cancer care solutions.",
  };
};

/* ============================================================
   SEO COMPONENT
   ============================================================ */

const SEOManager = () => {
  const location = useLocation();

  useEffect(() => {
    const pathname =
      location.pathname.replace(/\/+$/, "") || "/";

    const seo = getSEOData(pathname);

    /*
     * Product detail pages have their own SEO system.
     * Do not overwrite their metadata here.
     */

    if (!seo) {
      return;
    }

    const baseUrl = "https://zuviuslifesciences.in";

    const canonicalUrl =
      pathname === "/"
        ? `${baseUrl}/`
        : `${baseUrl}${pathname}`;

    /* =======================================================
       Browser title
       ======================================================= */

    document.title = seo.title;

    /* =======================================================
       Meta tag helper
       ======================================================= */

    const setMeta = (attribute, value, content) => {
      let element = document.head.querySelector(
        `meta[${attribute}="${value}"]`
      );

      if (!element) {
        element = document.createElement("meta");
        element.setAttribute(attribute, value);
        document.head.appendChild(element);
      }

      element.setAttribute("content", content);
    };

    /* =======================================================
       Standard SEO
       ======================================================= */

    setMeta("name", "description", seo.description);

    /* =======================================================
       Open Graph
       ======================================================= */

    setMeta("property", "og:type", "website");
    setMeta("property", "og:url", canonicalUrl);
    setMeta("property", "og:title", seo.title);
    setMeta("property", "og:description", seo.description);
    setMeta("property", "og:site_name", "Zuvius Lifesciences");

    /* =======================================================
       Twitter / X
       ======================================================= */

    setMeta("name", "twitter:card", "summary_large_image");
    setMeta("name", "twitter:url", canonicalUrl);
    setMeta("name", "twitter:title", seo.title);
    setMeta("name", "twitter:description", seo.description);

    /* =======================================================
       Canonical URL
       ======================================================= */

    let canonical = document.head.querySelector(
      'link[rel="canonical"]'
    );

    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }

    canonical.setAttribute("href", canonicalUrl);
  }, [location.pathname]);

  return null;
};

/* ============================================================
   APP
   ============================================================ */

function App() {
  return (
    <Router>
      <ScrollToTop />

      {/* Central SEO manager */}
      <SEOManager />

      <div className="App">
        <Navbar />

        <main>
          <Routes>
            {/* =================================================
                HOME
            ================================================= */}

            <Route path="/" element={<Home />} />

            {/* =================================================
                PRODUCTS
            ================================================= */}

            <Route path="/products" element={<ProductMain />} />

            <Route
              path="/products/:category"
              element={<ProductCategory />}
            />

            <Route
              path="/products/:category/:slug"
              element={<ProductDetail />}
            />

            {/* =================================================
                NEWSROOM
            ================================================= */}

            <Route path="/newsroom" element={<Newsroom />} />

            {/* =================================================
                BLOG
            ================================================= */}

            <Route path="/blog" element={<Blog />} />

            <Route path="/blog/:slug" element={<BlogDetail />} />

            {/* =================================================
                PRESS RELEASE
            ================================================= */}

            <Route
              path="/press-release"
              element={<PressRelease />}
            />

            <Route
              path="/press-release/:id"
              element={<PressReleaseDetails />}
            />

            {/* =================================================
                AWARDS
            ================================================= */}

            <Route
              path="/awards-recognition"
              element={<Awards />}
            />

            {/* =================================================
                CONTACT
            ================================================= */}

            <Route path="/contact" element={<Contact />} />

            {/* =================================================
                CAREERS
            ================================================= */}

            <Route path="/careers" element={<Careers />} />

            {/* =================================================
                EVENTS
            ================================================= */}

            <Route path="/events" element={<Events />} />

            <Route
              path="/events/:slug"
              element={<EventDetail />}
            />

            {/* =================================================
                CANCER AWARENESS
            ================================================= */}

            <Route
              path="/whatiscancer"
              element={<WhatIsCancer />}
            />

            <Route path="/aboutus" element={<AboutUs />} />

            <Route
              path="/early-diagnosis"
              element={<EarlyDiagnosis />}
            />

            <Route
              path="/prevention"
              element={<Prevention />}
            />

            <Route
              path="/types-of-cancer"
              element={<TypesOfCancer />}
            />

            <Route
              path="/types-of-cancer/:slug"
              element={<CancerDetail />}
            />

            {/* =================================================
                CSR
            ================================================= */}

            <Route path="/csr" element={<CSR />} />

            <Route path="/csr/:slug" element={<CSRDetail />} />

            <Route
              path="/csr/:slug/:eventSlug"
              element={<CSRDetail />}
            />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;