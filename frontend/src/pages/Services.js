import "./ServicesPage.css";

function Services(){

return(

<section className="services">

<h2>
Our <span className="gradient-word">Services</span>
</h2>

<p className="services-sub">
We help companies build and manage operational teams across India
with hiring, payroll automation and compliance management.
</p>

<div className="services-grid">

<div className="service-card">

<h3>Talent Hiring</h3>

<p>
We help companies hire verified professionals across India including
operations executives, developers, designers and support staff.
Our hiring network spans major cities and emerging talent hubs,
allowing businesses to scale teams quickly without lengthy recruitment cycles.
</p>

</div>


<div className="service-card">

<h3>Payroll Management</h3>

<p>
Automate salary payments, tax deductions and payroll compliance.
Our payroll system ensures timely salary disbursement while handling
statutory deductions and documentation required for Indian employment
regulations.
</p>

</div>


<div className="service-card">

<h3>Operations Dashboard</h3>

<p>
Track hiring progress, team performance and operational insights from
a unified dashboard. Managers can monitor employee productivity,
team growth and payroll status in real time.
</p>

</div>


<div className="service-card">

<h3>Compliance & Documentation</h3>

<p>
Stay compliant with Indian labour laws, employee contracts and
documentation requirements. Our platform simplifies regulatory
processes so companies can focus on scaling operations instead
of managing paperwork.
</p>

</div>

</div>

</section>

);

}

export default Services;