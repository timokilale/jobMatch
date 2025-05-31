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
      console.log("Attempting login with:", credentials);
      const result = await dispatch(loginUser(credentials));
      
      console.log("Login result:", result);
      
      // Using the correct way to check for fulfilled action
      if (loginUser.fulfilled.match(result)) {
        const { role, token } = result.payload;
        console.log("Login successful, role:", role, "token:", token ? "present" : "missing");
        
        // Navigate based on role
        if (role === 'APPLICANT') {
          navigate('/applicant_dashboard');
        } else if (role === 'EMPLOYER') {
          navigate('/employer_dashboard');
        } else {
          console.error('Unknown role:', role);
        }
      } else {
        console.error('Login failed:', result.payload || result.error);
      }
    } catch (err) {
      console.error('Login error:', err);
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