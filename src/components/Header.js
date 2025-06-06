import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isRegisterDropdownOpen, setIsRegisterDropdownOpen] = useState(false);

  return (
    <header className="transparent text-white py-3 sm:py-5">
      <nav className="container mx-auto flex justify-between items-center px-4">
        {/* Logo */}
        <div className="w-32 sm:w-40 lg:w-48">
          <img src="/assets/logo.png" alt="Logo" className="w-full h-auto" />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-4">
          <Link
            to="/login"
            className="px-4 lg:px-5 py-2 rounded-xl bg-green-700 border hover:bg-green-800 transition-colors duration-300 text-sm lg:text-base"
          >
            Login
          </Link>

          {/* Desktop Dropdown for Registration */}
          <div className="relative group">
            <button className="px-4 lg:px-5 py-2 rounded-xl bg-white border border-green-700 text-green-700 hover:bg-green-50 transition-colors duration-300 flex items-center gap-2 text-sm lg:text-base">
              Register
              <i className="fas fa-chevron-down text-sm"></i>
            </button>

            {/* Desktop Dropdown Menu */}
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

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-green-700 p-2 touch-target"
        >
          <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
        </button>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-white shadow-lg border-t border-gray-200 z-50 md:hidden">
            <div className="container mx-auto px-4 py-4 space-y-4">
              <Link
                to="/login"
                className="block w-full text-center py-3 px-4 bg-green-700 text-white rounded-lg hover:bg-green-800 transition-colors touch-target"
                onClick={() => setIsMenuOpen(false)}
              >
                Login
              </Link>

              {/* Mobile Register Section */}
              <div className="space-y-2">
                <button
                  onClick={() => setIsRegisterDropdownOpen(!isRegisterDropdownOpen)}
                  className="w-full flex items-center justify-between py-3 px-4 bg-white border border-green-700 text-green-700 rounded-lg hover:bg-green-50 transition-colors touch-target"
                >
                  <span>Register</span>
                  <i className={`fas fa-chevron-${isRegisterDropdownOpen ? 'up' : 'down'} text-sm`}></i>
                </button>

                {isRegisterDropdownOpen && (
                  <div className="space-y-2 pl-4">
                    <Link
                      to="/register"
                      className="block py-3 px-4 text-gray-700 bg-gray-50 rounded-lg hover:bg-green-50 hover:text-green-700 transition-colors touch-target"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <i className="fas fa-user mr-2"></i>
                      Job Seeker
                    </Link>
                    <Link
                      to="/employer_register"
                      className="block py-3 px-4 text-gray-700 bg-gray-50 rounded-lg hover:bg-green-50 hover:text-green-700 transition-colors touch-target"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <i className="fas fa-briefcase mr-2"></i>
                      Employer
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;