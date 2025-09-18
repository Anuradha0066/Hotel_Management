// DashboardPage.js
import React from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import DashboardStats from './DashboardStats';
import RoomGrid from './RoomGrid';

const DashboardPage = () => {
  return (
    <>
      <Navbar />
      <div style={{ display: 'flex' }}>
        <Sidebar />
        <main style={{ flex: 1, padding: '20px' }}>
          <DashboardStats />
          <RoomGrid />
        </main>
      </div>
    </>
  );
};

export default DashboardPage;