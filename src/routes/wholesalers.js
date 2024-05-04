// routes/wholesalers.js

const express = require('express');
const router = express.Router();
const {
    getAllWholesalers,
    getWholesalerById,
    createWholesaler,
    updateWholesalerById,
    deleteWholesalerById,
} = require('../services/wholesalers');

// Routes
router.get('/', getAllWholesalers);
router.get('/:id', getWholesalerById);
router.post('/', createWholesaler);
router.put('/:id', updateWholesalerById);
router.delete('/:id', deleteWholesalerById);

module.exports = router;
