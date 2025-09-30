import "./App.css";
import { FaHome, FaUserGraduate, FaInfoCircle } from "react-icons/fa";
import { useState } from "react";
import StudentCard from "./components/StudentCard";

function App() {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <>
      <nav className="navbar">
       <ul className="nav-links">
  <li><a href="#home"><FaHome /> Home</a></li>

  <li className="dropdown">
    <button onClick={toggleDropdown} className="dropdown-btn">
      <FaUserGraduate /> Students
    </button>
    {showDropdown && (
      <ul className="dropdown-menu">
        <li><a href="#fees">Fee Structure</a></li>
        <li><a href="#activities">Activities</a></li>
        <li><a href="#student-card">Student Card</a></li>
      </ul>
    )}
  </li>

  <li><a href="#about"><FaInfoCircle /> About</a></li>
</ul>

</nav>

{/* Hero Section */}
<section className="hero">
  <div className="hero-content">
    <h1>Welcome to Student Management System</h1>
    <p>Connect. Collaborate. Achieve.</p>
    <button className="cta-btn">Get Started</button>
  </div>
</section>


      <section id="home" className="hero">
        <div className="hero-content">
          <h1>Welcome to Student Management System</h1>
          <p>Connect. Collaborate. Achieve.</p>
          <button className="cta-btn">Get Started</button>
        </div>
      </section>

      <section className="features">
        <div className="feature-card">
          <img src="https://img.icons8.com/color/240/classroom.png" alt="Student Records" />
          <h3>Student Records</h3>
          <p>Manage profiles, grades, and attendance in one place.</p>
        </div>

        <div className="feature-card">
          <img src="https://img.icons8.com/color/240/test-passed.png" alt="Exams" />
          <h3>Exams & Results</h3>
          <p>Organize exams and generate performance reports easily.</p>
        </div>

        <div className="feature-card">
          <img src="https://img.icons8.com/color/240/teacher.png" alt="Teachers" />
          <h3>Teachers & Classes</h3>
          <p>Assign teachers and manage class schedules effortlessly.</p>
        </div>
      </section>

<section id="student-card" className="student-card-section">
  <h2 className="page-title">Student Card</h2>
  <StudentCard 
    name="Minahil Fatima" 
    roll="2025-SE-01" 
    course="Software Engineering" 
    department="Computer Science" 
  />
</section>



      <section id="about" className="section">
        <h2>About</h2>
        <p>This is a Student Management System project built with React.</p>
      </section>
    </>
  );
}

export default App;
