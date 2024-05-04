// controllers/transactions.js

const { Transaction } = require('../models/transactions');

// Controller functions

// Get all transactions
const getAllTransactions = async (req, res) => {
    try {
        const transactions = await Transaction.findAll();
        res.json(transactions);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get transaction by ID
const getTransactionById = async (req, res) => {
    const { id } = req.params;
    try {
        const transaction = await Transaction.findByPk(id);
        if (transaction) {
            res.json(transaction);
        } else {
            res.status(404).json({ error: 'Transaction not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Create new transaction
const createTransaction = async (req, res) => {
    const { DateEntered, Amount, Status, Type } = req.body;
    try {
        const transaction = await Transaction.create({ DateEntered, Amount, Status, Type });
        res.status(201).json(transaction);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Update transaction by ID
const updateTransactionById = async (req, res) => {
    const { id } = req.params;
    const { DateEntered, Amount, Status, Type } = req.body;
    try {
        const transaction = await Transaction.findByPk(id);
        if (transaction) {
            await transaction.update({ DateEntered, Amount, Status, Type });
            res.json({ message: 'Transaction updated successfully' });
        } else {
            res.status(404).json({ error: 'Transaction not found' });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Delete transaction by ID
const deleteTransactionById = async (req, res) => {
    const { id } = req.params;
    try {
        const transaction = await Transaction.findByPk(id);
        if (transaction) {
            await transaction.destroy();
            res.json({ message: 'Transaction deleted successfully' });
        } else {
            res.status(404).json({ error: 'Transaction not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    getAllTransactions,
    getTransactionById,
    createTransaction,
    updateTransactionById,
    deleteTransactionById,
};
