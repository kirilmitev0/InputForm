import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './NavbarStyle.css'; 

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };
  
    return (
      <nav className="navbar">
        <div className="navbar-logo">
          <a href="/">Home</a>
        </div>
        <div className={`navbar-links ${isOpen ? 'active' : ''}`}>
          <a href="/login">Login</a>
          <a href="/signup">Sign Up</a>
        </div>
        <div className="burger-menu" onClick={toggleMenu}>
          <div className={`line ${isOpen ? 'open' : ''}`}></div>
          <div className={`line ${isOpen ? 'open' : ''}`}></div>
          <div className={`line ${isOpen ? 'open' : ''}`}></div>
        </div>
      </nav>
    );
  };
  
  export default Navbar;