import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
// import AboutSection from "./components/AboutSection";
// import HeroSection from "./components/HeroSection";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="bg-black min-h-screen px-1 md:px-16">
        {/* <Routes path = "/" /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/hero" element={<HeroSection />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
