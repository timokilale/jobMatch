const express = require('express');
const router = express.Router();
const { generatePdf } = require('../controllers/pdf');

router.get('/:id/download', generatePdf);

module.exports = router;
