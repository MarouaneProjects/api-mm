// routes/autoSales.js
const express = require('express');
const router = express.Router();
const { getAllAutoSales, getAutoSalesById, createAutoSale, updateAutoSale, deleteAutoSale } = require('../services/autoSales');

// Routes
router.get('/', getAllAutoSales);
router.get('/:id', getAutoSalesById);
router.post('/', createAutoSale);
router.put('/:id', updateAutoSale);
router.delete('/:id', deleteAutoSale);

module.exports = router;
