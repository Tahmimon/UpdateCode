const express = require('express');
const router = express.Router();
const c_heroController = require('../controllers/c_heroController');

// Create a new hero
router.post('/', c_heroController.createHero);

// Get all heroes
router.get('/', c_heroController.getAllHeroes);

// Get a single hero by id
router.get('/:id', c_heroController.getHeroById);

// Update a hero by id
router.put('/:id', c_heroController.updateHeroById);

// Delete a hero by id
router.delete('/:id', c_heroController.deleteHeroById);

module.exports = router;
