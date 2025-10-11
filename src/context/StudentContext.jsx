import React, { createContext, useContext, useState } from "react";
import studentsMock from "../data/studentsMock";

const StudentContext = createContext();

export function useStudents() {
  return useContext(StudentContext);
}

export function StudentProvider({ children }) {
  const [students, setStudents] = useState(() => [...studentsMock]);

  const deleteStudent = (id) => {
    setStudents((s) => s.filter((st) => st.id !== id));
  };

  const getStudentById = (id) => students.find((s) => s.id === id);

  return (
    <StudentContext.Provider value={{ students, deleteStudent, getStudentById }}>
      {children}
      
    </StudentContext.Provider>
  );
}
