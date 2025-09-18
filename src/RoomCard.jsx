// components/RoomCard.js
import React from 'react';
import './RoomCard.css';

const RoomCard = ({ room }) => {
  const isClean = room.status === 'clean';
  return (
    <div className={`room-card ${isClean ? 'clean' : 'dirty'}`}>
      <h4>Room {room.number}</h4>
      <p>{room.type}</p>
      {room.guest && <p><strong>{room.guest}</strong></p>}
    </div>
  );
};

export default RoomCard;