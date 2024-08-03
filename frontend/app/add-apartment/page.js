'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import ApartmentForm from '../../components/ApartmentForm';
import { addApartment } from '../../services/apartmentService';

const AddApartmentPage = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [address, setAddress] = useState('');
  const [price, setPrice] = useState(0.00);

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const apartment = { name, description, address, price };
    const result = await addApartment(apartment);

    if (result) {
      alert('Apartment added successfully!');
      setName('');
      setDescription('');
      setPrice(0.00);
      setAddress('');
    } else {
      alert('Failed to add apartment');
    }
  };

  const handleReturnClick = () => {
    router.push('/');
  };

  return (
    <div className="container mx-auto p-6">
      <div className="flex items-center mb-6">
        <button 
          onClick={handleReturnClick} 
          className="text-black text-2xl p-1 mr-4"
        >
          &larr;
        </button>
        <h1 className="text-3xl font-bold">Add New Apartment</h1>
      </div>
      <div className="bg-white shadow-md rounded-lg p-6">
        <ApartmentForm
          name={name}
          description={description}
          price={price}
          address={address}
          setName={setName}
          setDescription={setDescription}
          setPrice={setPrice}
          setAddress={setAddress}
          handleSubmit={handleSubmit}
        />
      </div>
    </div>
  );
};

export default AddApartmentPage;
