//Import the TeamMember model
const TeamMember = require('../models/TeamMember');

/**
 * Create a new team member
 * @param {Object} req - The request object
 * @param {Object} res - The response object
 */
exports.createTeamMember = async (req, res) => {
  try {
    const newTeamMember = new TeamMember(req.body);
    const savedTeamMember = await newTeamMember.save();
    res.status(201).json(savedTeamMember);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
};

/**
 * Get all team members
 * @param {Object} req - The request object
 * @param {Object} res - The response object
 */
exports.getAllTeamMembers = async (req, res) => {
  try {
    const teamMembers = await TeamMember.find();
    res.status(200).json(teamMembers);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
};

/**
 * Get a team member by ID
 * @param {Object} req - The request object
 * @param {Object} res - The response object
 */
exports.getTeamMemberById = async (req, res) => {
  try {
    const teamMember = await TeamMember.findById(req.params.id);
    if (!teamMember) {
      return res.status(404).send('Team member not found');
    }
    res.status(200).json(teamMember);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
};

/**
 * Update a team member by ID
 * @param {Object} req - The request object
 * @param {Object} res - The response object
 */
exports.updateTeamMemberById = async (req, res) => {
  try {
    const updatedTeamMember = await TeamMember.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedTeamMember) {
      return res.status(404).send('Team member not found');
    }
    res.status(200).json(updatedTeamMember);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
};

/**
 * Delete a team member by ID
 * @param {Object} req - The request object
 * @param {Object} res - The response object
 */
exports.deleteTeamMemberById = async (req, res) => {
  try {
    const deletedTeamMember = await TeamMember.findByIdAndDelete(req.params.id);
    if (!deletedTeamMember) {
      return res.status(404).send('Team member not found');
    }
    res.status(200).send('Team member deleted successfully');
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
};
