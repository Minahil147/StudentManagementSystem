import React, { useState } from "react";
import "../styles/CGPACalculator.css";

function CGPACalculator() {
  const [subjects, setSubjects] = useState([{ credit: "", grade: "" }]);
  const [result, setResult] = useState(null);

  const handleChange = (index, field, value) => {
    const newSubjects = [...subjects];
    newSubjects[index][field] = value;
    setSubjects(newSubjects);
  };

  const addSubject = () => {
    setSubjects([...subjects, { credit: "", grade: "" }]);
  };

  const calculateCGPA = () => {
    let totalCredits = 0;
    let totalPoints = 0;

    subjects.forEach(({ credit, grade }) => {
      const c = parseFloat(credit);
      const g = parseFloat(grade);
      if (!isNaN(c) && !isNaN(g)) {
        totalCredits += c;
        totalPoints += c * g;
      }
    });

    if (totalCredits === 0) {
      setResult("Please enter valid credit and grade values!");
    } else {
      const cgpa = (totalPoints / totalCredits).toFixed(2);
      setResult(`Your CGPA is ${cgpa}`);
    }
  };

  return (
    <div className="cgpa-container">
      <h2>🎓 CGPA Calculator</h2>

      {subjects.map((sub, i) => (
        <div key={i} className="subject-row">
          <input
            type="number"
            placeholder="Credit Hours"
            value={sub.credit}
            onChange={(e) => handleChange(i, "credit", e.target.value)}
          />
          <input
            type="number"
            placeholder="Grade (0-4)"
            value={sub.grade}
            onChange={(e) => handleChange(i, "grade", e.target.value)}
          />
        </div>
      ))}

      <button onClick={addSubject}>+ Add Subject</button>
      <button onClick={calculateCGPA}>Calculate CGPA</button>

      {result && <h3 className="cgpa-result">{result}</h3>}
    </div>
  );
}

export default CGPACalculator;
