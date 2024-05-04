// controllers/promotions.js
const Promotion = require('../models/promotions');

// Get all promotions
exports.getAllPromotions = async (req, res) => {
    try {
        const promotions = await Promotion.findAll();
        res.json(promotions);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};

// Get promotion by ID
exports.getPromotionById = async (req, res) => {
    const id = req.params.id;
    try {
        const promotion = await Promotion.findByPk(id);
        if (!promotion) {
            return res.status(404).json({ msg: 'Promotion not found' });
        }
        res.json(promotion);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};

// Create a new promotion
exports.createPromotion = async (req, res) => {
    const { Type, Discount, StartDate, EndDate } = req.body;
    try {
        const promotion = await Promotion.create({
            Type,
            Discount,
            StartDate,
            EndDate
        });
        res.json(promotion);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};

// Update promotion
exports.updatePromotion = async (req, res) => {
    const id = req.params.id;
    const { Type, Discount, StartDate, EndDate } = req.body;
    try {
        let promotion = await Promotion.findByPk(id);
        if (!promotion) {
            return res.status(404).json({ msg: 'Promotion not found' });
        }
        promotion = await Promotion.update(
            {
                Type,
                Discount,
                StartDate,
                EndDate
            },
            {
                where: {
                    PromotionID: id
                }
            }
        );
        res.json(promotion);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};

// Delete promotion
exports.deletePromotion = async (req, res) => {
    const id = req.params.id;
    try {
        let promotion = await Promotion.findByPk(id);
        if (!promotion) {
            return res.status(404).json({ msg: 'Promotion not found' });
        }
        await Promotion.destroy({
            where: {
                PromotionID: id
            }
        });
        res.json({ msg: 'Promotion deleted' });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};
