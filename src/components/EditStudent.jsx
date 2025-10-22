import React, { useState } from "react";

function EditStudent({ student, onSave, onCancel }) {
  const [name, setName] = useState(student.name);
  const [rollNo, setRollNo] = useState(student.rollNo);
  const [cgpa, setCgpa] = useState(student.cgpa);

  const handleSave = () => {
    if (!name || !rollNo || !cgpa) return alert("Fill all fields");
    onSave({ ...student, name, rollNo, cgpa });
  };

  return (
    <div className="edit-student">
      <h3>Edit Student</h3>
      <input placeholder="Name" value={name} onChange={(e)=>setName(e.target.value)} />
      <input placeholder="Roll No" value={rollNo} onChange={(e)=>setRollNo(e.target.value)} />
      <input placeholder="CGPA" value={cgpa} onChange={(e)=>setCgpa(e.target.value)} />
      <button onClick={handleSave}>Save</button>
      <button onClick={onCancel}>Cancel</button>
    </div>
  );
}

export default EditStudent;
