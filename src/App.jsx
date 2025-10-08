import "./App.css"; 
import StudentCard from "./components/StudentCard";
import Navbar from "./components/Navbar";

function App() {
  const students = [
    { name: "Minahil Fatima", roll: "2025-SE-01", course: "Software Engineering", department: "Computer Science", gender: "female" },
    { name: "Ali Raza", roll: "2025-SE-02", course: "Software Engineering", department: "Computer Science", gender: "male" },
    { name: "Ayesha Khan", roll: "2025-SE-03", course: "Data Science", department: "AI & DS", gender: "female" },
    { name: "Ahmed Malik", roll: "2025-SE-04", course: "Cyber Security", department: "Information Security", gender: "male" },
    { name: "Sara Ahmed", roll: "2025-SE-05", course: "Software Engineering", department: "Computer Science", gender: "female" },
    { name: "Zara Ahmed", roll: "2025-SE-06", course: "Software Engineering", department: "Computer Science", gender: "female" },
  ];

  return (
    <>
      <Navbar />

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
        <h2 className="page-title">Student Cards</h2>
        <div className="students-grid">
          {students.map((student, index) => (
            <StudentCard
              key={index}
              name={student.name}
              roll={student.roll}
              course={student.course}
              department={student.department}
              gender={student.gender}
            />
          ))}
        </div>
      </section>

      <section id="about" className="section">
        <h2>About</h2>
        <p>This is a Student Management System project built with React.</p>
      </section>
    </>
  );
}

export default App;
