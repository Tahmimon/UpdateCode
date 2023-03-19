const express = require('express');
const router = express.Router();
const partnershipModelController = require('../controllers/c_partnershipModelController');

// Get all partnership models
router.get('/', partnershipModelController.getAllPartnershipModels);

// Create a new partnership model
router.post('/', partnershipModelController.createNewPartnershipModel);

// Get a single partnership model
router.get('/:id', partnershipModelController.getPartnershipModelById);

// Update a partnership model
router.put('/:id', partnershipModelController.updatePartnershipModelById);

// Delete a partnership model
router.delete('/:id', partnershipModelController.deletePartnershipModelById);

module.exports = router;
