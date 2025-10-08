function StudentCard({ name, roll, course, department, gender }) {
  const profileImg =
    gender === "male"
      ? "https://img.icons8.com/color/240/user-male-circle--v1.png"
      : "https://img.icons8.com/color/240/user-female-circle--v1.png";

  return (
    <div className="student-card">
      <img src={profileImg} alt={`${name}'s Profile`} />
      <h2>{name}</h2>
      <p><strong>Roll No:</strong> {roll}</p>
      <p><strong>Course:</strong> {course}</p>
      <p><strong>Department:</strong> {department}</p>
    </div>
  );
}

export default StudentCard;
