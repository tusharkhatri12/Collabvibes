import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

function Navbar(){

const [menuOpen,setMenuOpen] = useState(false);
const [scrolled,setScrolled] = useState(false);

const location = useLocation();

const isHome = location.pathname === "/";

useEffect(()=>{

const handleScroll = () =>{

if(window.scrollY > 50){
setScrolled(true);
}else{
setScrolled(false);
}

};

window.addEventListener("scroll",handleScroll);

return () => window.removeEventListener("scroll",handleScroll);

},[]);

return(

<nav
className={`navbar 
${isHome && !scrolled ? "navbar-transparent" : "navbar-solid"}
`}
>

<div className="nav-container">

<Link to="/" className="logo">
Collabvibes
</Link>

<div className={`nav-links ${menuOpen ? "open" : ""}`}>

<Link to="/">Home</Link>
<Link to="/services">Services</Link>
<Link to="/pricing">Pricing</Link>
<Link to="/careers">Careers</Link>
<Link to="/contact">Contact</Link>

</div>

<div className="nav-buttons">

<Link to="/login" className="login-btn">
Login
</Link>

<Link to="/signup" className="signup-btn">
Sign Up
</Link>

</div>

<div
className="hamburger"
onClick={()=>setMenuOpen(!menuOpen)}
>

<span></span>
<span></span>
<span></span>

</div>

</div>

</nav>

);

}

export default Navbar;