// controllers/advices.js
const Advice = require('../models/advices');

// Get all advices
exports.getAllAdvices = async (req, res) => {
    try {
        const advices = await Advice.findAll();
        res.json(advices);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};

// Get advice by ID
exports.getAdviceById = async (req, res) => {
    const id = req.params.id;
    try {
        const advice = await Advice.findByPk(id);
        if (!advice) {
            return res.status(404).json({ msg: 'Advice not found' });
        }
        res.json(advice);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};

// Create a new advice
exports.createAdvice = async (req, res) => {
    const { Title, Content, Author, DateEntered } = req.body;
    try {
        const advice = await Advice.create({
            Title,
            Content,
            Author,
            DateEntered
        });
        res.json(advice);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};

// Update advice
exports.updateAdvice = async (req, res) => {
    const id = req.params.id;
    const { Title, Content, Author, DateEntered } = req.body;
    try {
        let advice = await Advice.findByPk(id);
        if (!advice) {
            return res.status(404).json({ msg: 'Advice not found' });
        }
        advice = await Advice.update(
            {
                Title,
                Content,
                Author,
                DateEntered
            },
            {
                where: {
                    AdviceID: id
                }
            }
        );
        res.json(advice);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};

// Delete advice
exports.deleteAdvice = async (req, res) => {
    const id = req.params.id;
    try {
        let advice = await Advice.findByPk(id);
        if (!advice) {
            return res.status(404).json({ msg: 'Advice not found' });
        }
        await Advice.destroy({
            where: {
                AdviceID: id
            }
        });
        res.json({ msg: 'Advice deleted' });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};
