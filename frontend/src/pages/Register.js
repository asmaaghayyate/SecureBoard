import React, { useContext, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import "./Register.css";

function Register() {
  const { register } = useContext(AuthContext);
  const navigate = useNavigate();
  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [role,setRole] = useState("user");

  const handleSubmit = (e) => {
    e.preventDefault();
    const success = register(name,email,password,role);
    if(success) navigate("/dashboard");
    else alert("Email already exists!");
  }

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Register</h2>
        <input placeholder="Name" value={name} onChange={e=>setName(e.target.value)} required/>
        <input type="email" placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} required/>
        <input type="password" placeholder="Password" value={password} onChange={e=>setPassword(e.target.value)} required/>
        <select value={role} onChange={e=>setRole(e.target.value)}>
          <option value="user">User</option>
          <option value="manager">Manager</option>
          <option value="admin">Admin</option>
        </select>
        <button type="submit">Register</button>
        <p>Already have account? <Link to="/login">Login</Link></p>
      </form>
    </div>
  )
}

export default Register;
