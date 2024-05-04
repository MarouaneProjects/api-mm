// controllers/events.js
const Event = require('../models/events');

// Get all events
exports.getAllEvents = async (req, res) => {
    try {
        const events = await Event.findAll();
        res.json(events);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};

// Get event by ID
exports.getEventById = async (req, res) => {
    const id = req.params.id;
    try {
        const event = await Event.findByPk(id);
        if (!event) {
            return res.status(404).json({ msg: 'Event not found' });
        }
        res.json(event);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};

// Create a new event
exports.createEvent = async (req, res) => {
    const { Title, Description, DateEntered, Location } = req.body;
    try {
        const event = await Event.create({
            Title,
            Description,
            DateEntered,
            Location
        });
        res.json(event);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};

// Update event
exports.updateEvent = async (req, res) => {
    const id = req.params.id;
    const { Title, Description, DateEntered, Location } = req.body;
    try {
        let event = await Event.findByPk(id);
        if (!event) {
            return res.status(404).json({ msg: 'Event not found' });
        }
        event = await Event.update(
            {
                Title,
                Description,
                DateEntered,
                Location
            },
            {
                where: {
                    EventID: id
                }
            }
        );
        res.json(event);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};

// Delete event
exports.deleteEvent = async (req, res) => {
    const id = req.params.id;
    try {
        let event = await Event.findByPk(id);
        if (!event) {
            return res.status(404).json({ msg: 'Event not found' });
        }
        await Event.destroy({
            where: {
                EventID: id
            }
        });
        res.json({ msg: 'Event deleted' });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};
