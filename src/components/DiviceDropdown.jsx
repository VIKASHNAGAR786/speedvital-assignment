import React from "react";
import "./DeviceDropdown.css"; // Import CSS file

const DeviceDropdown = ({ setDevice }) => {
  return (
    <div className="device-dropdown-wrapper">
      <div className="device-dropdown">
        <label htmlFor="device-select">Choose a device:</label>
        <select id="device-select" onChange={(e) => setDevice(e.target.value)}>
          <option value="desktop">Desktop</option>
          <option value="mobile">Mobile</option>
        </select>
      </div>
    </div>
  );
};

export default DeviceDropdown;
