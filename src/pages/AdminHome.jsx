import React, { useState } from "react";
import Navbar from "../components/Navbar";
import AddStudent from "../components/AddStudent";
import StudentList from "../components/StudentList";
import CGPACalculator from "../pages/CGPACalculator";
import "../styles/AdminHome.css";

function AdminHome() {
  const [currentPage, setCurrentPage] = useState("welcome");

  const renderPage = () => {
    switch (currentPage) {
      case "register":
        return <AddStudent />;
      case "students":
        return <StudentList />;
      case "cgpa":
        return <CGPACalculator />;
      default:
        return (
          <div className="welcome-screen">
            <h1>Welcome to Student Management System</h1>
            <div className="dashboard-buttons">
              <button onClick={() => setCurrentPage("register")}>Get Registered</button>
              <button onClick={() => setCurrentPage("students")}>View Students</button>
              <button onClick={() => setCurrentPage("cgpa")}>CGPA Calculator</button>
            </div>
          </div>
        );
    }
  };  

  return (
    <div>
      <Navbar setCurrentPage={setCurrentPage} />
      <div className="main-content">{renderPage()}</div>
    </div>
  );
}

export default AdminHome;
