const express = require('express');
const router = express.Router();
const jobApplicationController = require('../controllers/jobApplicationController');

// Create a job application
router.post('/', jobApplicationController.createJobApplication);

// Get all job applications
router.get('/', jobApplicationController.getAllJobApplications);

// Get a specific job application by ID
router.get('/:id', jobApplicationController.getJobApplicationById);

// Update a job application by ID
router.put('/:id', jobApplicationController.updateJobApplicationById);

// Delete a job application by ID
router.delete('/:id', jobApplicationController.deleteJobApplicationById);

module.exports = router;
