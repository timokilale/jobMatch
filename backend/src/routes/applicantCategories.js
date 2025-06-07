const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const {
  getApplicantCategories,
  getAllCategoriesWithStatus,
  updateApplicantCategories,
  addCategory,
  removeCategory
} = require('../controllers/applicantCategories');

// Get applicant's selected categories
router.get('/', auth(), getApplicantCategories);

// Get all categories with selection status for the applicant
router.get('/all-with-status', auth(), getAllCategoriesWithStatus);

// Update applicant's selected categories (bulk update)
router.put('/', auth(), updateApplicantCategories);

// Add a single category
router.post('/add', auth(), addCategory);

// Remove a single category
router.delete('/:categoryId', auth(), removeCategory);

module.exports = router;
