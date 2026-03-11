import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Contact(){

 return(

  <>
   <Navbar variant="light"/>

   <section className="contact">

    <h1>Contact Us</h1>

    <p>
     Have questions? Our team is here to help.
    </p>

    <form className="contact-form">

     <input type="text" placeholder="Name"/>

     <input type="email" placeholder="Email"/>

     <textarea placeholder="Message"></textarea>

     <button>Send Message</button>

    </form>

   </section>

   <Footer/>
  </>

 );
}

export default Contact;