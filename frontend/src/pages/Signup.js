import { useState } from "react";
import "./Signup.css";

function Signup() {

const [name,setName] = useState("");
const [email,setEmail] = useState("");
const [password,setPassword] = useState("");
const [confirmPassword,setConfirmPassword] = useState("");

const [error,setError] = useState("");

const handleSubmit = (e) => {
e.preventDefault();

if(!name || !email || !password || !confirmPassword){
setError("All fields are required");
return;
}

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if(!emailRegex.test(email)){
setError("Please enter a valid email");
return;
}

if(password.length < 6){
setError("Password must be at least 6 characters");
return;
}

if(password !== confirmPassword){
setError("Passwords do not match");
return;
}

setError("");
alert("Signup successful (backend not connected)");
};

return(

<section className="auth">

<div className="auth-card">

<h2>
Create <span className="gradient-word">Account</span>
</h2>

<p className="auth-sub">
Start building your team with our platform.
</p>

<form className="auth-form" onSubmit={handleSubmit}>

<input
type="text"
placeholder="Full Name"
value={name}
onChange={(e)=>setName(e.target.value)}
/>

<input
type="email"
placeholder="Email address"
value={email}
onChange={(e)=>setEmail(e.target.value)}
/>

<input
type="password"
placeholder="Password"
value={password}
onChange={(e)=>setPassword(e.target.value)}
/>

<input
type="password"
placeholder="Confirm Password"
value={confirmPassword}
onChange={(e)=>setConfirmPassword(e.target.value)}
/>

{error && <div className="auth-error">{error}</div>}

<button className="auth-btn">
Create Account
</button>

</form>

<p className="auth-switch">
Already have an account? <a href="/login">Sign in</a>
</p>

</div>

</section>

);

}

export default Signup;