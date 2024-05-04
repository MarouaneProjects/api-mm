// routes/users.js

const express = require('express');
const router = express.Router();


userService = require('../services/users.service');

// Routes
router.get('/', getAllUsers);
router.get('/:id', getUserById);
router.post('/', createUser);
router.put('/:id', updateUserById);
router.delete('/:id', deleteUserById);

module.exports = router;
