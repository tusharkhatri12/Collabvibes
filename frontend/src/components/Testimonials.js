import React from "react";
import "./Testimonials.css";

function Testimonials(){

 return(

  <section className="testimonials">

   <h2>What Our Clients Say</h2>

   <div className="testimonial-grid">

    <div className="testimonial-card">
     <p>
      IcebergOS helped us hire developers in less than 2 weeks.
     </p>

     <h4>— Sarah Johnson</h4>
     <span>CTO, TechFlow</span>
    </div>

    <div className="testimonial-card">
     <p>
      Managing international payroll became incredibly easy.
     </p>

     <h4>— Michael Lee</h4>
     <span>Founder, GrowthLab</span>
    </div>

    <div className="testimonial-card">
     <p>
      The best outsourcing partner we've worked with.
     </p>

     <h4>— David Carter</h4>
     <span>CEO, CloudScale</span>
    </div>

   </div>

  </section>

 );

}

export default Testimonials;