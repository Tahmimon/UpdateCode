// routes/companyInfo.js

const express = require('express');
const router = express.Router();
const companyInfoController = require('../controllers/c_infoController');

// Define route to get all company information
router.get('/', companyInfoController.getAllCompanyInfo);

// Define route to get a single company information
router.get('/:id', companyInfoController.getCompanyInfoById);

// Define route to create company information
router.post('/', companyInfoController.createCompanyInfo);

// Define route to update company information
router.put('/:id', companyInfoController.updateCompanyInfo);

// Define route to delete company information
router.delete('/:id', companyInfoController.deleteCompanyInfo);

// Export router to be used in app.js

module.exports = router;
