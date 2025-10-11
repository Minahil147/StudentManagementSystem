import React, { useState } from "react";
import { Link } from "react-router-dom";

function Students() {
  const [students, setStudents] = useState([
    { id: 1, name: "Minahil Fatima", age: 20, class: "BSSE", grade: "A" },
    { id: 2, name: "Ali", age: 20, class: "BSCS", grade: "B+" },
    {id: 3, name: "Ayesha", age: 20, class: "BSDS", grade: "A"},
    { id: 4, name: "Ahmed", age: 20, class: "BSCyberSecurity", grade: "B" },
    { id: 5, name: "Sara Ahmed", age: 20, class: "BSSE", grade: "A" },
    { id: 2, name: "Zara Ahmed", age: 20, class: "BSSE", grade: "A" }

  ]);

  const handleDelete = (id) => {
    setStudents(students.filter((s) => s.id !== id));
  };

  return (
    <div className="students-page">
      <h2>Students Page</h2>
      {students.length === 0 ? (
        <p>No Data Found</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Class</th>
              <th>Grade</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {students.map((s) => (
              <tr key={s.id}>
                <td>{s.name}</td>
                <td>{s.class}</td>
                <td>{s.grade}</td>
                <td>
                  <Link to={`/students/${s.id}`} state={s}>
                    <button>View</button>
                  </Link>
                  <button onClick={() => handleDelete(s.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default Students;
