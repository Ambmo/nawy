'use client';

import React from 'react';
import ApartmentCard from '../components/ApartmentCard';

const ApartmentList = ({ apartments, onCardClick }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {apartments.map(apartment => (
        <ApartmentCard
          key={apartment.id}
          apartment={apartment}
          onClick={onCardClick}
        />
      ))}
    </div>
  );
};

export default ApartmentList;
