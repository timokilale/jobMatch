import { useState } from 'react';
import { loginUser } from '../redux/slices/authSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';


const useLogin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error } = useSelector((state) => state.auth);
  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
  });

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const result = await dispatch(loginUser(credentials));
      
      if (result.payload?.token) {
        localStorage.setItem('userRole', result.payload.role);

        const redirectPath = result.payload.role === 'APPLICANT' 
          ? '/applicant_dashboard' 
          : '/employer_dashboard'
        navigate(redirectPath);
  
      }
    } catch (err) {
      console.error('Login failed:', err);
    }
  };
  return {
    email: credentials.email,
    setEmail: (value) => setCredentials({ ...credentials, email: value }),
    password: credentials.password,
    setPassword: (value) => setCredentials({ ...credentials, password: value }),
    handleLogin,
    loading,
    error,
  };
};

export default useLogin;


