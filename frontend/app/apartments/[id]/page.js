import React from 'react';
import ApartmentDetails from '../../../components/ApartmentDetails';
import { fetchApartmentById } from '../../../services/apartmentService';

const ApartmentPage = async ({ params }) => {
  const { id } = params;
  const apartment = await fetchApartmentById(id);

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <div className="container mx-auto bg-white shadow-md rounded-lg p-6">
        <ApartmentDetails apartment={apartment} />
      </div>
    </div>
  );
};

export default ApartmentPage;
