import "./Footer.css";
import { Link } from "react-router-dom";
import { FaInstagram, FaYoutube, FaLinkedin, FaXTwitter } from "react-icons/fa6";

function Footer() {

return (

<footer className="footer">

{/* Animated Glow Background */}
<div className="footer-glow"></div>

<div className="footer-container">

{/* BRAND SECTION */}

<div className="footer-brand">

<h2 className="footer-logo">Collabvibes</h2>

<p>
Build and manage your team across India with powerful hiring,
payroll and compliance tools designed for modern companies.
</p>

<div className="footer-social">

<a href="https://x.com" target="_blank" rel="noreferrer">
<FaXTwitter />
</a>

<a href="https://linkedin.com" target="_blank" rel="noreferrer">
<FaLinkedin />
</a>

<a href="https://instagram.com" target="_blank" rel="noreferrer">
<FaInstagram />
</a>

<a href="https://youtube.com" target="_blank" rel="noreferrer">
<FaYoutube />
</a>

</div>

</div>

{/* PRODUCT LINKS */}

<div className="footer-links">

<h4>Product</h4>

<Link to="/services">Services</Link>
<Link to="/pricing">Pricing</Link>
<Link to="/careers">Careers</Link>
<Link to="/contact">Contact</Link>

</div>

{/* COMPANY LINKS */}

<div className="footer-links">

<h4>Company</h4>

<a href="#">About</a>
<a href="#">Blog</a>
<a href="#">Partners</a>
<a href="#">Careers</a>

</div>

{/* NEWSLETTER */}

<div className="footer-newsletter">

<h4>Stay Updated</h4>

<p>
Get updates about hiring trends, payroll automation and startup growth.
</p>

<div className="newsletter-form">

<input
type="email"
placeholder="Your email"
/>

<button>
Subscribe
</button>

</div>

</div>

</div>

{/* FOOTER BOTTOM */}

<div className="footer-bottom">

<p>
© {new Date().getFullYear()} Collabvibes. All rights reserved.
</p>

<div className="footer-bottom-links">

<a href="#">Privacy</a>
<a href="#">Terms</a>
<a href="#">Security</a>

</div>

</div>

</footer>

);

}

export default Footer;