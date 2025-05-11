const express = require('express');
const router = express.Router();
const { 
  createLanguage, 
  getLanguages,
  updateLanguage,
  deleteLanguage
 } = require('../controllers/languageProficiency');

router.post('/', createLanguage);
router.get('/:applicantId', getLanguages);
router.put('/:id', updateLanguage);
router.delete('/:id', deleteLanguage);

module.exports = router;
