import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import WhoWeAre from "./pages/who_we_are";
import Services from "./pages/Services";
import Careers from "./pages/Career";
import GetQuote from "./pages/Getquote";
import Footer from "./pages/Footer"; // adjust path if needed
import ScrollToTop from "./components/Scrollertop";
import Apply from "./pages/Apply";

function App() {
  return (
    <Router>
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<WhoWeAre />} />
        <Route path="/services" element={<Services />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/quote" element={<GetQuote />} />
        <Route path="/apply" element={<Apply />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;