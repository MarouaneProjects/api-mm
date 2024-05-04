// controllers/farms.js
const Farm = require('../models/farms');

// Get all farms
exports.getAllFarms = async (req, res) => {
    try {
        const farms = await Farm.findAll();
        res.json(farms);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};

// Get farm by ID
exports.getFarmById = async (req, res) => {
    const id = req.params.id;
    try {
        const farm = await Farm.findByPk(id);
        if (!farm) {
            return res.status(404).json({ msg: 'Farm not found' });
        }
        res.json(farm);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};

// Create a new farm
exports.createFarm = async (req, res) => {
    const { FarmerID, FarmName, Location, SubscriptionStatus } = req.body;
    try {
        const farm = await Farm.create({
            FarmerID,
            FarmName,
            Location,
            SubscriptionStatus
        });
        res.json(farm);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};

// Update farm
exports.updateFarm = async (req, res) => {
    const id = req.params.id;
    const { FarmerID, FarmName, Location, SubscriptionStatus } = req.body;
    try {
        let farm = await Farm.findByPk(id);
        if (!farm) {
            return res.status(404).json({ msg: 'Farm not found' });
        }
        farm = await Farm.update(
            {
                FarmerID,
                FarmName,
                Location,
                SubscriptionStatus
            },
            {
                where: {
                    FarmID: id
                }
            }
        );
        res.json(farm);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};

// Delete farm
exports.deleteFarm = async (req, res) => {
    const id = req.params.id;
    try {
        let farm = await Farm.findByPk(id);
        if (!farm) {
            return res.status(404).json({ msg: 'Farm not found' });
        }
        await Farm.destroy({
            where: {
                FarmID: id
            }
        });
        res.json({ msg: 'Farm deleted' });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};
