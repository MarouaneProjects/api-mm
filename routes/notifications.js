// routes/notifications.js

const express = require('express');
const router = express.Router();
const {
    getAllNotifications,
    getNotificationById,
    createNotification,
    updateNotificationById,
    deleteNotificationById,
} = require('../controllers/notifications');

// Routes
router.get('/', getAllNotifications);
router.get('/:id', getNotificationById);
router.post('/', createNotification);
router.put('/:id', updateNotificationById);
router.delete('/:id', deleteNotificationById);

module.exports = router;
