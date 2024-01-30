// Header.jsx
import React from 'react';
import "./header.css"

const Header = ({ theme, toggleTheme }) => {
  return (
    <header className="header">
      <div className="logo">
        <img src="./src/assets/Brain.png" alt="Website Icon" />
        <span>Think Tank</span>
      </div>
      <button className="theme-button" onClick={toggleTheme}>
        {theme === 'light' ? 'Dark' : 'Light'} Mode
      </button>
    </header>
  );
};

export default Header;
