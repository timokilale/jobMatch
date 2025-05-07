import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { registerApplicant } from '../redux/slices/authSlice';
import { useNavigate } from 'react-router-dom';

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
  
  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const result = await dispatch(registerApplicant({
        email: formData.email,
        password: formData.password,
        fullName: formData.fullname,
        nida: formData.nida
      }));

      if (result.payload?.token) {
        navigate('/login')
      }
    } catch (err) {
      console.error('Registration failed:', err);
    }
  };

  return {
    ...formData,
    setFullname: (value) => setFormData({ ...formData, fullname: value }),
    setNida: (value) => setFormData({ ...formData, nida: value }),
    setEmail: (value) => setFormData({ ...formData, email: value }),
    setPassword: (value) => setFormData({ ...formData, password: value }),
    handleRegister,
    loading,
    error,
  };
};

export default useRegister;