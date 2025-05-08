import { useState } from 'react';
import { loginUser } from '../redux/slices/authSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';


const useLogin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, role, token } = useSelector((state) => state.auth);
  const { loading, error } = useSelector((state) => state.auth);
  const applicantId = role === 'APPLICANT' ? user?.id : null;
  const employerId = role === 'EMPLOYER' ? user?.id : null;
  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
  });

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const result = await dispatch(loginUser(credentials));

      if (loginUser.fulfilled.match(result)) {
        const role = result.payload.role?.toUpperCase();
          
        setTimeout(() => {
          const redirectPath = role === 'APPLICANT' 
            ? '/applicant_dashboard' 
            : '/employer_dashboard'
 
          navigate(redirectPath);  
        }, 50);
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


