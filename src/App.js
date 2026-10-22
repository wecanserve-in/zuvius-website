import React, { lazy, Suspense } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import Home from "./home/home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import LanguageSwitcher from "./components/LanguageSwitcher";
import { STATIC_PAGES } from "./seo/seoConfig";
import useSEO from "./seo/useSEO";

import "./App.css";

// Every page except the homepage is loaded only when a visitor opens it,
// so nobody downloads the code for the whole website up front.
const ProductMain = lazy(() => import("./products/productmain"));
const ProductCategory = lazy(() => import("./products/productcategory"));
const ProductDetail = lazy(() => import("./products/productdetail"));
const Newsroom = lazy(() => import("./media/newsroom"));
const PressRelease = lazy(() => import("./media/pressrelease"));
const PressReleaseDetails = lazy(() => import("./media/PressReleaseDetails"));
const Awards = lazy(() => import("./awards/awards"));
const Careers = lazy(() => import("./careers/careers"));
const Contact = lazy(() => import("./contact/contact"));
const Events = lazy(() => import("./events/events"));
const EventDetail = lazy(() => import("./events/EventDetail"));
const WhatIsCancer = lazy(() => import("./whatiscancer/WhatIsCancer"));
const EarlyDiagnosis = lazy(() => import("./earlydiagnosis/EarlyDiagnosis"));
const AboutUs = lazy(() => import("./about-us/about-us"));
const Prevention = lazy(() => import("./prevention/Prevention"));
const TypesOfCancer = lazy(() => import("./types/TypesOfCancer"));
const CancerDetail = lazy(() => import("./cancerdetails"));
const CSR = lazy(() => import("./csr/csr"));
const CSRDetail = lazy(() => import("./csr/CSRDetail"));
const Blog = lazy(() => import("./blog/Blog"));
const BlogDetail = lazy(() => import("./blog/BlogDetail"));
const NotFound = lazy(() => import("./components/NotFound"));

/*
 * Titles for fixed pages. Detail pages (products, cancer guides, blogs, events,
 * press releases, CSR) set their own from src/seo/seoConfig.js.
 */
const SEOManager = () => {
  const location = useLocation();
  const pathname = location.pathname.replace(/\/+$/, "") || "/";
  const seo = STATIC_PAGES[pathname];
  useSEO(seo ? { ...seo, path: pathname } : null);
  return null;
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <SEOManager />

      <div className="App">
        <Navbar />

        {/* Global floating switcher positioned right below navbar */}
        <LanguageSwitcher />

        <main>
          <Suspense fallback={<div style={{ minHeight: "100vh" }} />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<ProductMain />} />
              <Route path="/products/:category" element={<ProductCategory />} />
              <Route path="/products/:category/:slug" element={<ProductDetail />} />
              <Route path="/newsroom" element={<Newsroom />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:slug" element={<BlogDetail />} />
              <Route path="/press-release" element={<PressRelease />} />
              <Route path="/press-release/:id" element={<PressReleaseDetails />} />
              <Route path="/awards-recognition" element={<Awards />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/careers" element={<Careers />} />
              <Route path="/events" element={<Events />} />
              <Route path="/events/:slug" element={<EventDetail />} />
              <Route path="/whatiscancer" element={<WhatIsCancer />} />
              <Route path="/aboutus" element={<AboutUs />} />
              <Route path="/early-diagnosis" element={<EarlyDiagnosis />} />
              <Route path="/prevention" element={<Prevention />} />
              <Route path="/types-of-cancer" element={<TypesOfCancer />} />
              <Route path="/types-of-cancer/:slug" element={<CancerDetail />} />
              <Route path="/csr" element={<CSR />} />
              <Route path="/csr/:slug" element={<CSRDetail />} />
              <Route path="/csr/:slug/:eventSlug" element={<CSRDetail />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
