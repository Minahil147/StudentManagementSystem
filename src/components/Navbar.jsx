import "./Navbar.css";
import logo from "../assets/logo.png";
import { useState, useEffect } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const [darkMode, setDarkMode] = useState(false);
  const location = useLocation();

  // 🔹 Add/remove dark class on <body>
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
      document.body.classList.remove("light");
    } else {
      document.body.classList.add("light");
      document.body.classList.remove("dark");
    }
  }, [darkMode]);

  const toggleMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <nav className={`navbar ${darkMode ? "dark" : "light"}`}>
      {/* Logo */}
      <div className="logo">
        <img src={logo} alt="StudentMS Logo" />
        <span>StudentMS</span>
      </div>

      {/* Links */}
      <ul className="nav-links">
        <li><Link to="/" className={location.pathname === "/" ? "active" : ""}>Home</Link></li>
        <li><Link to="/students" className={location.pathname === "/students" ? "active" : ""}>Students</Link></li>
        <li><Link to="/about" className={location.pathname === "/about" ? "active" : ""}>About</Link></li>
        <li><Link to="/contact" className={location.pathname === "/contact" ? "active" : ""}>Contact</Link></li>
        <li><Link to="/add-student">Add Student</Link></li>

      </ul>

      {/* Toggle button */}
      <button className="mode-toggle" onClick={toggleMode}>
        {darkMode ? <FaMoon /> : <FaSun />}
      </button>
    </nav>
  );
}

export default Navbar;
