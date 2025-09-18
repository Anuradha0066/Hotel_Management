// components/Navbar.js
import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="left">
        <span className="quick-links">Quick Links</span>
      </div>
      <div className="center">
        <span className="date">03-Sep-2023</span>
        <span className="hotel-name">HOTEL ASHIRWAD</span>
      </div>
      <div className="right">
        <select className="stay-dropdown">
          <option>Stay Overview</option>
        </select>
        <button className="new-reservation">New Reservation</button>
      </div>
    </div>
  );
};

export default Navbar;