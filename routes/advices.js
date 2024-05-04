// routes/advices.js
const express = require('express');
const router = express.Router();
const { getAllAdvices, getAdviceById, createAdvice, updateAdvice, deleteAdvice } = require('../controllers/advices');

// Routes
router.get('/', getAllAdvices);
router.get('/:id', getAdviceById);
router.post('/', createAdvice);
router.put('/:id', updateAdvice);
router.delete('/:id', deleteAdvice);

module.exports = router;
