// routes/users.js

const express = require('express');
const router = express.Router();


userService = require('../services/users.service');

// Routes
router.get('/', userService.getAllUsers);
router.get('/:id', userService.getUserById);
router.post('/', userService.createUser);
router.put('/:id', userService.updateUserById);
router.delete('/:id', userService.deleteUserById);

module.exports = router;
