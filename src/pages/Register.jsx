import React, { useState } from "react";
import "../styles/Register.css";
import { addStudent } from "../api/studentsApi";

export default function Register() {
  const [name, setName] = useState("");
  const [rollNo, setRollNo] = useState("");
  const [department, setDepartment] = useState("");
  const [pic, setPic] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    if (!name || !rollNo || !department) return alert("Fill all fields!");

    await addStudent({
      name,
      rollNo,
      department,
      pic,
      cgpa: 0
    });

    setName(""); 
    setRollNo(""); 
    setDepartment(""); 
    setPic("");

    alert("Student Registered Successfully!");
  };

  return (
    <div className="register-container">
      <h2>Student Registration</h2>
      <form onSubmit={handleRegister}>
        <input value={name} onChange={e => setName(e.target.value)} placeholder="Name" />
        <input value={rollNo} onChange={e => setRollNo(e.target.value)} placeholder="Roll No" />
        <input value={department} onChange={e => setDepartment(e.target.value)} placeholder="Department" />
        <input type="file" onChange={e => setPic(URL.createObjectURL(e.target.files[0]))} />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}
