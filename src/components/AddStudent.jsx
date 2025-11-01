import React, { useState } from "react";
import axios from "axios";
import "../styles/Register.css"; 

function AddStudent() {
  const [formData, setFormData] = useState({
    name: "",
    rollNo: "",
    cgpa: "",
    department: "",
    image: "" 
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData((prev) => ({ ...prev, image: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/students", formData);
      alert("Student added successfully!");
      setFormData({ name: "", rollNo: "", cgpa: "", department: "", image: "" });
    } catch (err) {
      alert("Failed to add student. Make sure JSON Server is running.");
    }
  };

  return (
    <div className="register-container">
      <h2>Add Student</h2>
      <form onSubmit={handleSubmit}>
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
          name="rollNo"
          placeholder="Roll No"
          value={formData.rollNo}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="cgpa"
          placeholder="CGPA"
          value={formData.cgpa}
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

        <div className="form-group">
          <label>Upload Student Image</label>
          <input type="file" accept="image/*" onChange={handleImageChange} />
        </div>

        <button type="submit">Add Student</button>
      </form>
    </div>
  );
}

export default AddStudent;
