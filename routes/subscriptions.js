// routes/subscriptions.js

const express = require('express');
const router = express.Router();
const {
    getAllSubscriptions,
    getSubscriptionById,
    createSubscription,
    updateSubscriptionById,
    deleteSubscriptionById,
} = require('../controllers/subscriptions');

// Routes
router.get('/', getAllSubscriptions);
router.get('/:id', getSubscriptionById);
router.post('/', createSubscription);
router.put('/:id', updateSubscriptionById);
router.delete('/:id', deleteSubscriptionById);

module.exports = router;
