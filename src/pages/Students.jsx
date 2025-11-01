import React, { useEffect, useState } from "react";
import "../styles/Students.css";
import { getStudents, deleteStudent, updateStudent } from "../api/studentsApi";

export default function Students() {
  const [students, setStudents] = useState([]);
  const [editing, setEditing] = useState(null);
  const [name, setName] = useState("");
  const [rollNo, setRollNo] = useState("");
  const [department, setDepartment] = useState("");
  const [cgpa, setCgpa] = useState(0);

  // ✅ Fetch from MongoDB
  const fetchStudents = async () => {
    const res = await getStudents();
    setStudents(res.data);
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  const startEdit = (s) => {
    setEditing(s._id);
    setName(s.name);
    setRollNo(s.rollNo);
    setDepartment(s.department);
    setCgpa(s.cgpa);
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    await updateStudent(editing, { name, rollNo, department, cgpa });
    fetchStudents();
    setEditing(null);
  };

  const handleDelete = async (id) => {
    await deleteStudent(id);
    fetchStudents();
  };

  const topCGPA = students.length > 0 ? Math.max(...students.map(s => s.cgpa)) : null;

  return (
    <div className="students-container">
      <h2>Registered Students</h2>

      <table>
        <thead>
          <tr>
            <th>Name</th><th>Roll No</th><th>Department</th><th>CGPA</th><th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.map(s => (
            <tr key={s._id} style={{ backgroundColor: s.cgpa === topCGPA ? "#ffe0b2" : "" }}>
              <td>{editing === s._id ? <input value={name} onChange={e=>setName(e.target.value)} /> : s.name}</td>
              <td>{editing === s._id ? <input value={rollNo} onChange={e=>setRollNo(e.target.value)} /> : s.rollNo}</td>
              <td>{editing === s._id ? <input value={department} onChange={e=>setDepartment(e.target.value)} /> : s.department}</td>
              <td>{editing === s._id ? <input type="number" step="0.01" value={cgpa} onChange={e=>setCgpa(e.target.value)} /> : s.cgpa}</td>

              <td>
                {editing === s._id ? (
                  <>
                    <button onClick={handleUpdate}>Save</button>
                    <button onClick={()=>setEditing(null)}>Cancel</button>
                  </>
                ) : (
                  <>
                    <button onClick={()=>startEdit(s)}>Edit</button>
                    <button onClick={()=>handleDelete(s._id)}>Delete</button>
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
