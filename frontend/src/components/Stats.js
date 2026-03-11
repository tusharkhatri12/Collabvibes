import React from "react";
import CountUp from "react-countup";
import "./Stats.css";

function Stats(){

 return(

  <section className="stats">

   <div className="stat">
    <h2><CountUp end={500} duration={2}/>+</h2>
    <p>Clients Worldwide</p>
   </div>

   <div className="stat">
    <h2><CountUp end={10000} duration={2}/>+</h2>
    <p>Candidates Hired</p>
   </div>

   <div className="stat">
    <h2><CountUp end={20} duration={2}/>+</h2>
    <p>Countries Served</p>
   </div>

   <div className="stat">
    <h2><CountUp end={98} duration={2}/>%</h2>
    <p>Client Satisfaction</p>
   </div>

  </section>

 );

}

export default Stats;