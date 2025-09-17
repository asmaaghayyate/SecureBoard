import React, { useContext, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import "./Login.css";

function Login() {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const success = login(email,password);
    if(success) navigate("/dashboard");
    else alert("Email or Password incorrect!");
  }

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Login</h2>
        <input type="email" placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} required/>
        <input type="password" placeholder="Password" value={password} onChange={e=>setPassword(e.target.value)} required/>
        <button type="submit">Login</button>
        <p>Don't have account? <Link to="/register">Register</Link></p>
      </form>
    </div>
  )
}

export default Login;
