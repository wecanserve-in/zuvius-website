import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

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
import WhatIsCancer from "./whatiscancer/WhatIsCancer";
import EarlyDiagnosis from "./earlydiagnosis/EarlyDiagnosis";
import AboutUs from "./about-us/about-us";
import Prevention from "./prevention/Prevention"; 
import TypesOfCancer from "./types/TypesOfCancer";
import CancerDetail from "./cancerdetails";
import CSR from "./csr/csr";
import ScrollToTop from "./components/ScrollToTop";
import "./App.css";

import PressReleaseDetails from "./media/PressReleaseDetails";

function App() {
  return (
    <Router>
    <ScrollToTop />

      <div className="App">
        <Navbar />

        <main>
          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/products" element={<ProductMain />} />
            <Route path="/products/:category" element={<ProductCategory />} />
            <Route path="/products/:category/:slug" element={<ProductDetail />} />

            <Route path="/newsroom" element={<Newsroom />} />
            <Route path="/press-release" element={<PressRelease />} />
            <Route
  path="/press-release/:id"
  element={<PressReleaseDetails />}
/>

            <Route path="/awards-recognition" element={<Awards />} />

            <Route path="/contact" element={<Contact />} /> 
            <Route path="/careers" element={<Careers />} />
            <Route path="/events" element={<Events />}/>
            <Route path="/whatiscancer" element={<WhatIsCancer />}/>
            <Route path="/aboutus" element={<AboutUs />}/>
            <Route path="/early-diagnosis" element={<EarlyDiagnosis/>}/>
            <Route path="/prevention" element={<Prevention/>}/>
            <Route path="/types-of-cancer" element={<TypesOfCancer/>}/>
            <Route path="/types-of-cancer/:slug" element={<CancerDetail />} />
            <Route path="/csr" element={<CSR/>}/>
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;