const express = require('express');
const router = express.Router();
const jobController = require('../controllers/jobController');

// GET /jobs - get all jobs
router.get('/', jobController.getAllJobs);

// GET /jobs/:id - get job by id
router.get('/:id', jobController.getJobById);

// POST /jobs - create a new job
router.post('/', jobController.createJob);

// PUT /jobs/:id - update a job
router.put('/:id', jobController.updateJobById);

// DELETE /jobs/:id - delete a job
router.delete('/:id', jobController.deleteJobById);

module.exports = router;
