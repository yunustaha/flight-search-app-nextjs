import { Flight } from '@/app/SearchModel';
import React from 'react';
import { FaPlaneDeparture, FaPlaneArrival } from 'react-icons/fa';

type FlightCardProps = {
  flight: Flight
}

const FlightCard: React.FC<FlightCardProps> = ({ flight }) => {
  const departureDate = new Date(flight.departure_time).toLocaleDateString();
  const departureTime = new Date(flight.departure_time).toLocaleTimeString();
  const arrivalTime = new Date(flight.arrival_time).toLocaleTimeString();

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <div className="text-2xl font-bold text-gray-800 mr-4">{flight.airline}</div>
          <div className="text-gray-500">{flight.id}</div>
        </div>
        <div className="text-xl font-bold text-primary">${flight.price.toFixed(2)}</div>
      </div>
      <div className="mt-4 flex gap-4">
        <div className="flex items-center text-gray-500">
          <FaPlaneDeparture className="mr-2" />
          <div>{flight.departure}</div>
        </div>
        <div className="flex items-center text-gray-500 mt-1">
          <FaPlaneArrival className="mr-2" />
          <div>{flight.destination}</div>
        </div>
      </div>
      <div className="mt-4 text-gray-600">
        <div>Departure: {departureDate} {departureTime}</div>
        <div>Arrival: {arrivalTime}</div>
      </div>
      <div className="mt-4 text-green-600">
        {flight.available_seats} available seats
      </div>
    </div>
  );
};

export default FlightCard;
