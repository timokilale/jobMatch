/**
 * Date validation utilities for the job matching application
 */

/**
 * Get today's date in YYYY-MM-DD format for HTML date inputs
 * @returns {string} Today's date in YYYY-MM-DD format
 */
export const getTodayString = () => {
  return new Date().toISOString().split('T')[0];
};

/**
 * Validate that a start date is not in the future
 * @param {string|Date} startDate - The start date to validate
 * @returns {object} Validation result with isValid and error message
 */
export const validateStartDate = (startDate) => {
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
export const validateEndDate = (endDate, startDate) => {
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
export const validateFutureDate = (futureDate) => {
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
export const validateHistoricalDateRange = (startDate, endDate) => {
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
 * Format date for display
 * @param {string|Date} date - The date to format
 * @param {object} options - Formatting options
 * @returns {string} Formatted date string
 */
export const formatDate = (date, options = {}) => {
  if (!date) return '';
  
  const dateObj = new Date(date);
  if (isNaN(dateObj)) return 'Invalid date';

  const defaultOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  };

  return dateObj.toLocaleDateString('en-US', { ...defaultOptions, ...options });
};

/**
 * Format date for HTML date input (YYYY-MM-DD)
 * @param {string|Date} date - The date to format
 * @returns {string} Date in YYYY-MM-DD format
 */
export const formatDateForInput = (date) => {
  if (!date) return '';
  
  const dateObj = new Date(date);
  if (isNaN(dateObj)) return '';

  return dateObj.toISOString().split('T')[0];
};

/**
 * Calculate age from birth date
 * @param {string|Date} birthDate - The birth date
 * @returns {number} Age in years
 */
export const calculateAge = (birthDate) => {
  if (!birthDate) return 0;
  
  const birth = new Date(birthDate);
  if (isNaN(birth)) return 0;

  const today = new Date();
  let age = today.getFullYear() - birth.getFullYear();
  const monthDiff = today.getMonth() - birth.getMonth();
  
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
    age--;
  }
  
  return age;
};

/**
 * Calculate duration between two dates
 * @param {string|Date} startDate - The start date
 * @param {string|Date} endDate - The end date (optional, defaults to today)
 * @returns {object} Duration object with years and months
 */
export const calculateDuration = (startDate, endDate = null) => {
  if (!startDate) return { years: 0, months: 0 };
  
  const start = new Date(startDate);
  const end = endDate ? new Date(endDate) : new Date();
  
  if (isNaN(start) || isNaN(end)) return { years: 0, months: 0 };

  let years = end.getFullYear() - start.getFullYear();
  let months = end.getMonth() - start.getMonth();

  if (months < 0) {
    years--;
    months += 12;
  }

  return { years, months };
};
