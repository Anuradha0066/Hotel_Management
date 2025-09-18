// components/Sidebar.js
import React from 'react';
import './Sidebar.css';

const Sidebar = () => {
  const menuItems = [
    'Dashboard',
    'Stay Overview',
    'Front Office',
    'House Keeping',
    'F&B',
    'Maintenance',
    'Administration',
    'Logout',
  ];

  return (
    <div className="sidebar">
      {menuItems.map((item, index) => (
        <div key={index} className="sidebar-item">
          {item}
        </div>
      ))}
    </div>
  );
};

export default Sidebar;