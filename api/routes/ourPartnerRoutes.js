const express = require('express');
const router = express.Router();
const ourPartnerController = require('../controllers/ourPartnerController');

// Create a new partner
router.post('/', ourPartnerController.createPartner);

// Get all partners
router.get('/', ourPartnerController.getAllPartners);

// Get a specific partner by ID
router.get('/:id', ourPartnerController.getPartnerById);

// Update a partner by ID
router.put('/:id', ourPartnerController.updatePartnerById);

// Delete a partner by ID
router.delete('/:id', ourPartnerController.deletePartnerById);

module.exports = router;
