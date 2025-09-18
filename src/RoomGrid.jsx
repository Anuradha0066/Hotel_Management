// components/RoomGrid.js
import React from 'react';
import RoomCard from './RoomCard';
import './RoomGrid.css';

const rooms = [
  { number: 101, type: 'Deluxe Room', status: 'clean' },
  { number: 102, type: 'Economy Room', status: 'dirty' },
  { number: 103, type: 'Executive Room', status: 'dirty', guest: 'ROHIT RAMESH' },
  { number: 104, type: 'Executive Room', status: 'dirty', guest: 'ANKIT RATHI' },
  { number: 105, type: 'Deluxe Room', status: 'clean' },
  { number: 106, type: 'Economy Room', status: 'clean' },
  { number: 107, type: 'Executive Room', status: 'dirty', guest: 'PRAMOD GAIKWAD' },
  { number: 108, type: 'Economy Room', status: 'dirty' },
  { number: 109, type: 'Deluxe Room', status: 'dirty' },
];

const RoomGrid = () => {
  return (
    <div className="room-grid">
      {rooms.map((room, index) => (
        <RoomCard key={index} room={room} />
      ))}
    </div>
  );
};

export default RoomGrid;