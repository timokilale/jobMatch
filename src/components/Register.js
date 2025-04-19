import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Register from '../hooks/Register';

const RegisterPage = () => {
    const { email, setEmail, password, setPassword, handleLogin } = Register();
 
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 pt-16 overflow-hidden">
      <nav className="fixed top-0 left-0 right-0 flex items-center justify-start gap-5 px-10 py-4 bg-transparent shadow z-10">
        <div className="logo-container mr-10">
          <img src="assets/logo.svg" alt="Logo" className="h-12 w-auto" />
        </div>
        <Link to="/" className="ml-auto text-green-700 font-bold hover:underline">
          Home
        </Link>
        <p className="flex gap-5 text-green-700 items-center m-0">
          <span className="pt-3">Employer</span>
          <Link to="/login" className="bg-green-700 text-white px-4 py-2 rounded-lg">
            log in
          </Link>
          <a href="./employer_register.html" className="border-2 border-green-700 text-green-700 px-4 py-2 rounded-lg bg-white">
            Register
          </a>
        </p>
      </nav>

      <div className="w-4/5 md:flex rounded-lg shadow-2xl bg-green-700 h-[400px] overflow-hidden">
        <div className="flex-1 bg-white p-8 flex flex-col justify-between rounded-l-lg">
          <div className="flex flex-col gap-5 items-start">
            <img src="assets/logo.svg" alt="Logo" className="w-36 h-36" />
            <p className="text-2xl font-bold text-green-700">
              New Here! <br />
              <span className="text-sm font-light text-gray-600">Register below</span>
            </p>
            <form onSubmit={handleLogin} className="w-full mt-[-20px]">
              <input
                type="email"
                placeholder="Email"
                className="w-11/12 px-3 py-2 border border-green-700 rounded mb-3 placeholder:text-green-700 placeholder:font-light focus:outline-none focus:ring-2 focus:ring-green-800"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <input
                type="password"
                placeholder="Password"
                className="w-11/12 px-3 py-2 border border-green-700 rounded mb-3 placeholder:text-green-700 placeholder:font-light focus:outline-none focus:ring-2 focus:ring-green-800"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <div className="text-left mt-3">
                <button
                  type="submit"
                  className="w-1/4 bg-green-700 text-white px-4 py-2 rounded hover:bg-green-800"
                >
                  Login
                </button>
              </div>
            </form>
          </div>
          <p className="text-center text-sm text-gray-600 mb-5">
            Don't have an account?{' '}
            <a href="register.html" className="text-green-700 font-bold hover:underline">
              Register
            </a>
          </p>
        </div>

        <div className="flex-1 h-full hidden md:block">
          <img src="assets/pattern.svg" alt="Pattern" className="w-full h-full object-cover rounded-r-lg" />
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
