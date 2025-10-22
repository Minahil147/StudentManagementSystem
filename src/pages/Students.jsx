import React, { useState } from "react";
import "../styles/Students.css";

export default function Students() {
  const [students, setStudents] = useState(JSON.parse(localStorage.getItem("students")) || []);
  const [editing, setEditing] = useState(null);
  const [name, setName] = useState("");
  const [rollNo, setRollNo] = useState("");
  const [department, setDepartment] = useState("");
  const [cgpa, setCgpa] = useState(0);

  const handleDelete = id => {
    const updated = students.filter(s => s.id !== id);
    setStudents(updated);
    localStorage.setItem("students", JSON.stringify(updated));
  };

  const startEdit = s => {
    setEditing(s.id);
    setName(s.name);
    setRollNo(s.rollNo);
    setDepartment(s.department);
    setCgpa(s.cgpa);
  };

  const handleUpdate = e => {
    e.preventDefault();
    const updated = students.map(s => s.id === editing ? { ...s, name, rollNo, department, cgpa } : s);
    setStudents(updated);
    localStorage.setItem("students", JSON.stringify(updated));
    setEditing(null);
  };

  const topCGPA = students.length > 0 ? Math.max(...students.map(s=>s.cgpa)) : null;

  return (
    <div className="students-container">
      <h2>Registered Students</h2>
      <table>
        <thead>
          <tr><th>Name</th><th>Roll No</th><th>Department</th><th>CGPA</th><th>Actions</th></tr>
        </thead>
        <tbody>
          {students.map(s => (
            <tr key={s.id} style={{backgroundColor: s.cgpa === topCGPA ? "#ffe0b2" : ""}}>
              <td>{editing === s.id ? <input value={name} onChange={e=>setName(e.target.value)} /> : s.name}</td>
              <td>{editing === s.id ? <input value={rollNo} onChange={e=>setRollNo(e.target.value)} /> : s.rollNo}</td>
              <td>{editing === s.id ? <input value={department} onChange={e=>setDepartment(e.target.value)} /> : s.department}</td>
              <td>{editing === s.id ? <input type="number" step="0.01" value={cgpa} onChange={e=>setCgpa(e.target.value)} /> : s.cgpa}</td>
              <td>
                {editing === s.id ? (
                  <>
                    <button onClick={handleUpdate}>Save</button>
                    <button onClick={()=>setEditing(null)}>Cancel</button>
                  </>
                ) : (
                  <>
                    <button onClick={()=>startEdit(s)}>Edit</button>
                    <button onClick={()=>handleDelete(s.id)}>Delete</button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
