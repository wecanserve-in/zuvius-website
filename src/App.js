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
import BlogAll from "./blog/BlogAll";

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
      "Zuvius Lifesciences | Manufacturer of Widest Range of Anticancer Drugs | EU GMP & PIC/S Approved",

    description:
      "Zuvius Lifesciences - Manufacturer of widest range of anticancer drugs in the world with dedicated EU GMP & PIC/S approved facilities. Leading oncology pharmaceutical company delivering high-quality chemotherapy and cancer treatment solutions globally.",
  },

  /* =========================================================
     PRODUCTS
     ========================================================= */

  "/products": {
    title:
      "Anticancer Drugs & Pharmaceutical Products | Zuvius Lifesciences",

    description:
      "Explore the pharmaceutical product portfolio of Zuvius Lifesciences, including oncology, anticancer and nutraceutical products.",
  },

  "/products/oncoace": {
    title:
      "OncoAce | Anticancer & Oncology Products | Zuvius Lifesciences",

    description:
      "Explore the OncoAce portfolio of oncology and anticancer pharmaceutical products from Zuvius Lifesciences.",
  },

  "/products/nutrazeutica": {
    title:
      "Nutrazeutica | Nutraceutical Products | Zuvius Lifesciences",

    description:
      "Explore the Nutrazeutica portfolio of nutritional and supportive healthcare products from Zuvius Lifesciences.",
  },

  /* =========================================================
     ABOUT
     ========================================================= */

  "/aboutus": {
    title:
      "About Zuvius Lifesciences | Leading Oncology Pharmaceutical Company",

    description:
      "Learn about Zuvius Lifesciences, a global healthcare company headquartered in Mumbai, specializing in chemotherapeutic formulations and oncology care.",
  },

  /* =========================================================
     CONTACT
     ========================================================= */

  "/contact": {
    title:
      "Contact Zuvius Lifesciences | Oncology Pharmaceutical Company",

    description:
      "Contact Zuvius Lifesciences for enquiries about oncology products, anticancer medicines, partnerships and pharmaceutical solutions.",
  },

  /* =========================================================
     CAREERS
     ========================================================= */

  "/careers": {
    title:
      "Careers at Zuvius Lifesciences | Join Our Team",

    description:
      "Explore career opportunities at Zuvius Lifesciences and join a growing pharmaceutical company focused on oncology and healthcare.",
  },

  /* =========================================================
     NEWSROOM
     ========================================================= */

  "/newsroom": {
    title:
      "Newsroom | Zuvius Lifesciences",

    description:
      "Read the latest news, updates and developments from Zuvius Lifesciences.",
  },

  /* =========================================================
     BLOG
     ========================================================= */

  "/blog": {
    title:
      "Blog | Oncology & Pharmaceutical Insights | Zuvius Lifesciences",

    description:
      "Explore oncology insights, pharmaceutical developments, healthcare perspectives, research and company updates from Zuvius Lifesciences.",
  },

  /* =========================================================
     PRESS RELEASE
     ========================================================= */

  "/press-release": {
    title:
      "Press Releases | Zuvius Lifesciences",

    description:
      "Read official press releases and company announcements from Zuvius Lifesciences.",
  },

  /* =========================================================
     AWARDS
     ========================================================= */

  "/awards-recognition": {
    title:
      "Awards & Recognition | Zuvius Lifesciences",

    description:
      "Explore awards, certifications and recognition received by Zuvius Lifesciences.",
  },

  /* =========================================================
     EVENTS
     ========================================================= */

  "/events": {
    title:
      "Events | Zuvius Lifesciences",

    description:
      "Discover upcoming and past events, exhibitions and industry activities involving Zuvius Lifesciences.",
  },

  /* =========================================================
     CANCER AWARENESS
     ========================================================= */

  "/whatiscancer": {
    title:
      "What Is Cancer? | Cancer Awareness | Zuvius Lifesciences",

    description:
      "Learn about cancer, its basic concepts, treatment and the importance of cancer awareness with Zuvius Lifesciences.",
  },

  "/early-diagnosis": {
    title:
      "Early Cancer Diagnosis | Cancer Awareness | Zuvius Lifesciences",

    description:
      "Learn about the importance of early cancer diagnosis, awareness and timely medical attention.",
  },

  "/prevention": {
    title:
      "Cancer Prevention | Cancer Awareness | Zuvius Lifesciences",

    description:
      "Learn about cancer prevention, risk awareness and healthy practices with Zuvius Lifesciences.",
  },

  "/types-of-cancer": {
    title:
      "Types of Cancer | Cancer Information | Zuvius Lifesciences",

    description:
      "Explore information about different types of cancer and learn more about cancer awareness and care.",
  },

  /* =========================================================
     CSR
     ========================================================= */

  "/csr": {
    title:
      "Corporate Social Responsibility | Zuvius Lifesciences",

    description:
      "Explore the corporate social responsibility initiatives and community-focused activities of Zuvius Lifesciences.",
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

    const blog = blogs.find(
      (item) => item.slug === slug
    );

    if (blog) {
      return {
        title: blog.metaTitle,
        description: blog.metaDescription,
      };
    }

    return {
      title:
        "Blog | Zuvius Lifesciences",

      description:
        "Explore insights, articles and updates from Zuvius Lifesciences.",
    };
  }

  /* =========================================================
     Press release detail
     ========================================================= */

  if (/^\/press-release\/[^/]+\/?$/.test(pathname)) {
    return {
      title:
        "Press Release | Zuvius Lifesciences",

      description:
        "Read the latest press release and official company information from Zuvius Lifesciences.",
    };
  }

  /* =========================================================
     Event detail
     ========================================================= */

  if (/^\/events\/[^/]+\/?$/.test(pathname)) {
    return {
      title:
        "Event | Zuvius Lifesciences",

      description:
        "Explore event information, activities and updates from Zuvius Lifesciences.",
    };
  }

  /* =========================================================
     Cancer detail
     ========================================================= */

  if (/^\/types-of-cancer\/[^/]+\/?$/.test(pathname)) {
    return {
      title:
        "Cancer Information | Zuvius Lifesciences",

      description:
        "Learn more about cancer, its characteristics, awareness and related healthcare information.",
    };
  }

  /* =========================================================
     CSR detail
     ========================================================= */

  if (/^\/csr\/[^/]+(\/[^/]+)?\/?$/.test(pathname)) {
    return {
      title:
        "CSR Initiative | Zuvius Lifesciences",

      description:
        "Explore corporate social responsibility initiatives and activities by Zuvius Lifesciences.",
    };
  }

  /* =========================================================
     Unknown route
     ========================================================= */

  return {
    title:
      "Zuvius Lifesciences",

    description:
      "Zuvius Lifesciences is a pharmaceutical company specializing in oncology and healthcare products.",
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

    const baseUrl =
      "https://zuviuslifesciences.in";

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

    const setMeta = (
      attribute,
      value,
      content
    ) => {
      let element =
        document.head.querySelector(
          `meta[${attribute}="${value}"]`
        );

      if (!element) {
        element =
          document.createElement("meta");

        element.setAttribute(
          attribute,
          value
        );

        document.head.appendChild(element);
      }

      element.setAttribute(
        "content",
        content
      );
    };

    /* =======================================================
       Standard SEO
       ======================================================= */

    setMeta(
      "name",
      "description",
      seo.description
    );

    /* =======================================================
       Open Graph
       ======================================================= */

    setMeta(
      "property",
      "og:type",
      "website"
    );

    setMeta(
      "property",
      "og:url",
      canonicalUrl
    );

    setMeta(
      "property",
      "og:title",
      seo.title
    );

    setMeta(
      "property",
      "og:description",
      seo.description
    );

    setMeta(
      "property",
      "og:site_name",
      "Zuvius Lifesciences"
    );

    /* =======================================================
       Twitter / X
       ======================================================= */

    setMeta(
      "name",
      "twitter:card",
      "summary_large_image"
    );

    setMeta(
      "name",
      "twitter:url",
      canonicalUrl
    );

    setMeta(
      "name",
      "twitter:title",
      seo.title
    );

    setMeta(
      "name",
      "twitter:description",
      seo.description
    );

    /* =======================================================
       Canonical URL
       ======================================================= */

    let canonical =
      document.head.querySelector(
        'link[rel="canonical"]'
      );

    if (!canonical) {
      canonical =
        document.createElement("link");

      canonical.setAttribute(
        "rel",
        "canonical"
      );

      document.head.appendChild(
        canonical
      );
    }

    canonical.setAttribute(
      "href",
      canonicalUrl
    );
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

            <Route
              path="/"
              element={<Home />}
            />

            {/* =================================================
                PRODUCTS
            ================================================= */}

            <Route
              path="/products"
              element={<ProductMain />}
            />

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

            <Route
              path="/newsroom"
              element={<Newsroom />}
            />

            {/* =================================================
                BLOG
            ================================================= */}

            <Route
              path="/blog"
              element={<Blog />}
            />

            <Route path="/blog/all" element={<BlogAll />} />

            <Route
              path="/blog/:slug"
              element={<BlogDetail />}
            />

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

            <Route
              path="/contact"
              element={<Contact />}
            />

            {/* =================================================
                CAREERS
            ================================================= */}

            <Route
              path="/careers"
              element={<Careers />}
            />

            {/* =================================================
                EVENTS
            ================================================= */}

            <Route
              path="/events"
              element={<Events />}
            />

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

            <Route
              path="/aboutus"
              element={<AboutUs />}
            />

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

            <Route
              path="/csr"
              element={<CSR />}
            />

            <Route
              path="/csr/:slug"
              element={<CSRDetail />}
            />

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