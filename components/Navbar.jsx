import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle the hamburger menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Function to close the menu after clicking a link
  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className="nav-main">
    <Link to={'/'} className="logo">
      ArtifyAI
    </Link>
      
      {/* Hamburger Menu */}
      <div className="hamburger" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Navbar Links */}
      <div className={`nav-bar ${isOpen ? 'active' : ''}`}> 
        <Link to="/" className="nav-tabs" onClick={closeMenu}>Home</Link>
        <Link to="/image-generator" className="nav-tabs" onClick={closeMenu}>Image Generator</Link>
        <Link to="/history" className="nav-tabs" onClick={closeMenu}>History</Link>
        <Link to="/pricing" className="nav-tabs" onClick={closeMenu}>Pricing</Link>
        <Link to="/about" className="nav-tabs" onClick={closeMenu}>About Us</Link>
        <Link to="/contact" className="nav-tabs" onClick={closeMenu}>Contact</Link>
        <Link to="/login" className="nav-tabs" onClick={closeMenu}>Login/Signup</Link>
      </div>
    </div>
  );
};

export default Navbar;
