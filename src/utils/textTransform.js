/**
 * Text transformation utilities for auto-uppercasing user inputs
 */

/**
 * Transform text to uppercase for display in CV and system
 * @param {string} text - The text to transform
 * @returns {string} - Uppercased text
 */
export const toUpperCase = (text) => {
  if (!text || typeof text !== 'string') return text;
  return text.toUpperCase();
};

/**
 * Handle input change with auto-uppercase transformation
 * @param {Event} event - The input change event
 * @param {Function} setterFunction - The state setter function
 * @param {Object} currentState - Current state object (optional, for object updates)
 * @returns {void}
 */
export const handleUppercaseChange = (event, setterFunction, currentState = null) => {
  const { name, value } = event.target;
  const uppercasedValue = toUpperCase(value);
  
  if (currentState) {
    // For object state updates (like formData)
    setterFunction({
      ...currentState,
      [name]: uppercasedValue
    });
  } else {
    // For simple state updates
    setterFunction(uppercasedValue);
  }
};

/**
 * Create an enhanced onChange handler that auto-uppercases text
 * @param {Function} originalHandler - The original onChange handler
 * @returns {Function} - Enhanced onChange handler
 */
export const withUppercase = (originalHandler) => {
  return (event) => {
    const { type, value } = event.target;
    
    // Only transform text inputs, not email, password, etc.
    if (type === 'text' || type === 'textarea') {
      event.target.value = toUpperCase(value);
    }
    
    // Call the original handler with the modified event
    originalHandler(event);
  };
};

/**
 * Fields that should NOT be auto-uppercased
 * These are typically email addresses, passwords, URLs, etc.
 */
export const EXCLUDED_FIELDS = [
  'email',
  'password',
  'confirmPassword',
  'website',
  'url',
  'phone',
  'mobile',
  'contact',
  'supervisorContact'
];

/**
 * Check if a field should be auto-uppercased
 * @param {string} fieldName - The name of the field
 * @param {string} fieldType - The type of the input field
 * @returns {boolean} - Whether the field should be uppercased
 */
export const shouldUppercase = (fieldName, fieldType = 'text') => {
  // Don't uppercase non-text fields
  if (fieldType !== 'text' && fieldType !== 'textarea') {
    return false;
  }
  
  // Don't uppercase excluded fields
  if (EXCLUDED_FIELDS.includes(fieldName?.toLowerCase())) {
    return false;
  }
  
  // Don't uppercase fields that contain certain keywords
  const excludeKeywords = ['email', 'password', 'phone', 'contact', 'url', 'website'];
  const fieldNameLower = fieldName?.toLowerCase() || '';
  
  return !excludeKeywords.some(keyword => fieldNameLower.includes(keyword));
};

/**
 * Enhanced input component wrapper that auto-uppercases appropriate fields
 * @param {Object} props - Input props
 * @returns {JSX.Element} - Enhanced input component
 */
export const UppercaseInput = ({ onChange, name, type = 'text', value, ...props }) => {
  const handleChange = (event) => {
    const { value: inputValue } = event.target;
    
    // Auto-uppercase if appropriate
    if (shouldUppercase(name, type)) {
      event.target.value = toUpperCase(inputValue);
    }
    
    // Call original onChange
    if (onChange) {
      onChange(event);
    }
  };

  return (
    <input
      type={type}
      name={name}
      value={value}
      onChange={handleChange}
      {...props}
    />
  );
};

/**
 * Enhanced textarea component wrapper that auto-uppercases appropriate fields
 * @param {Object} props - Textarea props
 * @returns {JSX.Element} - Enhanced textarea component
 */
export const UppercaseTextarea = ({ onChange, name, value, ...props }) => {
  const handleChange = (event) => {
    const { value: inputValue } = event.target;
    
    // Auto-uppercase if appropriate
    if (shouldUppercase(name, 'textarea')) {
      event.target.value = toUpperCase(inputValue);
    }
    
    // Call original onChange
    if (onChange) {
      onChange(event);
    }
  };

  return (
    <textarea
      name={name}
      value={value}
      onChange={handleChange}
      {...props}
    />
  );
};

export default {
  toUpperCase,
  handleUppercaseChange,
  withUppercase,
  shouldUppercase,
  UppercaseInput,
  UppercaseTextarea,
  EXCLUDED_FIELDS
};
