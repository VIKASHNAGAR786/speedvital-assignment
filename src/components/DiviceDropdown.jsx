import React from "react";

const DeviceDropdown = ({ setDevice }) => {
  return (
    <select onChange={(e) => setDevice(e.target.value)}>
      <option value="desktop">Desktop</option>
      <option value="mobile">Mobile</option>
    </select>
  );
};

export default DeviceDropdown;
