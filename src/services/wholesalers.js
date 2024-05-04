// controllers/wholesalers.js

const { Wholesaler } = require('../models/wholesalers');

// Controller functions

// Get all wholesalers
const getAllWholesalers = async (req, res) => {
    try {
        const wholesalers = await Wholesaler.findAll();
        res.json(wholesalers);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get wholesaler by ID
const getWholesalerById = async (req, res) => {
    const { id } = req.params;
    try {
        const wholesaler = await Wholesaler.findByPk(id);
        if (wholesaler) {
            res.json(wholesaler);
        } else {
            res.status(404).json({ error: 'Wholesaler not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Create new wholesaler
const createWholesaler = async (req, res) => {
    const { UserID, CompanyName, Location, SubscriptionStatus } = req.body;
    try {
        const wholesaler = await Wholesaler.create({ UserID, CompanyName, Location, SubscriptionStatus });
        res.status(201).json(wholesaler);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Update wholesaler by ID
const updateWholesalerById = async (req, res) => {
    const { id } = req.params;
    const { UserID, CompanyName, Location, SubscriptionStatus } = req.body;
    try {
        const wholesaler = await Wholesaler.findByPk(id);
        if (wholesaler) {
            await wholesaler.update({ UserID, CompanyName, Location, SubscriptionStatus });
            res.json({ message: 'Wholesaler updated successfully' });
        } else {
            res.status(404).json({ error: 'Wholesaler not found' });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Delete wholesaler by ID
const deleteWholesalerById = async (req, res) => {
    const { id } = req.params;
    try {
        const wholesaler = await Wholesaler.findByPk(id);
        if (wholesaler) {
            await wholesaler.destroy();
            res.json({ message: 'Wholesaler deleted successfully' });
        } else {
            res.status(404).json({ error: 'Wholesaler not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    getAllWholesalers,
    getWholesalerById,
    createWholesaler,
    updateWholesalerById,
    deleteWholesalerById,
};
