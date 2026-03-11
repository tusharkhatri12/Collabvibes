import React, { useState } from "react";
import "./HiringCalculator.css";

function HiringCalculator(){

 const [developers,setDevelopers] = useState(1);

 const costPerDev = 4000;
 const totalCost = developers * costPerDev;

 return(

  <section className="calculator">

   <h2>Estimate Your Hiring Cost</h2>

   <label>Number of Developers</label>

   <input
    type="range"
    min="1"
    max="20"
    value={developers}
    onChange={(e)=>setDevelopers(e.target.value)}
   />

   <h3>{developers} Developers</h3>

   <p className="cost">${totalCost}/month</p>

  </section>

 );

}

export default HiringCalculator;