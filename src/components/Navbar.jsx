import "./Navbar.css";
import logo from "../assets/logo.png";
import { useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

function Navbar() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <nav className={`navbar ${darkMode ? "dark" : "light"}`}>
      <div className="logo">
        <img src={logo} alt="StudentMS Logo" />
        <span>StudentMS</span>
      </div>

      <ul className="nav-links">
        <li><a href="#" className="active">Home</a></li>
        <li><a href="#student-card">Students</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <button className="mode-toggle" onClick={toggleMode}>
        {darkMode ? <FaMoon /> : <FaSun />}
      </button>
    </nav>
  );
}

export default Navbar;
