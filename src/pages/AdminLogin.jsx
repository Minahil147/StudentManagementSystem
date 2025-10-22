import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/AdminLogin.css";

function AdminLogin() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const savedAdmin = JSON.parse(localStorage.getItem("adminData"));

    if (
      savedAdmin &&
      formData.email === savedAdmin.email &&
      formData.password === savedAdmin.password
    ) {
      // ✅ Set login flag
      localStorage.setItem("isLoggedIn", "true");
      alert("Login successful!");

      // 🧩 Small delay for App.jsx to react
      setTimeout(() => {
        navigate("/");
        window.location.reload(); // force re-render to show AdminHome
      }, 100);
    } else {
      alert("Invalid email or password!");
    }
  };

  return (
    <div className="auth-container">
      <h2>Admin Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />

        <button type="submit">Login</button>
      </form>
      <p>
        Don’t have an account?{" "}
        <span className="link" onClick={() => navigate("/admin-signup")}>
          Sign Up
        </span>
      </p>
    </div>
  );
}

export default AdminLogin;
