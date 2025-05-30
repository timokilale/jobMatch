const express = require('express');
const router = express.Router();
const pdfController = require('../controllers/pdf');

router.get('/:id/download', pdfController.generatePdf);

module.exports = router;
