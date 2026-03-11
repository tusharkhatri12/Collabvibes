import React from "react";
import "./PricingCards.css";

function PricingCards(){

 return(

  <section className="pricing">

   <h2>Simple Pricing</h2>

   <div className="pricing-grid">

    <div className="price-card">

     <h3>Starter</h3>

     <p className="price">$99/mo</p>

     <ul>
      <li>Global Hiring</li>
      <li>Email Support</li>
      <li>Basic Payroll</li>
     </ul>

     <button>Get Started</button>

    </div>

    <div className="price-card popular">

     <h3>Growth</h3>

     <p className="price">$299/mo</p>

     <ul>
      <li>Everything in Starter</li>
      <li>Advanced Payroll</li>
      <li>Compliance Management</li>
     </ul>

     <button>Start Free Trial</button>

    </div>

    <div className="price-card">

     <h3>Enterprise</h3>

     <p className="price">Custom</p>

     <ul>
      <li>Dedicated Team</li>
      <li>Accounting Services</li>
      <li>24/7 Support</li>
     </ul>

     <button>Contact Sales</button>

    </div>

   </div>

  </section>

 );

}

export default PricingCards;