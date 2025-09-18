// App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './Login';
import DashboardPage from './DashboardPage'; // ✅ Import the unified dashboard

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<DashboardPage />} /> 
    </Routes>
  );
}

export default App;