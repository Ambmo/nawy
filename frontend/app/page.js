'use client';

import React, { useEffect, useState } from 'react';
import useDeviceDetect from '../utils/useDeviceDetect';
import { fetchApartments } from '../services/apartmentService';
import ApartmentList from '../components/ApartmentList';
import { useRouter } from 'next/navigation';

const HomePage = () => {
  const { isMobile } = useDeviceDetect();
  const [apartments, setApartments] = useState([]);
  const [error, setError] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const getApartments = async () => {
      try {
        const data = await fetchApartments();
        setApartments(data);
      } catch (error) {
        setError(error.message);
      }
    };

    getApartments();
  }, []);

  const handleCardClick = (id) => {
    router.push(`/apartments/${id}`);
  };

  const handleAddApartmentClick = () => {
    router.push('/add-apartment');
  };

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div
      className="relative min-h-screen bg-cover bg-no-repeat"
      style={{
        backgroundImage: 'url(/apartments.jpeg)', // Update this path if necessary
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="p-6">
        {/* Only render the link on web view */}
        {!isMobile && (
          <a
            onClick={handleAddApartmentClick}
            className="block text-white bg-blue-500 hover:bg-blue-600 py-2 px-4 rounded-lg mb-6 text-center"
            href="#"
          >
            Add Apartment
          </a>
        )}
        <ApartmentList apartments={apartments} onCardClick={handleCardClick} />
      </div>
    </div>
  );
};

export default HomePage;
