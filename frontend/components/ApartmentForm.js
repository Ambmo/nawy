'use client';

import React from 'react';

const ApartmentForm = ({
  name,
  description,
  price,
  address,
  setName,
  setDescription,
  setPrice,
  setAddress,
  handleSubmit,
}) => {
  return (
    <div
      className="relative p-6 bg-cover bg-center"
      style={{
        backgroundImage: 'url(/rental-application-form.jpg)',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <form onSubmit={handleSubmit} className="space-y-4 bg-white bg-opacity-75 p-6 rounded-lg shadow-lg">
        <div className="flex flex-col">
          <label htmlFor="name" className="text-lg font-semibold mb-1">Name:</label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border border-gray-300 rounded-lg p-2"
            required
          />
        </div>
        
        <div className="flex flex-col">
          <label htmlFor="description" className="text-lg font-semibold mb-1">Description:</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="border border-gray-300 rounded-lg p-2"
            rows="4"
            required
          />
        </div>
        
        <div className="flex flex-col">
          <label htmlFor="address" className="text-lg font-semibold mb-1">Address:</label>
          <input
            id="address"
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="border border-gray-300 rounded-lg p-2"
            required
          />
        </div>
        
        <div className="flex flex-col">
          <label htmlFor="price" className="text-lg font-semibold mb-1">Price:</label>
          <input
            id="price"
            type="number"
            value={price}
            onChange={(e) => setPrice(parseFloat(e.target.value))}
            className="border border-gray-300 rounded-lg p-2"
            step="0.01"
            required
          />
        </div>
        
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
        >
          Add Apartment
        </button>
      </form>
    </div>
  );
};

export default ApartmentForm;
