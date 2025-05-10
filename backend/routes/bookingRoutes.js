const express = require('express');
const router = express.Router();
const { CarType, BikeType, Vehicle, Booking } = require('../models');
const { Op } = require('sequelize');

// GET all car types
router.get('/car-types', async (req, res) => {
  const carTypes = await CarType.findAll();
  res.json(carTypes);
});

// GET all bike types
router.get('/bike-types', async (req, res) => {
  const bikeTypes = await BikeType.findAll();
  res.json(bikeTypes);
});

// GET vehicles by type ID
router.get('/vehicles', async (req, res) => {
  const { carTypeId, bikeTypeId } = req.query;

  const where = {};
  if (carTypeId) where.carTypeId = carTypeId;
  if (bikeTypeId) where.bikeTypeId = bikeTypeId;

  const vehicles = await Vehicle.findAll({ where });
  res.json(vehicles);
});

// POST booking
router.post('/book', async (req, res) => {
  const { userName, vehicleId, startDate, endDate } = req.body;

  // Check if vehicle is already booked during requested time
  const overlappingBooking = await Booking.findOne({
    where: {
      vehicleId,
      [Op.or]: [
        {
          startDate: { [Op.between]: [startDate, endDate] }
        },
        {
          endDate: { [Op.between]: [startDate, endDate] }
        },
        {
          startDate: { [Op.lte]: startDate },
          endDate: { [Op.gte]: endDate }
        }
      ]
    }
  });

  if (overlappingBooking) {
    return res.status(400).json({ error: 'Vehicle already booked in this date range.' });
  }

  const newBooking = await Booking.create({ userName, vehicleId, startDate, endDate });
  res.json(newBooking);
});

module.exports = router;
