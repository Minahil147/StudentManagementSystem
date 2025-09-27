import "./App.css";
import { FaHome, FaUserGraduate, FaInfoCircle } from "react-icons/fa";

function App() {
return (
<>
{/* Navbar */}
<nav className="navbar">
<div className="logo">StudentMS</div>
<ul className="nav-links">
<li><a href="#"><FaHome /> Home</a></li>
<li><a href="#"><FaUserGraduate /> Students</a></li>
<li><a href="#"><FaInfoCircle /> About</a></li>
</ul>
</nav>

  {/* Hero Section */}
  <section className="hero">
    <div className="hero-content">
      <h1>Welcome to Student Management System</h1>
      <p>This is the landing page of your project 🚀</p>
      <button className="cta-btn">Get Started</button>
    </div>
  </section>

  {/* Features Section */}
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
</>
);
}

export default App;
