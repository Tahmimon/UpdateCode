const express = require('express');
const router = express.Router();
const keyFeatureController = require('../controllers/c_keyFeatureController');

// Route to get all key features
router.get('/', keyFeatureController.getAllKeyFeatures);

// Route to create a new key feature
router.post('/', keyFeatureController.createNewKeyFeature);

// Route to get a single key feature by id
router.get('/:id', keyFeatureController.getKeyFeatureById);

// Route to update a single key feature by id
router.put('/:id', keyFeatureController.updateKeyFeatureById);

// Route to delete a single key feature by id
router.delete('/:id', keyFeatureController.deleteKeyFeatureById);

module.exports = router;