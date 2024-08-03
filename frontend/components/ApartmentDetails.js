'use client';

import React from 'react';
import { useRouter } from 'next/navigation';

const ApartmentDetails = ({ apartment }) => {
  const router = useRouter();

  if (!apartment) return <p>Loading...</p>;

  return (
    <div>
      <button
        onClick={() => router.back()}
        className="absolute top-4 left-4 text-black text-2xl hover:text-gray-700 z-10"
      >
        &larr;
      </button>
      <div
        className="relative container mx-auto p-4 bg-cover bg-no-repeat bg-center"
        style={{ backgroundImage: 'url(/OIP.jpeg)' }} // Path relative to the public folder
      >

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-50"></div>
        <div className="relative bg-white shadow-md rounded-lg p-6 bg-opacity-80 z-10">
          <h1 className="text-2xl font-bold mb-4 text-gray-800">
            {apartment.name}
          </h1>
          <div className="space-y-2 text-gray-700">
            <p>{apartment.description}</p>
            <p>{apartment.address}</p>
            <p className="font-semibold">${apartment.price}</p>
          </div>
        </div>
      </div>
    </div>


  );
};

export default ApartmentDetails;
