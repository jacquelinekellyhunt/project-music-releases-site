import React from 'react';
import './styling/header.css';  // Ensure that styling is imported
import logo from '../assets/logo.png';  // Adjust the path if necessary

const Header = () => {
  return (
    <header className="header">
      <img src={logo} alt="GrooveNest Logo" className="logo" />
    </header>
  );
};

export default Header;  // Default export for Header
