// routes/farmers.js

const express = require('express');
const router = express.Router();
const {
    getAllFarmers,
    getFarmerById,
    createFarmer,
    updateFarmerById,
    deleteFarmerById,
} = require('../services/farmers');

// Routes
router.get('/', getAllFarmers);
router.get('/:id', getFarmerById);
router.post('/', createFarmer);
router.put('/:id', updateFarmerById);
router.delete('/:id', deleteFarmerById);

module.exports = router;
