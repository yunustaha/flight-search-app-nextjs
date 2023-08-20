import React from 'react';
import { FaPlaneDeparture } from 'react-icons/fa';

const FlightTitleCard = () => {
  return (
    <div className="bg-primary text-white rounded-t-lg p-4 flex items-center justify-between">
      <div className="flex items-center">
        <FaPlaneDeparture className="text-3xl mr-2" />
        <div className="text-xl font-bold">Available Flights</div>
      </div>
      <div className="text-gray-300">Today's Deals</div>
    </div>
  );
};

export default FlightTitleCard;
