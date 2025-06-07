import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { registerEmployer } from '../redux/slices/authSlice';
import { useNavigate } from 'react-router-dom';
import { toUpperCase } from '../utils/textTransform';

const useEmployerRegister = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    companyName: '',
    email: '',
    address: '',
    password: '',
  });

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const result = await dispatch(registerEmployer({
        email: formData.email,
        password: formData.password,
        companyName: formData.companyName,
        address: formData.address
      }));

      if (result.payload?.token) {
        navigate('/login');
      }
    } catch (err) {
      console.error('Registration failed:', err);
    }
  };

  return {
    ...formData,
    setCompanyName: (value) => setFormData({ ...formData, companyName: toUpperCase(value) }),
    setEmail: (value) => setFormData({ ...formData, email: value }),
    setAddress: (value) => setFormData({ ...formData, address: toUpperCase(value) }),
    setPassword: (value) => setFormData({ ...formData, password: value }),
    handleRegister,
  };
};

export default useEmployerRegister;