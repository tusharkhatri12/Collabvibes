import React from "react";
import Navbar from "../components/Navbar";

function Signup(){

 return(

  <>
   <Navbar variant="light"/>

   <div className="auth-page">

    <h1>Create Account</h1>

    <input placeholder="Name"/>

    <input placeholder="Email"/>

    <input type="password" placeholder="Password"/>

    <button>Create Account</button>

   </div>

  </>

 );

}

export default Signup;