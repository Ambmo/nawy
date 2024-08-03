const API_BASE_URL = 'http://localhost:5000/api';

export const fetchApartments = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/apartments`);
    if (!response.ok) throw new Error('Failed to fetch apartments');
    return await response.json();
  } catch (error) {
    console.error('Error fetching apartments:', error);
    return [];
  }
};

export const fetchApartmentById = async (id) => {
  try {
    const response = await fetch(`${API_BASE_URL}/apartments/${id}`);
    if (!response.ok) throw new Error('Failed to fetch apartment details');
    return await response.json();
  } catch (error) {
    console.error('Error fetching apartment details:', error);
    return null;
  }
};

export const addApartment = async (apartment) => {
  try {
    const response = await fetch(`${API_BASE_URL}/apartments`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(apartment),
    });

    if (!response.ok) throw new Error('Failed to add apartment');
    return await response.json();
  } catch (error) {
    console.error('Error adding apartment:', error);
    return null;
  }
};
