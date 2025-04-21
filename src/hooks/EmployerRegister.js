import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const EmployerRegister = () => {
  const [companyName, setCompanyName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });

      const data = await response.json();

      if (data.success) {
        alert('Registration successful! Please login.');
        navigate('/login');
      } else {
        alert('Registration failed: ' + data.message);
      }
    } catch (err) {
      console.error('Registration error:', err);
      alert('Something went wrong. Please try again later.');
    }
  };

  return {
    companyName,
    setCompanyName,
    email,
    setEmail,
    address,
    setAddress,
    password,
    setPassword,
    handleRegister,
  };
};

export default EmployerRegister;