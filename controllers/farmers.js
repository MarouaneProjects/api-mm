// controllers/farmers.js

const { Farmer } = require('../models/farmers');

// Controller functions

// Get all farmers
const getAllFarmers = async (req, res) => {
    try {
        const farmers = await Farmer.findAll();
        res.json(farmers);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get farmer by ID
const getFarmerById = async (req, res) => {
    const { id } = req.params;
    try {
        const farmer = await Farmer.findByPk(id);
        if (farmer) {
            res.json(farmer);
        } else {
            res.status(404).json({ error: 'Farmer not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Create new farmer
const createFarmer = async (req, res) => {
    const { UserID, FarmName, Location, SubscriptionStatus } = req.body;
    try {
        const farmer = await Farmer.create({ UserID, FarmName, Location, SubscriptionStatus });
        res.status(201).json(farmer);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Update farmer by ID
const updateFarmerById = async (req, res) => {
    const { id } = req.params;
    const { UserID, FarmName, Location, SubscriptionStatus } = req.body;
    try {
        const farmer = await Farmer.findByPk(id);
        if (farmer) {
            await farmer.update({ UserID, FarmName, Location, SubscriptionStatus });
            res.json({ message: 'Farmer updated successfully' });
        } else {
            res.status(404).json({ error: 'Farmer not found' });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Delete farmer by ID
const deleteFarmerById = async (req, res) => {
    const { id } = req.params;
    try {
        const farmer = await Farmer.findByPk(id);
        if (farmer) {
            await farmer.destroy();
            res.json({ message: 'Farmer deleted successfully' });
        } else {
            res.status(404).json({ error: 'Farmer not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    getAllFarmers,
    getFarmerById,
    createFarmer,
    updateFarmerById,
    deleteFarmerById,
};
