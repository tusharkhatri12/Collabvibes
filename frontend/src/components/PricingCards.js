import "./PricingCards.css";

function Pricing() {

return(

<section className="pricing">

<h2>
Simple <span className="gradient-word">Pricing</span>
</h2>

<p className="pricing-sub">
Transparent pricing built for Indian startups and growing businesses.
</p>

<div className="pricing-grid">


<div className="pricing-card">

<h3>Starter</h3>

<div className="price">₹2,999<span>/mo</span></div>

<ul>
<li>Hire up to 5 employees</li>
<li>Basic payroll automation</li>
<li>Email support</li>
<li>Operations dashboard</li>
</ul>

<button className="pricing-btn">
Get Started
</button>

</div>



<div className="pricing-card highlight">

<h3>Growth</h3>

<div className="price">₹8,999<span>/mo</span></div>

<ul>
<li>Hire up to 25 employees</li>
<li>Advanced payroll automation</li>
<li>Compliance management</li>
<li>Priority support</li>
</ul>

<button className="pricing-btn">
Start Free Trial
</button>

</div>



<div className="pricing-card">

<h3>Enterprise</h3>

<div className="price">Custom</div>

<ul>
<li>Unlimited employees</li>
<li>Dedicated support team</li>
<li>Full compliance management</li>
<li>Custom integrations</li>
</ul>

<button className="pricing-btn">
Contact Sales
</button>

</div>


</div>

</section>

);

}

export default Pricing;