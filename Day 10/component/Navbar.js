
import React from 'react';
import './Navbar.css'; // Import the CSS file for styling (ensure the correct path)
import { FaBell, FaEnvelope, FaExclamationTriangle } from 'react-icons/fa';
import { Link } from 'react-router-dom'; // Import the Link component




function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <FaExclamationTriangle size={24} />
        <span>Crime Hut</span>
      </div>
      <ul className="nav-list">
        <li className="nav-item">
          <Link to="/notification"> {/* Use Link component with 'to' prop */}
            <FaBell size={18} />
            <span>Notification</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="Chat"> 
            <FaEnvelope size={18} />
            <span>Chat Here</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
 