import React, { useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import AdminSignup from "./pages/AdminSignup";
import AdminLogin from "./pages/AdminLogin";
import AdminHome from "./pages/AdminHome";
import StudentList from "./components/StudentList";
import CGPACalculator from "./pages/CGPACalculator"; 
function ProtectedRoute({ children }) {
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
  return isLoggedIn ? children : <Navigate to="/admin-login" replace />;
}

function App() {
  const [adminExists, setAdminExists] = useState(
    localStorage.getItem("adminData") !== null
  );
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("isLoggedIn") === "true"
  );
  useEffect(() => {
    const handleStorageChange = () => {
      setAdminExists(localStorage.getItem("adminData") !== null);
      setIsLoggedIn(localStorage.getItem("isLoggedIn") === "true");
    };
    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  return (
    <Routes>
      {!adminExists && (
        <>
          <Route path="/admin-signup" element={<AdminSignup />} />
          <Route path="*" element={<Navigate to="/admin-signup" replace />} />
        </>
      )}

      {adminExists && !isLoggedIn && (
        <>
          <Route path="/admin-login" element={<AdminLogin />} />
          <Route path="*" element={<Navigate to="/admin-login" replace />} />
        </>
      )}

      {isLoggedIn && (
        <>
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <AdminHome />
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<Navigate to="/" replace />} />
        </>
      )}
       <Route path="/students" element={<StudentList />} />
      <Route path="/cgpa" element={<CGPACalculator />} />

    </Routes>
  );
}

export default App;
