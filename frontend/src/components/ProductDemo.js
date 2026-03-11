import React from "react";
import "./ProductDemo.css";
import DashboardGraph from "./DashboardGraph";
import Tilt from "react-parallax-tilt";
function ProductDemo(){

 return(
<Tilt>
  <div className="dashboard">
    
   <div className="dashboard-header">
    <span>Global Hiring Dashboard</span>
   </div>

   <div className="dashboard-stats">

    <div className="stat-box">
     <h3>245</h3>
     <p>Candidates</p>
    </div>

    <div className="stat-box">
     <h3>18</h3>
     <p>Countries</p>
    </div>

    <div className="stat-box">
     <h3>52</h3>
     <p>Active Teams</p>
    </div>

   </div>
   <div className="dashboard-graph">
 <DashboardGraph/>
</div>
<div className="activity">

 <h4>Recent Activity</h4>

 <ul>
  <li>✔ John hired (Backend Dev)</li>
  <li>✔ Payroll processed (April)</li>
  <li>✔ 3 candidates shortlisted</li>
 </ul>

</div>

   <div className="dashboard-pipeline">

    <h4>Hiring Pipeline</h4>

    <ul>
     <li>Interview Stage</li>
     <li>Offer Sent</li>
     <li>Onboarding</li>
    </ul>

   </div>

  </div>
</Tilt>
 );

}

export default ProductDemo;