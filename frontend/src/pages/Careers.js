import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Careers() {

  return (
    <>
      <Navbar variant="light"/>

      <section className="careers">

        <h1>Join Our Team</h1>

        <p>
          We're building the future of global hiring.
        </p>

        <div className="job-list">

          <div className="job-card">
            <h3>Frontend Developer</h3>
            <p>Remote • Full Time</p>
            <button>Apply</button>
          </div>

          <div className="job-card">
            <h3>Backend Engineer</h3>
            <p>Remote • Full Time</p>
            <button>Apply</button>
          </div>

          <div className="job-card">
            <h3>Product Designer</h3>
            <p>Remote • Full Time</p>
            <button>Apply</button>
          </div>

        </div>

      </section>

      <Footer/>
    </>
  );
}

export default Careers;