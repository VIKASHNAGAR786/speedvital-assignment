import React, { useState, useEffect, useRef } from "react";
import "./Navbar.css"; // Import CSS file

const Navbar = ({ toggleDarkMode }) => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const dropdownRefs = {
    about: useRef(null),
    learn: useRef(null),
  };

  // Function to toggle dropdown and close others
  const handleDropdownClick = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      // Check if the click is outside the dropdowns
      if (
        dropdownRefs.about.current && !dropdownRefs.about.current.contains(event.target) &&
        dropdownRefs.learn.current && !dropdownRefs.learn.current.contains(event.target)
      ) {
        setActiveDropdown(null);  // Close all dropdowns if click is outside
      }
    };

    // Adding the event listener for the click
    document.addEventListener("click", handleClickOutside);

    // Cleanup event listener on component unmount
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <img src="images/logo1.jpeg" alt="Logo" className="logo" /> {/* Update logo path */}
        <span className="brand-name">SpeedVitals</span>
      </div>
      <div className="nav-links">

        {/* About Us Dropdown */}
        <div className="nav-item" ref={dropdownRefs.about}>
          <button 
            className="dropdown-btn" 
            onClick={() => handleDropdownClick("about")}
          >
            About Us ▼
          </button>
          {activeDropdown === "about" && (
            <div className="dropdown-menu">
              <a href="#">About Our Team</a>
              <a href="#">About Our Organization</a>
            </div>
          )}
        </div>

        {/* Learn More Dropdown */}
        <div className="nav-item" ref={dropdownRefs.learn}>
          <button 
            className="dropdown-btn" 
            onClick={() => handleDropdownClick("learn")}
          >
            Learn More ▼
          </button>
          {activeDropdown === "learn" && (
            <div className="dropdown-menu">
              <a href="#">Career</a>
              <a href="#">Products</a>
            </div>
          )}
        </div>

        <a href="#">Privacy Policy</a>
      </div>

      <button className="dark-mode-btn" onClick={toggleDarkMode}>🌙</button>
    </nav>
  );
};

export default Navbar;
