import React from "react";
import "./MenuBar.css";

const MenuBar = ({ onMenuItemClick }) => {
  const handleItemClick = (content) => {
    onMenuItemClick(content);
  };

  return (
    <div className="menu-bar">
      <ul className="menu-list">
        <li>
          <button onClick={() => handleItemClick("Instruments")}>
            Instruments
          </button>
        </li>
        <li>
          <button onClick={() => handleItemClick("Data Collection")}>
            Data Collection
          </button>
        </li>
        <li>
          <button onClick={() => handleItemClick("Advanced Measurements")}>
            Advanced Measurements
          </button>
        </li>
        <li>
          <button onClick={() => handleItemClick("Plotting")}>Plotting</button>
        </li>
        <li>
          <button onClick={() => handleItemClick("Database")}>Database</button>
        </li>
        <li>
          <button onClick={() => handleItemClick("ReadMe")}>ReadMe</button>
        </li>
      </ul>
    </div>
  );
};

export default MenuBar;
