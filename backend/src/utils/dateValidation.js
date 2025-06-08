/**
 * Backend date validation utilities for the job matching application
 */

/**
 * Validate that a start date is not in the future
 * @param {string|Date} startDate - The start date to validate
 * @returns {object} Validation result with isValid and error message
 */
const validateStartDate = (startDate) => {
  if (!startDate) {
    return { isValid: false, error: "Start date is required" };
  }

  const startDateObj = new Date(startDate);
  if (isNaN(startDateObj)) {
    return { isValid: false, error: "Invalid start date format" };
  }

  const today = new Date();
  today.setHours(23, 59, 59, 999); // Set to end of today

  if (startDateObj > today) {
    return { isValid: false, error: "Start date cannot be in the future" };
  }

  return { isValid: true, error: null };
};

/**
 * Validate that an end date is not in the future and is after start date
 * @param {string|Date} endDate - The end date to validate
 * @param {string|Date} startDate - The start date to compare against
 * @returns {object} Validation result with isValid and error message
 */
const validateEndDate = (endDate, startDate) => {
  if (!endDate) {
    return { isValid: true, error: null }; // End date is optional
  }

  const endDateObj = new Date(endDate);
  if (isNaN(endDateObj)) {
    return { isValid: false, error: "Invalid end date format" };
  }

  const today = new Date();
  today.setHours(23, 59, 59, 999); // Set to end of today

  if (endDateObj > today) {
    return { isValid: false, error: "End date cannot be in the future" };
  }

  if (startDate) {
    const startDateObj = new Date(startDate);
    if (!isNaN(startDateObj) && startDateObj > endDateObj) {
      return { isValid: false, error: "End date must be after start date" };
    }
  }

  return { isValid: true, error: null };
};

/**
 * Validate that a future date (like interview scheduling) is in the future
 * @param {string|Date} futureDate - The date to validate
 * @returns {object} Validation result with isValid and error message
 */
const validateFutureDate = (futureDate) => {
  if (!futureDate) {
    return { isValid: false, error: "Date is required" };
  }

  const futureDateObj = new Date(futureDate);
  if (isNaN(futureDateObj)) {
    return { isValid: false, error: "Invalid date format" };
  }

  const now = new Date();
  if (futureDateObj <= now) {
    return { isValid: false, error: "Date must be in the future" };
  }

  return { isValid: true, error: null };
};

/**
 * Validate date range for historical data (education, work experience)
 * @param {string|Date} startDate - The start date
 * @param {string|Date} endDate - The end date (optional)
 * @returns {object} Validation result with isValid and error message
 */
const validateHistoricalDateRange = (startDate, endDate) => {
  const startValidation = validateStartDate(startDate);
  if (!startValidation.isValid) {
    return startValidation;
  }

  const endValidation = validateEndDate(endDate, startDate);
  if (!endValidation.isValid) {
    return endValidation;
  }

  return { isValid: true, error: null };
};

/**
 * Validate date range for academic qualifications (requires both start and end dates)
 * @param {string|Date} startDate - The start date
 * @param {string|Date} endDate - The end date (required)
 * @returns {object} Validation result with isValid and error message
 */
const validateAcademicDateRange = (startDate, endDate) => {
  const startValidation = validateStartDate(startDate);
  if (!startValidation.isValid) {
    return startValidation;
  }

  // For academic qualifications, end date is required
  if (!endDate) {
    return { isValid: false, error: "End date is required" };
  }

  const endValidation = validateEndDate(endDate, startDate);
  if (!endValidation.isValid) {
    return endValidation;
  }

  return { isValid: true, error: null };
};

/**
 * Express middleware to validate historical date ranges
 * @param {string} startDateField - Name of the start date field in req.body
 * @param {string} endDateField - Name of the end date field in req.body
 * @returns {Function} Express middleware function
 */
const validateHistoricalDatesMiddleware = (startDateField = 'startDate', endDateField = 'endDate') => {
  return (req, res, next) => {
    const startDate = req.body[startDateField];
    const endDate = req.body[endDateField];

    const validation = validateHistoricalDateRange(startDate, endDate);
    
    if (!validation.isValid) {
      return res.status(400).json({ error: validation.error });
    }

    next();
  };
};

/**
 * Express middleware to validate future dates
 * @param {string} dateField - Name of the date field in req.body
 * @returns {Function} Express middleware function
 */
const validateFutureDateMiddleware = (dateField = 'scheduledAt') => {
  return (req, res, next) => {
    const date = req.body[dateField];

    const validation = validateFutureDate(date);
    
    if (!validation.isValid) {
      return res.status(400).json({ error: validation.error });
    }

    next();
  };
};

/**
 * Validate birth date (should be in the past and reasonable)
 * @param {string|Date} birthDate - The birth date to validate
 * @returns {object} Validation result with isValid and error message
 */
const validateBirthDate = (birthDate) => {
  if (!birthDate) {
    return { isValid: false, error: "Birth date is required" };
  }

  const birthDateObj = new Date(birthDate);
  if (isNaN(birthDateObj)) {
    return { isValid: false, error: "Invalid birth date format" };
  }

  const today = new Date();
  const minAge = new Date();
  minAge.setFullYear(today.getFullYear() - 16); // Minimum age 16
  const maxAge = new Date();
  maxAge.setFullYear(today.getFullYear() - 100); // Maximum age 100

  if (birthDateObj > today) {
    return { isValid: false, error: "Birth date cannot be in the future" };
  }

  if (birthDateObj > minAge) {
    return { isValid: false, error: "Must be at least 16 years old" };
  }

  if (birthDateObj < maxAge) {
    return { isValid: false, error: "Birth date seems unrealistic" };
  }

  return { isValid: true, error: null };
};

module.exports = {
  validateStartDate,
  validateEndDate,
  validateFutureDate,
  validateHistoricalDateRange,
  validateAcademicDateRange,
  validateHistoricalDatesMiddleware,
  validateFutureDateMiddleware,
  validateBirthDate
};
