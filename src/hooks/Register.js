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

  const handleRegister = async (e) => {
    e.preventDefault();
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

  return {
    fullname: formData.fullname,
    nida: formData.nida,
    email: formData.email,
    password: formData.password,
    selectedCategories,
    setSelectedCategories,
    categoryOptions,
    setFullname: (value) => setFormData({ ...formData, fullname: toUpperCase(value) }),
    setNida: (value) => setFormData({ ...formData, nida: value }),
    setEmail: (value) => setFormData({ ...formData, email: value }),
    setPassword: (value) => setFormData({ ...formData, password: value }),
    handleRegister,
    loading,
    error,
    registrationSuccess
  };
};

export default useRegister;