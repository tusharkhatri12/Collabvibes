import React from "react";
import Navbar from "../components/Navbar";

function Login(){

 return(

  <>
   <Navbar variant="light"/>

   <div className="auth-page">

    <h1>Login</h1>

    <input placeholder="Email"/>

    <input type="password" placeholder="Password"/>

    <button>Login</button>

   </div>

  </>

 );

}

export default Login;