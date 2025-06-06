import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import useEmployerRegister from '../hooks/EmployerRegister';

const RegisterPage = () => {
  const {
    companyName, setCompanyName,
    email, setEmail,
    address, setAddress,
    password, setPassword,
    handleRegister
  } = useEmployerRegister();

  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 pt-16 sm:pt-20 page-container">
      <nav className="fixed top-0 left-0 right-0 flex items-center justify-between px-4 sm:px-6 lg:px-10 py-3 sm:py-4 bg-white shadow-sm z-50">
        <div className="logo-container">
          <img src="assets/logo.png" alt="Logo" className="h-8 sm:h-10 lg:h-12 w-auto" />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-5">
          <Link to="/" className="text-green-700 font-bold hover:underline">
            Home
          </Link>
          <div className="flex gap-3 text-green-700 items-center">
            <span className="text-sm lg:text-base">Applicant</span>
            <Link to="/login" className="bg-green-700 text-white px-3 lg:px-4 py-2 rounded-lg text-sm lg:text-base hover:bg-green-800 transition-colors">
              Log in
            </Link>
            <Link to="/register" className="px-3 lg:px-5 py-2 rounded-xl bg-white border border-green-700 text-green-700 hover:bg-green-50 transition-colors text-sm lg:text-base">
              Register
            </Link>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden flex items-center gap-2">
          <Link to="/login" className="bg-green-700 text-white px-3 py-2 rounded-lg text-sm hover:bg-green-800 transition-colors">
            Login
          </Link>
          <Link to="/register" className="px-3 py-2 rounded-lg border border-green-700 text-green-700 text-sm hover:bg-green-50 transition-colors">
            Applicant
          </Link>
        </div>
      </nav>

      <div className="w-full max-w-6xl mx-4 sm:mx-6 md:flex rounded-lg shadow-2xl bg-green-700 overflow-hidden mt-4 sm:mt-6">
        <div className="flex-1 bg-white p-4 sm:p-6 lg:p-8 flex flex-col justify-between rounded-l-lg md:rounded-l-lg rounded-t-lg md:rounded-t-none overflow-auto">
          <div className="flex flex-col gap-4 sm:gap-5 items-start overflow-auto">
            <img src="assets/logo.png" alt="Logo" className="w-20 h-8 sm:w-25 sm:h-10" />
            <div className="w-full">
              <h1 className="text-xl sm:text-2xl font-bold text-green-700">
                New Here!
              </h1>
              <p className="text-sm font-light text-gray-600 mt-1">Register your company below</p>
            </div>

            <form onSubmit={handleRegister} className="w-full space-y-4">
              <input
                type="text"
                placeholder="Company Name"
                className="w-full px-4 py-3 sm:py-2 border border-green-700 rounded-lg placeholder:text-green-700 placeholder:font-light focus:outline-none focus:ring-2 focus:ring-green-700 focus:border-transparent text-base"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                required
              />

              <input
                type="email"
                placeholder="Company Email"
                className="w-full px-4 py-3 sm:py-2 border border-green-700 rounded-lg placeholder:text-green-700 placeholder:font-light focus:outline-none focus:ring-2 focus:ring-green-700 focus:border-transparent text-base"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoComplete="chrome-off"
                required
              />

              <input
                type="text"
                placeholder="Company Address"
                className="w-full px-4 py-3 sm:py-2 border border-green-700 rounded-lg placeholder:text-green-700 placeholder:font-light focus:outline-none focus:ring-2 focus:ring-green-700 focus:border-transparent text-base"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                required
              />

              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  className="w-full px-4 py-3 sm:py-2 pr-12 border border-green-700 rounded-lg placeholder:text-green-700 placeholder:font-light focus:outline-none focus:ring-2 focus:ring-green-700 focus:border-transparent text-base"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  autoComplete="chrome-off"
                  required
                />
                <button
                  type="button"
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-green-700 focus:outline-none p-1 touch-target"
                  onClick={() => setShowPassword(!showPassword)}
                  tabIndex="-1"
                >
                  {showPassword ? (
                     <i className="fas fa-eye-slash text-lg"></i>
                  ) : (
                    <i className="fas fa-eye text-lg"></i>
                  )}
                </button>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full sm:w-auto min-w-[120px] bg-green-700 text-white px-6 py-3 rounded-lg hover:bg-green-800 transition-colors font-medium text-base touch-target"
                >
                  Register
                </button>
              </div>
            </form>
          </div>

          <div className="mt-6 pt-4 border-t border-gray-200">
            <p className="text-center text-sm text-gray-600">
              Have an account?{' '}
              <Link to="/login" className="text-green-700 font-bold hover:underline">
                Log in
              </Link>
            </p>
          </div>
        </div>

        <div className="flex-1 hidden md:block">
          <img src="assets/pattern.png" alt="Pattern" className="w-full h-full object-cover rounded-r-lg" />
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
