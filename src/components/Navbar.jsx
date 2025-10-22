import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar({ setCurrentPage }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    navigate("/admin-login");
  };

  return (
    <nav className="navbar">
      <div className="logo" onClick={() => setCurrentPage("welcome")}>StudentMS</div>
      <ul className="nav-links">
        <li><a onClick={() => setCurrentPage("welcome")}>Home</a></li>
        <li><a onClick={() => setCurrentPage("register")}>Register</a></li>
        <li><a onClick={() => setCurrentPage("students")}>Students</a></li>
        <li><a onClick={() => setCurrentPage("cgpa")}>CGPA</a></li>
        <li><button className="logout-btn" onClick={handleLogout}>Logout</button></li>
      </ul>
    </nav>
  );
}

export default Navbar;
