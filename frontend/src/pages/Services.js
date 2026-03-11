import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Services from "../components/Services";
import ServiceDetails from "../components/ServiceDetails";
import "./ServicesPage.css";

function ServicesPage() {
  return (
    <>
      <Navbar variant="light" />

      <section className="services-hero">
        <h1>Global Hiring & Outsourcing Solutions</h1>
        <p>
          We help companies hire, manage and scale global teams with recruitment,
          payroll and compliance solutions.
        </p>
      </section>

      <Services />

      <ServiceDetails />

      <Footer />
    </>
  );
}

export default ServicesPage;