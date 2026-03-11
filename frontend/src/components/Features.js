import React from "react";
import { FaRobot, FaGlobe, FaChartLine, FaShieldAlt } from "react-icons/fa";
import "./Features.css";
import { motion } from "framer-motion";

function Features() {
  return (
    <motion.section
     className="features">

      <h2 className="section-title">
        Powerful Platform Features
      </h2>

      <div className="feature-grid">

        <div className="feature-card">
          <FaRobot className="feature-icon"/>
          <h3>AI Talent Matching</h3>
          <p>
            Our AI recommends the best candidates based on skills, salary,
            and location.
          </p>
        </div>

        <div className="feature-card">
          <FaGlobe className="feature-icon"/>
          <h3>Global Hiring</h3>
          <p>
            Hire employees and contractors from more than 50 countries.
          </p>
        </div>

        <div className="feature-card">
          <FaChartLine className="feature-icon"/>
          <h3>Hiring Analytics</h3>
          <p>
            Track hiring pipeline, conversion rates, and team growth.
          </p>
        </div>

        <div className="feature-card">
          <FaShieldAlt className="feature-icon"/>
          <h3>Compliance Tools</h3>
          <p>
            Stay compliant with international employment laws automatically.
          </p>
        </div>

      </div>

    </motion.section>
  );
}

export default Features;