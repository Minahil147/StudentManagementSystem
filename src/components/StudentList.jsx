import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styles/Students.css";
import "../styles/EditStudent.css";

function StudentList() {
  const [students, setStudents] = useState([]);
  const [editingStudent, setEditingStudent] = useState(null);
  const [viewingStudent, setViewingStudent] = useState(null); // For popup view
  const [formData, setFormData] = useState({
    name: "",
    rollNo: "",
    cgpa: "",
    department: "",
    image: ""
  });

  useEffect(() => {
    fetchStudents();
  }, []);

  // ✅ Fetch all students
  const fetchStudents = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/students/");
      setStudents(res.data);
    } catch (err) {
      console.error("Failed to fetch students", err);
    }
  };

  // ✅ Delete a student
  const handleDelete = async (_id) => {
    try {
      await axios.delete(`http://localhost:5000/api/students/delete/${_id}`);
      setStudents(students.filter((s) => s._id !== _id));
    } catch (err) {
      console.error("Failed to delete student", err);
    }
  };

  // ✅ Edit student - open modal
  const handleEdit = (student) => {
    setEditingStudent(student);
    setFormData({
      name: student.name,
      rollNo: student.rollNo,
      cgpa: student.cgpa,
      department: student.department,
      image: student.image || ""
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // ✅ Update student
  const handleUpdate = async () => {
    try {
      await axios.put(
        `http://localhost:5000/api/students/update/${editingStudent._id}`,
        formData
      );
      setEditingStudent(null);
      fetchStudents();
    } catch (err) {
      console.error("Failed to update student", err);
    }
  };

  return (
    <div className="students-container">
      <h2>Student List</h2>

      {/* Student cards */}
      <div className="students-list">
        {students.length === 0 ? (
          <p style={{ textAlign: "center", color: "#4e342e" }}>No students found!</p>
        ) : (
          students.map((s) => (
            <div key={s._id} className="student-card list-mode">
              <div className="student-basic">
                <h3>{s.name}</h3>
                <p><strong>Roll No:</strong> {s.rollNo}</p>
              </div>
              <div className="card-buttons">
                <button onClick={() => setViewingStudent(s)}>View</button>
                <button onClick={() => handleEdit(s)}>Edit</button>
                <button onClick={() => handleDelete(s._id)}>Delete</button>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Popup View Modal */}
      {viewingStudent && (
        <div className="view-modal">
          <div className="view-card">
            <img
              src={viewingStudent.image || "https://via.placeholder.com/120"}
              alt={viewingStudent.name}
              className="view-image"
            />
            <h3>{viewingStudent.name}</h3>
            <p><strong>Roll No:</strong> {viewingStudent.rollNo}</p>
            <p><strong>Department:</strong> {viewingStudent.department}</p>
            <p><strong>CGPA:</strong> {viewingStudent.cgpa}</p>
            <button className="close-btn" onClick={() => setViewingStudent(null)}>
              Close
            </button>
          </div>
        </div>
      )}

      {/* Edit Modal */}
      {editingStudent && (
        <div className="edit-student-modal">
          <div className="edit-student-container">
            <h3>Edit Student</h3>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Name"
            />
            <input
              type="text"
              name="rollNo"
              value={formData.rollNo}
              onChange={handleChange}
              placeholder="Roll No"
            />
            <input
              type="number"
              name="cgpa"
              value={formData.cgpa}
              onChange={handleChange}
              placeholder="CGPA"
            />
            <input
              type="text"
              name="department"
              value={formData.department}
              onChange={handleChange}
              placeholder="Department"
            />
            <input
              type="text"
              name="image"
              value={formData.image}
              onChange={handleChange}
              placeholder="Image URL"
            />

            <div className="edit-buttons">
              <button className="cta-btn" onClick={handleUpdate}>
                Save Changes
              </button>
              <button className="cancel-btn" onClick={() => setEditingStudent(null)}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default StudentList;
