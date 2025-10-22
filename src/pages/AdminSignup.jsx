import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/AdminSignup.css";

function AdminSignup() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      alert("Please fill all fields!");
      return;
    }

    // Save admin data
    localStorage.setItem("adminData", JSON.stringify(formData));

    alert("Signup successful! Please login now.");

    // 🧩 Delay navigation slightly to allow React state update
    setTimeout(() => {
      navigate("/admin-login");
      window.location.reload(); // optional full refresh to re-evaluate routes
    }, 100);
  };

  return (
    <div className="auth-container">
      <h2>Admin Signup</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
        />
        <button type="submit">Sign Up</button>
      </form>
      <p>
        Already have an account?{" "}
        <span className="link" onClick={() => navigate("/admin-login")}>
          Login
        </span>
      </p>
    </div>
  );
}

export default AdminSignup;
