const express = require('express');
const router = express.Router();
const whoWeWorkWithController = require('../controllers/c_whoWeWorkWithController');

// Get all whoWeWorkWith items
router.get('/', whoWeWorkWithController.getAllWhoWeWorkWith);

// Create a new whoWeWorkWith item
router.post('/', whoWeWorkWithController.createNewWhoWeWorkWith);

// Get a single whoWeWorkWith item by id
router.get('/:id', whoWeWorkWithController.getWhoWeWorkWithById);

// Update a whoWeWorkWith item by id
router.put('/:id', whoWeWorkWithController.updateWhoWeWorkWithById);

// Delete a whoWeWorkWith item by id
router.delete('/:id', whoWeWorkWithController.deleteWhoWeWorkWithById);

module.exports = router;
