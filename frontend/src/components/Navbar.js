import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar({ variant = "dark" }) {

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className={`navbar ${variant}`}>

      {/* Logo */}
      <Link to="/" className="logo">
  Collabvibes
</Link>
      {/* Navigation Links */}
      <div className={`nav-links ${menuOpen ? "open" : ""}`}>

        <a href="/">Home</a>
        <a href="/services">Services</a>
        <a href="/pricing">Pricing</a>
        <a href="/careers">Careers</a>
        <a href="/contact">Contact</a>

        <button className="login-btn">Login</button>
        <button className="signup-btn">Sign Up</button>

      </div>

      {/* Hamburger Menu */}
      <div className="hamburger" onClick={toggleMenu}>

        <span></span>
        <span></span>
        <span></span>

      </div>

    </nav>
  );
}

export default Navbar;