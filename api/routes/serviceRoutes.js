const express = require('express');
const router = express.Router();
const serviceController = require('../controllers/serviceController');

// Create a new service
router.post('/', serviceController.createService);

// Get all services
router.get('/', serviceController.getAllServices);

// Get a specific service by ID
router.get('/:id', serviceController.getServiceById);

// Update a service by ID
router.put('/:id', serviceController.updateServiceById);

// Delete a service by ID
router.delete('/:id', serviceController.deleteServiceById);

module.exports = router;
