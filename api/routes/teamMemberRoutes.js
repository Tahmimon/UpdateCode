const express = require('express');
const router = express.Router();
const teamMemberController = require('../controllers/teamMemberController');

// Create a new team member
router.post('/', teamMemberController.createTeamMember);

// Get all team members
router.get('/', teamMemberController.getAllTeamMembers);

// Get a specific team member by ID
router.get('/:id', teamMemberController.getTeamMemberById);

// Update a team member by ID
router.put('/:id', teamMemberController.updateTeamMemberById);

// Delete a team member by ID
router.delete('/:id', teamMemberController.deleteTeamMemberById);

module.exports = router;
