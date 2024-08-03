'use client';

import React from 'react';

const ApartmentCard = ({ apartment, onClick }) => {
  return (
    <div
      className="bg-white border border-gray-200 rounded-lg shadow-md p-4 cursor-pointer hover:shadow-lg transition-shadow duration-300"
      onClick={() => onClick(apartment.id)}
    >
      <h2 className="text-xl font-semibold mb-2">{apartment.name}</h2>
      <p className="text-gray-600">{apartment.description}</p>
    </div>
  );
};

export default ApartmentCard;
