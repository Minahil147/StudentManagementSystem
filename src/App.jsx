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
  // ✅ Use state so UI reacts immediately when storage changes
  const [adminExists, setAdminExists] = useState(
    localStorage.getItem("adminData") !== null
  );
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("isLoggedIn") === "true"
  );

  // Listen for changes in localStorage (e.g., after signup/login)
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
      {/* 1️⃣ Signup - when no admin exists */}
      {!adminExists && (
        <>
          <Route path="/admin-signup" element={<AdminSignup />} />
          <Route path="*" element={<Navigate to="/admin-signup" replace />} />
        </>
      )}

      {/* 2️⃣ Login - when admin exists but not logged in */}
      {adminExists && !isLoggedIn && (
        <>
          <Route path="/admin-login" element={<AdminLogin />} />
          <Route path="*" element={<Navigate to="/admin-login" replace />} />
        </>
      )}

      {/* 3️⃣ Home - when logged in */}
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
