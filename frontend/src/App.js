import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import ScrollProgress from "./components/ScrollProgress";

import Home from "./pages/Home";
import Services from "./pages/Services";
import Pricing from "./pages/Pricing";
import Careers from "./pages/Careers";
import Contact from "./pages/Contact";

function App() {
  return (
    <BrowserRouter>

      <ScrollProgress />

      <AnimatePresence mode="wait">

        <Routes>

          <Route path="/" element={<Home />} />

          <Route path="/services" element={<Services />} />

          <Route path="/pricing" element={<Pricing />} />

          <Route path="/careers" element={<Careers />} />

          <Route path="/contact" element={<Contact />} />

        </Routes>

      </AnimatePresence>

    </BrowserRouter>
  );
}

export default App;