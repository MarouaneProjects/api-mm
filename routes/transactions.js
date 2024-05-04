// routes/transactions.js

const express = require('express');
const router = express.Router();
const {
    getAllTransactions,
    getTransactionById,
    createTransaction,
    updateTransactionById,
    deleteTransactionById,
} = require('../controllers/transactions');

// Routes
router.get('/', getAllTransactions);
router.get('/:id', getTransactionById);
router.post('/', createTransaction);
router.put('/:id', updateTransactionById);
router.delete('/:id', deleteTransactionById);

module.exports = router;
