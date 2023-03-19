const express = require('express');
const router = express.Router();
const authMiddleware = require('../middlewares/authMiddleware');
const userController = require('../controllers/userController');

// Get current user
router.get('/', authMiddleware, userController.getUser);

// Get all users (admin only)
router.get('/all', authMiddleware, userController.getAllUsers);

// Update user profile
router.put('/:id', authMiddleware, userController.updateUser);

// Delete user (admin or owner only)
router.delete('/:id', authMiddleware, userController.deleteUser);

module.exports = router;
