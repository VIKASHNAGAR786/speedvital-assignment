import React from "react";
import "./Navbar.css"; // Import CSS file

const Navbar = ({ toggleDarkMode }) => {
  return (
    <nav className="navbar">
      <div className="nav-links">
        <a href="#">About Us</a>
        <a href="#">Learn More</a>
      </div>
      <button className="dark-mode-btn" onClick={toggleDarkMode}>🌙</button>
      {/* <button className="dark-mode-btn" onClick={toggleDarkMode}> */}
        {/* {darkMode ? "🌙" : "🌞"} */}
      {/* </button> */}
    </nav>
  );
};

export default Navbar;
