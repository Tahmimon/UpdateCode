//Import the Job model
const Job = require('../models/Job');

/**
 * Get all jobs
 * @param {Object} req - The request object
 * @param {Object} res - The response object
 */
const getAllJobs = async (req, res) => {
  try {
    const jobs = await Job.find();
    res.json(jobs);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server error');
  }
};

/**
 * Get a job by ID
 * @param {Object} req - The request object
 * @param {Object} res - The response object
 */
const getJobById = async (req, res) => {
  try {
    const job = await Job.findById(req.params.id);
    if (!job) {
      return res.status(404).json({ msg: 'Job not found' });
    }
    res.json(job);
  } catch (error) {
    console.error(error.message);
    if (error.kind === 'ObjectId') {
      return res.status(404).json({ msg: 'Job not found' });
    }
    res.status(500).send('Server error');
  }
};

/**
 * Create a new job
 * @param {Object} req - The request object
 * @param {Object} res - The response object
 */
const createJob = async (req, res) => {
  try {
    const job = new Job(req.body);
    await job.save();
    res.json(job);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server error');
  }
};

/**
 * Update a job by ID
 * @param {Object} req - The request object
 * @param {Object} res - The response object
 */
const updateJobById = async (req, res) => {
  try {
    const job = await Job.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!job) {
      return res.status(404).json({ msg: 'Job not found' });
    }
    res.json(job);
  } catch (error) {
    console.error(error.message);
    if (error.kind === 'ObjectId') {
      return res.status(404).json({ msg: 'Job not found' });
    }
    res.status(500).send('Server error');
  }
};

/**
 * Delete a job by ID
 * @param {Object} req - The request object
 * @param {Object} res - The response object
 */
const deleteJobById = async (req, res) => {
  try {
    const job = await Job.findByIdAndRemove(req.params.id);
    if (!job) {
      return res.status(404).json({ msg: 'Job not found' });
    }
    res.json({ msg: 'Job removed' });
  } catch (error) {
    console.error(error.message);
    if (error.kind === 'ObjectId') {
      return res.status(404).json({ msg: 'Job not found' });
    }
    res.status(500).send('Server error');
  }
};

module.exports = {
  getAllJobs,
  getJobById,
  createJob,
  updateJobById,
  deleteJobById,
};
