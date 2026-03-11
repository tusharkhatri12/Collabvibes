import React from "react";
import "./ServiceDetails.css";

function ServiceDetails() {
  return (
    <section className="service-details">

      <div className="service-row">

        <div className="service-text">
          <h2>Hire Pre-Vetted Global Talent</h2>

          <p>
            Access top engineers, designers, product managers and operations
            professionals from a curated global talent pool.
          </p>

          <ul>
            <li>✔ Pre-screened candidates</li>
            <li>✔ Fast hiring process</li>
            <li>✔ Remote-ready professionals</li>
          </ul>
        </div>

        <div className="service-image">
          <img
            src="https://images.unsplash.com/photo-1552664730-d307ca884978"
            alt=""
          />
        </div>

      </div>



      <div className="service-row reverse">

        <div className="service-text">
          <h2>Global Payroll & Compliance</h2>

          <p>
            Pay international teams seamlessly with automated payroll,
            tax handling and employment compliance.
          </p>

          <ul>
            <li>✔ Multi-currency payroll</li>
            <li>✔ Tax & legal compliance</li>
            <li>✔ International contracts</li>
          </ul>
        </div>

        <div className="service-image">
          <img
            src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c"
            alt=""
          />
        </div>

      </div>

    </section>
  );
}

export default ServiceDetails;