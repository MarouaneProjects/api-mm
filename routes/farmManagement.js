// routes/farmManagement.js

const express = require('express');
const router = express.Router();
const {
    getAllFarmManagementActivities,
    getFarmManagementActivityById,
    createFarmManagementActivity,
} = require('../controllers/farmManagement');

// Routes
router.get('/', getAllFarmManagementActivities);
router.get('/:FarmID/:FarmerID', getFarmManagementActivityById);
router.post('/', createFarmManagementActivity);

module.exports = router;
