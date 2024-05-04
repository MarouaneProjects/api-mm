// controllers/notifications.js

const { Notification } = require('../models/notifications');

// Controller functions

// Get all notifications
const getAllNotifications = async (req, res) => {
    try {
        const notifications = await Notification.findAll();
        res.json(notifications);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get notification by ID
const getNotificationById = async (req, res) => {
    const { id } = req.params;
    try {
        const notification = await Notification.findByPk(id);
        if (notification) {
            res.json(notification);
        } else {
            res.status(404).json({ error: 'Notification not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Create new notification
const createNotification = async (req, res) => {
    const { UserID, Message, Timestamp } = req.body;
    try {
        const notification = await Notification.create({ UserID, Message, Timestamp });
        res.status(201).json(notification);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Update notification by ID
const updateNotificationById = async (req, res) => {
    const { id } = req.params;
    const { UserID, Message, Timestamp } = req.body;
    try {
        const notification = await Notification.findByPk(id);
        if (notification) {
            await notification.update({ UserID, Message, Timestamp });
            res.json({ message: 'Notification updated successfully' });
        } else {
            res.status(404).json({ error: 'Notification not found' });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Delete notification by ID
const deleteNotificationById = async (req, res) => {
    const { id } = req.params;
    try {
        const notification = await Notification.findByPk(id);
        if (notification) {
            await notification.destroy();
            res.json({ message: 'Notification deleted successfully' });
        } else {
            res.status(404).json({ error: 'Notification not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    getAllNotifications,
    getNotificationById,
    createNotification,
    updateNotificationById,
    deleteNotificationById,
};
