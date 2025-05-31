const express = require('express');
const router = express.Router();
const { getCVData } = require('../controllers/cv');
const auth = require('../middleware/auth');


router.get('/:id', auth(['EMPLOYER', 'APPLICANT']), getCVData);

module.exports = router;
