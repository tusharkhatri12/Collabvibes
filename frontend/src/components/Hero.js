import React from "react";
import { motion } from "framer-motion";
import "./Hero.css";
import ProductDemo from "./ProductDemo";
function Hero() {
  return (
    <section className="hero">

      <motion.div
        className="hero-left"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1>
          Build Your Global Team
          <span className="gradient-text"> Without The Headache</span>
        </h1>

        <p>
          Hire offshore talent, manage payroll, and scale your operations
          globally with IcebergOS.
        </p>

        <div className="hero-buttons">
          <button className="primary-btn">Hire Talent</button>
          <button className="secondary-btn">Book Demo</button>
        </div>
      </motion.div>

      <motion.div
        className="hero-right"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
       <div className="hero-right">
 <ProductDemo/>
</div>
      </motion.div>

    </section>
  );
}

export default Hero;