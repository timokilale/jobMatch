import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="transparent text-white py-5">
      <nav className="container mx-auto flex justify-between items-center px-4">
        <div className="w-48">
          <img src="/assets/logo.svg" alt="Logo" className="w-full h-auto" />
        </div>
        <div className="flex gap-4">
          <Link 
            to="/login" 
            className="px-5 py-2 rounded-xl bg-green-700 border hover:bg-green-800 transition-colors duration-300"
          >
            Login
          </Link>
          <Link
            to="/register"
            className="px-5 py-2 rounded-xl bg-white border border-green-700 text-green-700 hover:bg-green-50 transition-colors duration-300"
          >
            Register
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;