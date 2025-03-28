import React from 'react';
import { Link } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">ARCal</Link>
      </div>
      <div className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/privacy-policy">Privacy Policy</Link>
        <Link to="/support">Support</Link>
      </div>
      <ThemeToggle />
    </nav>
  );
};

export default Navbar;