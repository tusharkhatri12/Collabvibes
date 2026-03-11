import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PricingCards from "../components/PricingCards";

function Pricing() {

  return (
    <>
      <Navbar variant="light"/>

      <section style={{padding:"120px 80px", textAlign:"center"}}>
        <h1>Pricing</h1>
        <p>Simple and transparent pricing for global teams.</p>
      </section>

      <PricingCards/>

      <Footer/>
    </>
  );
}

export default Pricing;