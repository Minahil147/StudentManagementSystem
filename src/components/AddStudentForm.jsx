import React, { useState } from "react";
import { useStudents } from "../context/StudentContext";

export default function AddStudentForm() {
  const { addStudent } = useStudents();
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    roll: "",
    course: "",
    department: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addStudent(formData);
    setFormData({ name: "", roll: "", course: "", department: "" });
    setShowForm(false);
  };

  return (
    <div className="add-student">
      <button className="add-btn" onClick={() => setShowForm(!showForm)}>
        {showForm ? "Close Form" : "Add Student"}
      </button>

      {showForm && (
        <form onSubmit={handleSubmit} className="student-form">
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="roll"
            placeholder="Roll No"
            value={formData.roll}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="course"
            placeholder="Course"
            value={formData.course}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="department"
            placeholder="Department"
            value={formData.department}
            onChange={handleChange}
            required
          />
          <button type="submit" className="submit-btn">Add</button>
        </form>
      )}
    </div>
  );
}
