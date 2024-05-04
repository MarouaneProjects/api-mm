const { db } = require('../models');

module.exports = {
    // Get all users
    getAllUsers: async (req, res) => {
        try {
            const users = await db.users.findAll();
            res.status(200).json({ users });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    // Get user by ID
    getUserById: async (req, res) => {
        const { id } = req.params;
        try {
            const user = await db.users.findByPk(id);
            if (user) {
                res.json(user);
            } else {
                res.status(404).json({ error: 'User not found' });
            }
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    // Create new user
    createUser: async (req, res) => {
        const { username, password, email, phoneNumber } = req.body;
        try {
            const user = await db.users.create({ username, password, email, phoneNumber });
            res.status(201).json(user);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    },

    // Update user by ID
    updateUserById: async (req, res) => {
        const { id } = req.params;
        const { username, password, email, phoneNumber } = req.body;
        try {
            const user = await db.users.findByPk(id);
            if (user) {
                await user.update({ username, password, email, phoneNumber });
                res.json({ message: 'User updated successfully' });
            } else {
                res.status(404).json({ error: 'User not found' });
            }
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    },

    // Delete user by ID
    deleteUserById: async (req, res) => {
        const { id } = req.params;
        try {
            const user = await db.users.findByPk(id);
            if (user) {
                await user.destroy();
                res.json({ message: 'User deleted successfully' });
            } else {
                res.status(404).json({ error: 'User not found' });
            }
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
};
