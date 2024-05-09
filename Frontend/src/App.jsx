import React from "react";
import About from "./pages/About.jsx";
import Register from "./pages/Register.jsx";
import Login from "./pages/Login.jsx";
import ContactUs from "./pages/ContactUs.jsx";
import HomePage from "./pages/Home.jsx";
import Profile from "./pages/MyProfile.jsx";
import AdminLoginPage from "./pages/AdminLogin.jsx";
import AdminRegisterPage from "./pages/AdminRegister.jsx";
import UnverifiedUser from "./pages/UnverifiedUser.jsx";
import VerifiedUser from "./pages/VerifiedUser.jsx";
import { Routes, BrowserRouter as Router, Route } from "react-router-dom";
function App() {
  
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/home" element={<HomePage/>} />
          <Route path="/" element={<Login/>} />
          <Route path="/contact-us" element={<ContactUs/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/profile" element={<Profile/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/adminregister" element={<AdminRegisterPage/>} />
          <Route path="/adminlogin" element={<AdminLoginPage/>} />
          <Route path="/unverifieduser" element={<UnverifiedUser/>} />
          <Route path="/verifieduser" element={<VerifiedUser/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
