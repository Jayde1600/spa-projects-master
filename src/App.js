import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import UserProfile from "./pages/userProfile"; // Import UserProfile component
import NavBar from "./components/navBar";

function App() {
  return (
    <Router>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Navigate to="/home"/>} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/userProfile" element={<UserProfile/>}/>
        <Route path="/userProfile/:username" element={<UserProfile />} />
      </Routes>
    </Router>
  );
}

export default App;
