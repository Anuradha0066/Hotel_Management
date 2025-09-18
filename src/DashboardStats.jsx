// components/DashboardStats.js
import React from 'react';
import './DashboardStats.css';

const stats = [
  { label: 'Occupied Rooms', value: 4 },
  { label: 'Vacant Rooms', value: 17 },
  { label: 'Expected Arrival', value: 0 },
  { label: 'Expected Departure', value: 0 },
  { label: "Today's Checked In", value: 1 },
  { label: "Today's Checked Out", value: 1 },
];

const DashboardStats = () => {
  return (
    <div className="dashboard-stats">
      {stats.map((stat, index) => (
        <div key={index} className="stat-card">
          <h3>{stat.value}</h3>
          <p>{stat.label}</p>
        </div>
      ))}
    </div>
  );
};

export default DashboardStats;