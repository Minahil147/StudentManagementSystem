import React from "react";
import "../App.css"; // using global CSS

function StudentCard({ name, roll, course, department }) {
  return (
    <div className="student-card">
      <img 
        src="https://img.icons8.com/color/240/student-female.png"
        alt="Student Profile"
      />
      <h2>{name}</h2>
      <p><strong>Roll No:</strong> {roll}</p>
      <p><strong>Course:</strong> {course}</p>
      <p><strong>Department:</strong> {department}</p>
    </div>
  );
}

export default StudentCard;
