import React, { useState } from "react";
import Navbar from "./components/Navbar";
import DeviceDropdown from "./components/DiviceDropdown";
import Graph from "./components/Graph";
import Footer from "./components/Footer"; // Importing the Footer component
import './App.css'; // Import app-wide CSS for dark mode styling

const App = () => {
  const [device, setDevice] = useState("desktop");
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    // Apply background and text color globally
    document.body.style.backgroundColor = darkMode ? "#fff" : "#333";
    document.body.style.color = darkMode ? "#000" : "#fff";
  };

  return (
    <div className={darkMode ? "dark-mode" : ""}>
      <Navbar toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
      <div className="content">
        <h1>SpeedVitals Internship Assessment</h1>
        <DeviceDropdown setDevice={setDevice} />
        <Graph metric="lcp" device={device} darkMode={darkMode} />
        <Graph metric="cls" device={device} darkMode={darkMode} />
      </div>

      {/* Footer Component */}
      <Footer />
    </div>
  );
};

export default App;
