import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

function StudentDetails() {
  const location = useLocation();
  const navigate = useNavigate();
  const student = location.state;

  if (!student) {
    return <p>No student data found!</p>;
  }

  return (
    <div className="student-details">
      <h2>Student Details</h2>
      <p><strong>Name:</strong> {student.name}</p>
      <p><strong>Age:</strong> {student.age}</p>
      <p><strong>Class:</strong> {student.class}</p>
      <p><strong>Grade:</strong> {student.grade}</p>
      <button onClick={() => navigate("/students")}>Back to Students</button>
    </div>
  );
}

export default StudentDetails;
