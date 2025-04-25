import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin =  (e) => {
    e.preventDefault();
    setLoading(true);
    
    setTimeout(() => {
      setLoading(false);
      navigate('/applicant_dashboard');
    }, 1500);

    // try {
    //   const response = await fetch('http://localhost:5000/login', {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify({ email, password })
    //   });

    //   const data = await response.json();

    //   if (data.success) {
    //     alert('Login successful');
    //     navigate('/Applicant-dashboard'); // update this path if needed
    //   } else {
    //     alert('Login failed: ' + data.message);
    //   }
    // } catch (err) {
    //   console.error('Login error:', err);
    //   alert('Something went wrong. Please try again later.');
    // }
  };

  return {
    email,
    setEmail,
    password,
    setPassword,
    loading,
    handleLogin,
  };
};

export default Login;
