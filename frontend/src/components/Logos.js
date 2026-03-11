import React from "react";
import "./Logos.css";

function Logos(){

 return(

  <section className="logos">

   <div className="logo-track">

    <img src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" alt=""/>
    <img src="https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg" alt=""/>
    <img src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Stripe_Logo%2C_revised_2016.svg" alt=""/>
    <img src="https://upload.wikimedia.org/wikipedia/commons/b/b9/Slack_Technologies_Logo.svg" alt=""/>
    <img src="https://upload.wikimedia.org/wikipedia/commons/9/9d/Shopify_logo.svg" alt=""/>

    {/* repeat for infinite loop */}

    <img src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" alt=""/>
    <img src="https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg" alt=""/>
    <img src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Stripe_Logo%2C_revised_2016.svg" alt=""/>

   </div>

  </section>

 );
}

export default Logos;