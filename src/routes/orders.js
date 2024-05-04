// routes/orders.js

const express = require('express');
const router = express.Router();
const {
    getAllOrders,
    getOrderById,
    createOrder,
    updateOrderById,
    deleteOrderById,
} = require('../services/orders');

// Routes
router.get('/', getAllOrders);
router.get('/:id', getOrderById);
router.post('/', createOrder);
router.put('/:id', updateOrderById);
router.delete('/:id', deleteOrderById);

module.exports = router;
