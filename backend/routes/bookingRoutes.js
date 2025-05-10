const express = require('express');
const router = express.Router();
const db = require('../models');

router.get('/vehicle-types', async (req, res) => {
  const { wheels } = req.query;
  try {
    if (wheels === '2') {
      const bikeTypes = await db.BikeType.findAll();
      res.json(bikeTypes);
    } else if (wheels === '4') {
      const carTypes = await db.CarType.findAll();
      res.json(carTypes);
    } else {
      res.status(400).json({ message: 'Invalid number of wheels' });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
