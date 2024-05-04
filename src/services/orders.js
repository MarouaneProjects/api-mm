// controllers/orders.js

const { Order } = require('../models/orders');

// Controller functions

// Get all orders
const getAllOrders = async (req, res) => {
    try {
        const orders = await Order.findAll();
        res.json(orders);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get order by ID
const getOrderById = async (req, res) => {
    const { id } = req.params;
    try {
        const order = await Order.findByPk(id);
        if (order) {
            res.json(order);
        } else {
            res.status(404).json({ error: 'Order not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Create new order
const createOrder = async (req, res) => {
    const { TransactionID, FarmerID, WholesalerID, ProductID, Quantity, Status, DateEntered } = req.body;
    try {
        const order = await Order.create({ TransactionID, FarmerID, WholesalerID, ProductID, Quantity, Status, DateEntered });
        res.status(201).json(order);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Update order by ID
const updateOrderById = async (req, res) => {
    const { id } = req.params;
    const { TransactionID, FarmerID, WholesalerID, ProductID, Quantity, Status, DateEntered } = req.body;
    try {
        const order = await Order.findByPk(id);
        if (order) {
            await order.update({ TransactionID, FarmerID, WholesalerID, ProductID, Quantity, Status, DateEntered });
            res.json({ message: 'Order updated successfully' });
        } else {
            res.status(404).json({ error: 'Order not found' });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Delete order by ID
const deleteOrderById = async (req, res) => {
    const { id } = req.params;
    try {
        const order = await Order.findByPk(id);
        if (order) {
            await order.destroy();
            res.json({ message: 'Order deleted successfully' });
        } else {
            res.status(404).json({ error: 'Order not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    getAllOrders,
    getOrderById,
    createOrder,
    updateOrderById,
    deleteOrderById,
};
