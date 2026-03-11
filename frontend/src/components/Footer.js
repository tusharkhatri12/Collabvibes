import React from "react";
import "./Footer.css";

function Footer(){
 return(

  <footer className="footer">

   <div className="footer-logo">
    Collabvibes
   </div>

   <div className="footer-links">
    <a href="/">Home</a>
    <a href="/services">Services</a>
    <a href="/pricing">Pricing</a>
    <a href="/contact">Contact</a>
   </div>

   <p className="copyright">
    © 2026 Collabvibes. All rights reserved.
   </p>

  </footer>

 );
}

export default Footer;