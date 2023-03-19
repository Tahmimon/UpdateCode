const express = require('express');
const { uploadFileResponse } = require('../controllers/uploadController');

const attachmentUpload = require('../middlewares/attachmentUpload');
const router = express.Router();

// upload file to conversation folder
router.post('/', attachmentUpload("conversation"), uploadFileResponse);

// upload file to client response folder
router.post('/response', attachmentUpload("response"), uploadFileResponse);

// upload file to resume folder
router.post('/response', attachmentUpload("resumes"), uploadFileResponse);


module.exports = router;