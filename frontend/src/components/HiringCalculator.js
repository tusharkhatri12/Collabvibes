import React, { useState } from "react";
import "./HiringCalculator.css";

function HiringCalculator(){

const [developers,setDevelopers] = useState(1);

const costPerDev = 90000; // ₹ per developer

const totalCost = developers * costPerDev;

return(

<section className="calculator-section">

<div className="calculator-card">

<h2>
Estimate Your <span className="gradient-text">Hiring Cost</span>
</h2>

<p className="calc-subtext">
Quickly calculate the monthly cost of building your team across India.
</p>

<div className="slider-wrapper">

<label>Number of Developers</label>

<input
type="range"
min="1"
max="20"
value={developers}
onChange={(e)=>setDevelopers(e.target.value)}
className="slider"
/>

</div>

<div className="calc-result">

<h3>{developers} Developers</h3>

<h1 className="gradient-text">
₹ {totalCost.toLocaleString()} / month
</h1>

<p className="calc-note">
Includes hiring support, payroll automation and compliance management.
</p>

</div>

</div>

</section>

);

}

export default HiringCalculator;