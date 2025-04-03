import React from 'react';

import { FaBarsProgress } from "react-icons/fa6";

const Header = ({ toggleSidebar, toggleDarkMode, darkMode }) => {
  return (
    <header className="header">
      <div className="header-left">
        <button className="menu-btn" onClick={toggleSidebar}>
          <span className="menu-icon"><FaBarsProgress /></span>
        </button>
        <h1 className="logo">KODEVEST</h1>
      </div>
      <div className="header-right">
        <button className="dark-mode-toggle" onClick={toggleDarkMode}>
          {darkMode ? '☀️' : '🌙'}
        </button>
        <div className="user-profile">
          <span className="user-name">Naruto Uzumaki</span>
          <img 
            src="https://randomuser.me/api/portraits/men/1.jpg" 
            alt="User" 
            className="user-avatar" 
          />
        </div>
      </div>
    </header>
  );
};

export default Header;