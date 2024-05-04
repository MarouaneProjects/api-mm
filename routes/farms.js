// routes/farms.js
const express = require('express');
const router = express.Router();
const { getAllFarms, getFarmById, createFarm, updateFarm, deleteFarm } = require('../controllers/farms');

// Routes
router.get('/', getAllFarms);
router.get('/:id', getFarmById);
router.post('/', createFarm);
router.put('/:id', updateFarm);
router.delete('/:id', deleteFarm);

module.exports = router;
