const express = require('express');
const router = express.Router();
const industryWeServeController = require('../controllers/c_industryWeServeController');

// GET all industry we serve
router.get('/', industryWeServeController.getAllIndustryWeServe);

// GET a specific industry we serve by ID
router.get('/:id', industryWeServeController.getIndustryWeServeById);

// POST a new industry we serve
router.post('/', industryWeServeController.createIndustryWeServe);

// PUT an updated industry we serve by ID
router.put('/:id', industryWeServeController.updateIndustryWeServeById);

// DELETE an industry we serve by ID
router.delete('/:id', industryWeServeController.deleteIndustryWeServeById);

module.exports = router;
