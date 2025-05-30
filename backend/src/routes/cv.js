const express = require('express');
const router = express.Router();
const { getCVData } = require('../controllers/cv');

router.get('/:id', getCVData);

module.exports = router;
