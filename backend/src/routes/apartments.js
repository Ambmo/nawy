const express = require('express');
const router = express.Router();
const Apartment = require('../models/Apartment');

// Get all apartments
router.get('/', async (req, res) => {
  try {
    const apartments = await Apartment.findAll();
    res.json(apartments);
  } catch (error) {
    console.error('Error fetching apartments:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

// Get apartment by id
router.get('/:id', async (req, res) => {
  try {
    const apartment = await Apartment.findByPk(req.params.id);
    if (apartment) {
      res.json(apartment);
    } else {
      res.status(404).json({ message: 'Apartment not found' });
    }
  } catch (error) {
    console.error('Error fetching apartment:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

// Add a new apartment
router.post('/', async (req, res) => {
  try {
    const newApartment = await Apartment.create(req.body);
    res.status(201).json(newApartment);
  } catch (error) {
    console.error('Error creating apartment:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

module.exports = router;
