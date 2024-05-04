// routes/messages.js
const express = require('express');
const router = express.Router();
const { getAllMessages, getMessageById, createMessage, updateMessage, deleteMessage } = require('../controllers/messages');

// Routes
router.get('/', getAllMessages);
router.get('/:id', getMessageById);
router.post('/', createMessage);
router.put('/:id', updateMessage);
router.delete('/:id', deleteMessage);

module.exports = router;
