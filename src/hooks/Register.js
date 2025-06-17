import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { registerApplicant } from '../redux/slices/authSlice';
import { useNavigate } from 'react-router-dom';
import api from '../api/api';
import { toUpperCase } from '../utils/textTransform';

const useRegister = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error } = useSelector((state) => state.auth);

  const [formData, setFormData] = useState({
    fullname: '',
    nida: '',
    email: '',
    password: '',
  });
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [categoryOptions, setCategoryOptions] = useState([]);
  const [registrationSuccess, setRegistrationSuccess] = useState(false);
  const [validationErrors, setValidationErrors] = useState({});

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await api.get('/categories');
        setCategoryOptions(Array.isArray(res.data) ? res.data : []);
      } catch (err) {
        console.error("Error fetching categories:", err);
        setCategoryOptions([]);
      }
    };
    fetchCategories();
  }, []);

  // Validate NIDA number
  const validateNida = (nida) => {
    if (!nida) {
      return 'NIDA number is required';
    }

    // Remove spaces and dashes for validation
    const cleanNida = nida.replace(/[\s-]/g, '');

    if (!/^\d{20}$/.test(cleanNida)) {
      return 'NIDA number must be exactly 20 digits';
    }

    return null;
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    // Clear previous validation errors
    setValidationErrors({});

    // Validate NIDA
    const nidaError = validateNida(formData.nida);
    if (nidaError) {
      setValidationErrors({ nida: nidaError });
      return;
    }

    try {
      const result = await dispatch(registerApplicant({
        email: formData.email,
        password: formData.password,
        fullName: formData.fullname,
        nida: formData.nida,
        categoryIds: selectedCategories || [],
      }));

      // Check if registration was successful
      if (!result.error) {
        console.log("Registration successful, redirecting to login");
        setRegistrationSuccess(true);
        // Clear the form
        setFormData({
          fullname: '',
          nida: '',
          email: '',
          password: '',
        });
        setSelectedCategories([]);
        
        // Navigate to login page
        navigate('/login');
      } else {
        console.error('Registration failed:', result.error);
      }
    } catch (err) {
      console.error('Registration error:', err);
    }
  };

  // Handle NIDA input with formatting
  const handleNidaChange = (value) => {
    // Remove all non-digits
    const digitsOnly = value.replace(/\D/g, '');

    // Limit to 20 digits
    const limitedDigits = digitsOnly.slice(0, 20);

    // Format with spaces every 4 digits for better readability
    const formatted = limitedDigits.replace(/(\d{4})(?=\d)/g, '$1 ');

    setFormData({ ...formData, nida: formatted });

    // Clear validation error when user starts typing
    if (validationErrors.nida) {
      setValidationErrors({ ...validationErrors, nida: null });
    }
  };

  return {
    fullname: formData.fullname,
    nida: formData.nida,
    email: formData.email,
    password: formData.password,
    selectedCategories,
    setSelectedCategories,
    categoryOptions,
    validationErrors,
    setFullname: (value) => setFormData({ ...formData, fullname: toUpperCase(value) }),
    setNida: handleNidaChange,
    setEmail: (value) => setFormData({ ...formData, email: value }),
    setPassword: (value) => setFormData({ ...formData, password: value }),
    handleRegister,
    loading,
    error,
    registrationSuccess
  };
};

export default useRegister;