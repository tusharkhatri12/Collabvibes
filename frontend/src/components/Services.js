import React from "react";
import { FaGlobe, FaMoneyBillWave, FaChartLine, FaBalanceScale } from "react-icons/fa";
import "./Services.css";

function Services() {

  return (
    <section className="services">

      <h2 className="section-title">
        Everything You Need to Build a Global Team
      </h2>

      <p className="section-subtitle">
        From hiring to payroll and compliance — manage your global workforce
        from a single platform.
      </p>

      <div className="service-grid">

        <div className="service-card">
          <FaGlobe className="service-icon"/>

          <h3>Hire Global Talent</h3>

          <p>
            Access a curated network of developers, designers and operators
            across 50+ countries in days instead of months.
          </p>
        </div>


        <div className="service-card">
          <FaMoneyBillWave className="service-icon"/>

          <h3>Automated Global Payroll</h3>

          <p>
            Pay international teams seamlessly with automated payroll,
            tax calculations and multi-currency support.
          </p>
        </div>


        <div className="service-card">
          <FaChartLine className="service-icon"/>

          <h3>Hiring Analytics</h3>

          <p>
            Track hiring pipelines, candidate progress and team growth
            with real-time analytics dashboards.
          </p>
        </div>


        <div className="service-card">
          <FaBalanceScale className="service-icon"/>

          <h3>Compliance Management</h3>

          <p>
            Stay compliant with employment laws, contracts and tax
            regulations across multiple countries.
          </p>
        </div>

      </div>

    </section>
  );
}

export default Services;