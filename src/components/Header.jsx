import React from 'react';
import './header.css';
import logo from '../assets/logo.png'; 

const Header = () => {
  return (
    <header className="header">
      <div className="logo-container">
        <img src={logo} alt="GrooveNest Logo" className="logo" />
        <h1 className="logo-text">GrooveNest</h1>
      </div>
    </header>
  );
};

export default Header;
