import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Auth.css";

export default function Auth({ onClose }) {
  const [showLogin, setShowLogin] = useState(true);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSignup = async () => {
    try {
      const res = await fetch("https://cryptoplace-backend.onrender.com/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: formData.username,
          email: formData.email,
          password: formData.password,
        }),
      });
      const data = await res.json();
      if (res.ok) {
      setShowLogin(true);
      } else {
        alert(data.message || "Signup failed");
      }
    } catch (err) {
      console.error(err);
      alert("Signup failed");
    }
  };

  const handleLogin = async () => {
    try {
      const res = await fetch("https://cryptoplace-backend.onrender.com/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password,
        }),
      });
      const data = await res.json();
      
      if (res.ok) {
        navigate("/dataa");
      } else {
        alert(data.message || "Login failed");
      }
    } catch (err) {
      console.error(err);
      alert("Login failed");
    }
  };

  return (
    <div className="overlay">
      <div className="card">
        <button className="close-btn" onClick={onClose}>×</button>
        
        {showLogin ? (
          <>
            <h2 className="title">Login</h2>
            <input type="email" name="email" placeholder="Email" onChange={handleChange} />
            <input type="password" name="password" placeholder="Password" onChange={handleChange} />
            <button className="btn" onClick={handleLogin}>Login</button>
            <p>Don't have an account? <span className="link" onClick={() => setShowLogin(false)}>Sign Up</span></p>
          </>
        ) : (
          <>
            <h2 className="title">Sign Up</h2>
            <input type="text" name="username" placeholder="Username" onChange={handleChange} />
            <input type="email" name="email" placeholder="Email" onChange={handleChange} />
            <input type="password" name="password" placeholder="Password" onChange={handleChange} />
            <button className="btn" onClick={handleSignup}>Sign Up</button>
            <p>Already have an account? <span className="link" onClick={() => setShowLogin(true)}>Login</span></p>
          </>
        )}
      </div>
    </div>
  );
}
