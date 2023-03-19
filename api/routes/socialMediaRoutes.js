const express = require('express');
const router = express.Router();
const socialMediaController = require('../controllers/socialMediaController');

// Create a new social media account
router.post('/', socialMediaController.createSocialMedia);

// Get all social media accounts
router.get('/', socialMediaController.getAllSocialMedia);

// Get a specific social media account by ID
router.get('/:id', socialMediaController.getSocialMediaById);

// Update a social media account by ID
router.put('/:id', socialMediaController.updateSocialMediaById);

// Delete a social media account by ID
router.delete('/:id', socialMediaController.deleteSocialMediaById);

module.exports = router;
