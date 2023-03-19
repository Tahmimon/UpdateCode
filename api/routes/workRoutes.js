const express = require('express');
const router = express.Router();
const workController = require('../controllers/workController');

// Create a work
router.post('/', workController.createWork);

// Get all works
router.get('/', workController.getAllWorks);

// Get a specific work by ID
router.get('/:id', workController.getWorkById);

// Update a work by ID
router.put('/:id', workController.updateWorkById);

// Delete a work by ID
router.delete('/:id', workController.deleteWorkById);

module.exports = router;
