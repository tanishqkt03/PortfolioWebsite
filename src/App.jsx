import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Navbar";
import Contact from "./Contact";

function MainContent() {
  const [currentText, setCurrentText] = useState("Full Stack Developer");
  const textArray = ["Full Stack Developer", "Web Designer", "ML Enthusiast","UI/UX Designer"];

  // Change text every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prevText) => {
        const currentIndex = textArray.indexOf(prevText);
        const nextIndex = (currentIndex + 1) % textArray.length;
        return textArray[nextIndex];
      });
    }, 4000); // Text changes every 4 seconds

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, []);

  return (
    <div>
      {/* Name in top-left corner */}
      <div className="name">Tanishq KT</div>

      <div className="spline-background">
        <spline-viewer url="https://prod.spline.design/q1umcy1q3YTnFa5o/scene.splinecode"></spline-viewer>
      </div>

      {/* Pass isContactPage as false to indicate this is the main page */}
      <Navbar isContactPage={false} />

      <div id="section1" className="section">
        <h1 className="animated-text">{currentText}</h1>
        <p>Tap the buttons below to navigate</p>
      </div>
      <div id="section2" className="section">
        <h1>About Me</h1>
        <p>
          I'm a passionate developer interested in web and app development, data
          science, and problem-solving. I enjoy building projects that address
          real-world problems and diving deep into learning new technologies.
        </p>
      </div>
      <div id="section3" className="section">
  <h1>Projects</h1>
  <p>
    Check out my GitHub for more details on my projects!
  </p>
  <ul className="no-bullets">
    <li>
      <strong>8-bit Image Processor</strong>: Converts images into 8-bit pixelated versions.
    </li>
    <li>
      <strong>MERN Stack Chat App</strong>: A real-time messaging app built using MongoDB, Express.js, React, and Node.js.
    </li>
    <li>
      <strong>WhatsApp Chat Analysis Tool</strong>: Uses machine learning to analyze chat data and extract insights.
    </li>
    <li>
      <strong>AcadBud - College Management System</strong>: A system built with the MERN stack to manage academic processes.<br></br> It provides distinct portals for students, faculty, and administrators,<br></br> streamlining tasks like uploading materials, viewing marks, and managing user accounts.
    </li>
  </ul>
</div>


    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainContent />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
