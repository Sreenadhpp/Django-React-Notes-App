import React from "react";
import {BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom"
import Register from "./pages/Register"
import ProtectedRoute from "./components/ProtectedRoute"
import Home from "./pages/Home"
import Login from './pages/Login'
import NotFound from "./pages/NotFound"


function Logout() {
  localStorage.clear()
  return <Navigate to="/login" />
}

function RegisterAndLogout() {
  localStorage.clear()
  return <Register />
}


function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/register" element={<RegisterAndLogout />} />
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </Router>
  )
}

export default App

// <Route path="*" element={<NotFound />} />