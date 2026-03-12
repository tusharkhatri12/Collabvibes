import "./Services.css";

function Services(){

return(

<section className="services">

<div className="services-header">

<h2>
Powerful <span className="gradient-word">Services</span> for Modern Teams
</h2>

<p>
Everything you need to hire, manage and scale teams across India with automation and intelligent workflows.
</p>

</div>

{/* SERVICE 1 */}

<div className="service-row">

<div className="service-text">

<span className="service-tag">SERVICE 01</span>

<h3>Hire Across India</h3>

<p>
Access a curated pool of verified professionals across major Indian cities. 
Our platform helps companies hire developers, designers and operations talent 
faster while ensuring background verification and skill validation.
</p>

<ul>
<li>✔ Verified talent network</li>
<li>✔ Faster hiring pipeline</li>
<li>✔ Talent from 25+ cities</li>
</ul>

</div>

<div className="service-card">

<div className="service-icon">👥</div>

<h4>Talent Hiring</h4>

<p>Smart recruitment dashboard</p>

</div>

</div>

{/* SERVICE 2 */}

<div className="service-row reverse">

<div className="service-text">

<span className="service-tag">SERVICE 02</span>

<h3>Automated Payroll</h3>

<p>
Simplify payroll operations with automated salary processing, tax deductions 
and compliance reporting tailored for Indian businesses.
</p>

<ul>
<li>✔ Salary automation</li>
<li>✔ TDS & compliance</li>
<li>✔ Payslip generation</li>
</ul>

</div>

<div className="service-card">

<div className="service-icon">💰</div>

<h4>Payroll Engine</h4>

<p>Automated salary system</p>

</div>

</div>

{/* SERVICE 3 */}

<div className="service-row">

<div className="service-text">

<span className="service-tag">SERVICE 03</span>

<h3>Operations Dashboard</h3>

<p>
Track employee performance, hiring metrics and productivity insights in 
a centralized operations dashboard designed for growing teams.
</p>

<ul>
<li>✔ Employee analytics</li>
<li>✔ Hiring metrics</li>
<li>✔ Productivity insights</li>
</ul>

</div>

<div className="service-card">

<div className="service-icon">📊</div>

<h4>Team Analytics</h4>

<p>Operations insights dashboard</p>

</div>

</div>

</section>

);

}

export default Services;