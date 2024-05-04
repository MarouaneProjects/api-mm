// controllers/autoSales.js
const AutoSales = require('../models/autoSales');

// Get all auto sales
exports.getAllAutoSales = async (req, res) => {
    try {
        const autoSales = await AutoSales.findAll();
        res.json(autoSales);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};

// Get auto sale by ID
exports.getAutoSalesById = async (req, res) => {
    const id = req.params.id;
    try {
        const autoSales = await AutoSales.findByPk(id);
        if (!autoSales) {
            return res.status(404).json({ msg: 'Auto sale not found' });
        }
        res.json(autoSales);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};

// Create a new auto sale
exports.createAutoSale = async (req, res) => {
    const { DateEntered, QuantityOfChick, AgeOfChick, FarmID } = req.body;
    try {
        const autoSale = await AutoSales.create({
            DateEntered,
            QuantityOfChick,
            AgeOfChick,
            FarmID
        });
        res.json(autoSale);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};

// Update auto sale
exports.updateAutoSale = async (req, res) => {
    const id = req.params.id;
    const { DateEntered, QuantityOfChick, AgeOfChick, FarmID } = req.body;
    try {
        let autoSale = await AutoSales.findByPk(id);
        if (!autoSale) {
            return res.status(404).json({ msg: 'Auto sale not found' });
        }
        autoSale = await AutoSales.update(
            {
                DateEntered,
                QuantityOfChick,
                AgeOfChick,
                FarmID
            },
            {
                where: {
                    AuID: id
                }
            }
        );
        res.json(autoSale);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};

// Delete auto sale
exports.deleteAutoSale = async (req, res) => {
    const id = req.params.id;
    try {
        let autoSale = await AutoSales.findByPk(id);
        if (!autoSale) {
            return res.status(404).json({ msg: 'Auto sale not found' });
        }
        await AutoSales.destroy({
            where: {
                AuID: id
            }
        });
        res.json({ msg: 'Auto sale deleted' });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};
