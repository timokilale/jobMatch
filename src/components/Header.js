import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="transparent text-white py-5">
      <nav className="container mx-auto flex justify-between items-center px-4">
        <div className="w-48">
          <img src="/assets/logo.png" alt="Logo" className="w-full h-auto" />
        </div>
        <div className="flex gap-4">
          <Link
            to="/login"
            className="px-5 py-2 rounded-xl bg-green-700 border hover:bg-green-800 transition-colors duration-300"
          >
            Login
          </Link>

          {/* Dropdown for Registration */}
          <div className="relative group">
            <button className="px-5 py-2 rounded-xl bg-white border border-green-700 text-green-700 hover:bg-green-50 transition-colors duration-300 flex items-center gap-2">
              Register
              <i className="fas fa-chevron-down text-sm"></i>
            </button>

            {/* Dropdown Menu */}
            <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
              <Link
                to="/register"
                className="block px-4 py-3 text-gray-700 hover:bg-green-50 hover:text-green-700 transition-colors duration-200 rounded-t-lg"
              >
                <i className="fas fa-user mr-2"></i>
                Job Seeker
              </Link>
              <Link
                to="/employer_register"
                className="block px-4 py-3 text-gray-700 hover:bg-green-50 hover:text-green-700 transition-colors duration-200 rounded-b-lg border-t border-gray-100"
              >
                <i className="fas fa-briefcase mr-2"></i>
                Employer
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;