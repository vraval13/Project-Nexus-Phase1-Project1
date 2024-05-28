import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import "./App.css";
import Register from "./components/Register.jsx";
import Login from "./components/Login.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import { useAuth } from "./contexts/AuthContext.jsx"; // Import useAuth from your context file

function App() {
  const { isAuthenticated } = useAuth(); // Use useAuth hook

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            !isAuthenticated ? <Register /> : <Navigate to="/dashboard" />
          }
        />
        <Route
          path="/login"
          element={!isAuthenticated ? <Login /> : <Navigate to="/dashboard" />}
        />
        <Route
          path="/dashboard"
          element={!isAuthenticated ? <Dashboard /> : <Login />
        }
        />
      </Routes>
    </Router>
  );
}

export default App;
