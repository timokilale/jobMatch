const express = require('express');
const router = express.Router();
const { createLanguage, getLanguages } = require('../controllers/languageProficiency');

router.post('/', createLanguage);
router.get('/:applicantId', getLanguages);

module.exports = router;
