import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import useRegister from '../hooks/Register';
import MultiSelectDropdown from './MultiSelectDropdown';

const RegisterPage = () => {
  const {
    fullname, setFullname,
    nida, setNida,
    email, setEmail,
    password, setPassword,
    selectedCategories, setSelectedCategories,
    categoryOptions,
    handleRegister,
    loading,
    error
  } = useRegister();

  const [showPassword, setShowPassword] = useState(false);

  const scrollbarStyles = `
  .custom-scrollbar::-webkit-scrollbar {
    width: 4px;
    height: 4px;
  }
  
  .custom-scrollbar::-webkit-scrollbar-track {
    background: transparent;
  }
  
  .custom-scrollbar::-webkit-scrollbar-thumb {
    background: #9ca3af;
    border-radius: 20px;
  }
  
  .custom-scrollbar::-webkit-scrollbar-thumb:hover {
    background: #6b7280;
  }
  
  /* Hide scrollbar when not hovering */
  .custom-scrollbar {
    scrollbar-width: thin;
    scrollbar-color: transparent transparent;
  }
  
  /* Show scrollbar on hover */
  .custom-scrollbar:hover {
    scrollbar-width: thin;
    scrollbar-color: #9ca3af transparent;
  }
`;
 
  return (
    <>
      <style>{scrollbarStyles}</style>
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
              <span className="text-sm lg:text-base">Employer</span>
              <Link to="/login" className="bg-green-700 text-white px-3 lg:px-4 py-2 rounded-lg text-sm lg:text-base hover:bg-green-800 transition-colors">
                Log in
              </Link>
              <Link to="/employer_register" className="px-3 lg:px-5 py-2 rounded-xl bg-white border border-green-700 text-green-700 hover:bg-green-50 transition-colors text-sm lg:text-base">
                Register
              </Link>
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden flex items-center gap-2">
            <Link to="/login" className="bg-green-700 text-white px-3 py-2 rounded-lg text-sm hover:bg-green-800 transition-colors">
              Login
            </Link>
            <Link to="/employer_register" className="px-3 py-2 rounded-lg border border-green-700 text-green-700 text-sm hover:bg-green-50 transition-colors">
              Employer
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
                <p className="text-sm font-light text-gray-600 mt-1">Register below</p>
              </div>

              <form onSubmit={handleRegister} className="w-full space-y-4">
                {error && (
                  <div className="p-3 bg-red-50 border border-red-200 rounded-lg">
                    <p className="text-red-700 text-sm flex items-center">
                      <i className="fas fa-exclamation-circle mr-2"></i>
                      {error}
                    </p>
                  </div>
                )}

                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full px-4 py-3 sm:py-2 border border-green-700 rounded-lg placeholder:text-green-700 placeholder:font-light focus:outline-none focus:ring-2 focus:ring-green-700 focus:border-transparent text-base"
                  value={fullname}
                  onChange={(e) => setFullname(e.target.value)}
                  required
                />

                <input
                  type="text"
                  placeholder="NIDA Number"
                  className="w-full px-4 py-3 sm:py-2 border border-green-700 rounded-lg placeholder:text-green-700 placeholder:font-light focus:outline-none focus:ring-2 focus:ring-green-700 focus:border-transparent text-base"
                  value={nida}
                  onChange={(e) => setNida(e.target.value)}
                  required
                />

                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-4 py-3 sm:py-2 border border-green-700 rounded-lg placeholder:text-green-700 placeholder:font-light focus:outline-none focus:ring-2 focus:ring-green-700 focus:border-transparent text-base"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />

                <div className="w-full">
                  <MultiSelectDropdown
                    options={categoryOptions}
                    selected={selectedCategories}
                    setSelected={setSelectedCategories}
                  />
                </div>

                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    className="w-full px-4 py-3 sm:py-2 pr-12 border border-green-700 rounded-lg placeholder:text-green-700 placeholder:font-light focus:outline-none focus:ring-2 focus:ring-green-700 focus:border-transparent text-base"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
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
                    className="w-full sm:w-auto min-w-[120px] bg-green-700 text-white px-6 py-3 rounded-lg hover:bg-green-800 transition-colors font-medium text-base touch-target disabled:opacity-50 disabled:cursor-not-allowed"
                    disabled={loading}
                  >
                    {loading ? 'Registering...' : 'Register'}
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
    </>
  );
};

export default RegisterPage;