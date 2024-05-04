// controllers/messages.js
const Message = require('../../models/messages');

// Get all messages
exports.getAllMessages = async (req, res) => {
    try {
        const messages = await Message.findAll();
        res.json(messages);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};

// Get message by ID
exports.getMessageById = async (req, res) => {
    const id = req.params.id;
    try {
        const message = await Message.findByPk(id);
        if (!message) {
            return res.status(404).json({ msg: 'Message not found' });
        }
        res.json(message);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};

// Create a new message
exports.createMessage = async (req, res) => {
    const { SenderID, ReceiverID, Content, Timestamp } = req.body;
    try {
        const message = await Message.create({
            SenderID,
            ReceiverID,
            Content,
            Timestamp
        });
        res.json(message);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};

// Update message
exports.updateMessage = async (req, res) => {
    const id = req.params.id;
    const { SenderID, ReceiverID, Content, Timestamp } = req.body;
    try {
        let message = await Message.findByPk(id);
        if (!message) {
            return res.status(404).json({ msg: 'Message not found' });
        }
        message = await Message.update(
            {
                SenderID,
                ReceiverID,
                Content,
                Timestamp
            },
            {
                where: {
                    MessageID: id
                }
            }
        );
        res.json(message);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};

// Delete message
exports.deleteMessage = async (req, res) => {
    const id = req.params.id;
    try {
        let message = await Message.findByPk(id);
        if (!message) {
            return res.status(404).json({ msg: 'Message not found' });
        }
        await Message.destroy({
            where: {
                MessageID: id
            }
        });
        res.json({ msg: 'Message deleted' });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};
