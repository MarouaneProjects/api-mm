// controllers/variablePrices.js

const { VariablePrice } = require('../models/variablePrices');

// Controller functions

// Get all variable prices
const getAllVariablePrices = async (req, res) => {
    try {
        const variablePrices = await VariablePrice.findAll();
        res.json(variablePrices);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get variable price by PriceID
const getVariablePriceById = async (req, res) => {
    const { PriceID } = req.params;
    try {
        const variablePrice = await VariablePrice.findByPk(PriceID);
        if (variablePrice) {
            res.json(variablePrice);
        } else {
            res.status(404).json({ error: 'Variable price not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Create new variable price
const createVariablePrice = async (req, res) => {
    const { Price, Region } = req.body;
    try {
        const variablePrice = await VariablePrice.create({ Price, Region });
        res.status(201).json(variablePrice);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Update variable price by PriceID
const updateVariablePrice = async (req, res) => {
    const { PriceID } = req.params;
    const { Price, Region } = req.body;
    try {
        const variablePrice = await VariablePrice.findByPk(PriceID);
        if (variablePrice) {
            await variablePrice.update({ Price, Region });
            res.json(variablePrice);
        } else {
            res.status(404).json({ error: 'Variable price not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    getAllVariablePrices,
    getVariablePriceById,
    createVariablePrice,
    updateVariablePrice,
};
