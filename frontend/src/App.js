import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import ScrollProgress from "./components/ScrollProgress";
import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Services from "./pages/Services";
import Pricing from "./pages/Pricing";
import Careers from "./pages/Careers";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

function App() {
  return (
    <BrowserRouter>
<Navbar/>
      <ScrollProgress />

      <AnimatePresence mode="wait">

        <Routes>

          <Route path="/" element={<Home />} />

          <Route path="/services" element={<Services />} />

          <Route path="/pricing" element={<Pricing />} />

          <Route path="/careers" element={<Careers />} />

          <Route path="/contact" element={<Contact />} />
         
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

        </Routes>

      </AnimatePresence>

    </BrowserRouter>
  );
}

export default App;