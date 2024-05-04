// controllers/farmManagement.js

const { FarmManagement } = require('../models/farmManagement');

// Controller functions

// Get all farm management activities
const getAllFarmManagementActivities = async (req, res) => {
    try {
        const farmManagementActivities = await FarmManagement.findAll();
        res.json(farmManagementActivities);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get farm management activity by FarmID and FarmerID
const getFarmManagementActivityById = async (req, res) => {
    const { FarmID, FarmerID } = req.params;
    try {
        const farmManagementActivity = await FarmManagement.findOne({
            where: { FarmID, FarmerID },
        });
        if (farmManagementActivity) {
            res.json(farmManagementActivity);
        } else {
            res.status(404).json({ error: 'Farm management activity not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Create new farm management activity
const createFarmManagementActivity = async (req, res) => {
    const { FarmID, FarmerID, Activity, DateEntered, Description } = req.body;
    try {
        const farmManagementActivity = await FarmManagement.create({
            FarmID,
            FarmerID,
            Activity,
            DateEntered,
            Description,
        });
        res.status(201).json(farmManagementActivity);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = {
    getAllFarmManagementActivities,
    getFarmManagementActivityById,
    createFarmManagementActivity,
};
