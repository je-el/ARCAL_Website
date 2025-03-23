import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  const navStyle = {
    backgroundColor: '#333',
    padding: '10px'
  };

  const ulStyle = {
    listStyle: 'none',
    display: 'flex',
    margin: 0,
    padding: 0
  };

  const liStyle = { marginRight: '20px' };

  const linkStyle = {
    color: '#fff',
    textDecoration: 'none'
  };

  return (
    <nav style={navStyle}>
      <ul style={ulStyle}>
         <li style={liStyle}>
           <Link to="/" style={linkStyle}>Home</Link>
         </li>
         <li style={liStyle}>
           <Link to="/privacy-policy" style={linkStyle}>Privacy Policy</Link>
         </li>
         <li>
           <Link to="/support" style={linkStyle}>Support</Link>
         </li>
      </ul>
    </nav>
  );
}

export default NavBar;