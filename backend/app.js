// app.js
const express = require('express');
const cors = require('cors');
const sequelize = require('./config/database');
const Apartment = require('./src/models/Apartment');
const apartmentRoutes = require('./src/routes/apartments');
const app = express();

app.use(express.json());
// Enable CORS for all routes
app.use(cors());

// Sync all defined models to the DB
sequelize.sync()
  .then(() => {
    console.log('Database & tables created!');
  })
  .catch(err => {
    console.error('Unable to create tables, shutting down...', err);
    process.exit(1);
  });

// Use the apartment routes
app.use('/api/apartments', apartmentRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
