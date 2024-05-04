// routes/variablePrices.js
const express = require('express');
const router = express.Router();
const { getAllVariablePrices, getVariablePriceById, createVariablePrice, updateVariablePrice } = require('../services/variablePrices');

// Routes
router.get('/', getAllVariablePrices);
router.get('/:PriceID', getVariablePriceById);
router.post('/', createVariablePrice);
router.put('/:PriceID', updateVariablePrice); // Add update route

module.exports = router;
