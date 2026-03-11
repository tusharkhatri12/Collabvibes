import React from "react";
import "./Navbar.css";

function Navbar({ variant = "dark" }) {

  return (
    <nav className={`navbar ${variant}`}>

      <div className="logo">
        Collabvibes
      </div>

      <div className="nav-links">
        <a href="/">Home</a>
        <a href="/services">Services</a>
        <a href="/pricing">Pricing</a>
        <a href="/careers">Careers</a>
        <a href="/contact">Contact</a>
      </div>
      <div className="nav-actions">

  <button className="login-btn">
    Login
  </button>

  <button className="signup-btn">
    Sign Up
  </button>

</div>

      <button className="demo-btn">
        Book Demo
      </button>

    </nav>
  );
}

export default Navbar;