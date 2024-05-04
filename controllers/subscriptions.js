// controllers/subscriptions.js

const { Subscription } = require('../models/subscriptions');

// Controller functions

// Get all subscriptions
const getAllSubscriptions = async (req, res) => {
    try {
        const subscriptions = await Subscription.findAll();
        res.json(subscriptions);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get subscription by ID
const getSubscriptionById = async (req, res) => {
    const { id } = req.params;
    try {
        const subscription = await Subscription.findByPk(id);
        if (subscription) {
            res.json(subscription);
        } else {
            res.status(404).json({ error: 'Subscription not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Create new subscription
const createSubscription = async (req, res) => {
    const { UserID, Plan, StartDate, EndDate } = req.body;
    try {
        const subscription = await Subscription.create({ UserID, Plan, StartDate, EndDate });
        res.status(201).json(subscription);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Update subscription by ID
const updateSubscriptionById = async (req, res) => {
    const { id } = req.params;
    const { UserID, Plan, StartDate, EndDate } = req.body;
    try {
        const subscription = await Subscription.findByPk(id);
        if (subscription) {
            await subscription.update({ UserID, Plan, StartDate, EndDate });
            res.json({ message: 'Subscription updated successfully' });
        } else {
            res.status(404).json({ error: 'Subscription not found' });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Delete subscription by ID
const deleteSubscriptionById = async (req, res) => {
    const { id } = req.params;
    try {
        const subscription = await Subscription.findByPk(id);
        if (subscription) {
            await subscription.destroy();
            res.json({ message: 'Subscription deleted successfully' });
        } else {
            res.status(404).json({ error: 'Subscription not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    getAllSubscriptions,
    getSubscriptionById,
    createSubscription,
    updateSubscriptionById,
    deleteSubscriptionById,
};
