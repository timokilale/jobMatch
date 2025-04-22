import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [fullname, setFullname] = useState('');
  const [nida, setNida] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister =  (e) => {
    e.preventDefault();
    alert('Registration successful! Please login.');
    navigate('/login');

  //   try {
  //     const response = await fetch('http://localhost:5000/register', {
  //       method: 'POST',
  //       headers: { 'Content-Type': 'application/json' },
  //       body: JSON.stringify({ email, password })
  //     });

  //     const data = await response.json();

  //     if (data.success) {
  //       alert('Registration successful! Please login.');
  //       navigate('/login');
  //     } else {
  //       alert('Registration failed: ' + data.message);
  //     }
  //   } catch (err) {
  //     console.error('Registration error:', err);
  //     alert('Something went wrong. Please try again later.');
  //   }
};

  return {
    fullname,
    setFullname,
    nida,
    setNida,
    email,
    setEmail,
    password,
    setPassword,
    handleRegister,
  };
};

export default Register;