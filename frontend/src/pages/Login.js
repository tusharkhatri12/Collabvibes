import { useState } from "react";
import "./Login.css";

function Login() {

const [email,setEmail] = useState("");
const [password,setPassword] = useState("");
const [error,setError] = useState("");

const handleSubmit = (e) => {
e.preventDefault();

if(!email || !password){
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

setError("");
alert("Login successful (backend not connected)");
};

return(

<section className="auth">

<div className="auth-card">

<h2>
Welcome <span className="gradient-word">Back</span>
</h2>

<p className="auth-sub">
Sign in to access your dashboard.
</p>

<form className="auth-form" onSubmit={handleSubmit}>

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

{error && <div className="auth-error">{error}</div>}

<button className="auth-btn">
Sign In
</button>

</form>

<p className="auth-switch">
Don't have an account? <a href="/signup">Create account</a>
</p>

</div>

</section>

);

}

export default Login;