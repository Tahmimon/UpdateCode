const express = require('express');
const router = express.Router();
const cClientResponseController = require('../controllers/c_client_responseController');

// Create a new client response
router.post('/', cClientResponseController.create);

// Get all client responses
router.get('/', cClientResponseController.getAll);

// Get a specific client response
router.get('/:id', cClientResponseController.getById);

// Update a client response
router.put('/:id', cClientResponseController.update);

// Delete a client response
router.delete('/:id', cClientResponseController.delete);

module.exports = router;
