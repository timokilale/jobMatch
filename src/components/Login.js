import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import useLogin from '../hooks/Login';

const LoginPage = () => {
  const { email, setEmail, password, setPassword, handleLogin, loading, error } = useLogin();
  const [emailFocused, setEmailFocused] = useState(false);
  const [passwordFocused, setPasswordFocused] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [isReadOnly, setIsReadOnly] = useState(true);
  const [selectedRole, setSelectedRole] = useState('applicant'); // Default to applicant
  
  // Set focused state if fields already have values
  useEffect(() => {
    if (email) setEmailFocused(true);
    if (password) setPasswordFocused(true);
    
    // Set readonly to false after a short delay to prevent autofill
    const timer = setTimeout(() => setIsReadOnly(false), 100);
    return () => clearTimeout(timer);
  }, [email, password]);

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
          <Link to="/" className="text-green-700 font-medium text-sm hover:underline">
            Home
          </Link>
          <Link to="/employer_register" className="px-3 py-2 rounded-lg border border-green-700 text-green-700 text-sm hover:bg-green-50 transition-colors">
            Employer
          </Link>
        </div>
      </nav>

      {loading ? (
        <div className="flex flex-col items-center justify-center w-full h-full space-y-6">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-green-700"></div>
          <p className="text-green-700 text-xl font-semibold">Logging in...</p>
        </div>
      ) : (
        <div className="w-full max-w-6xl mx-4 sm:mx-6 md:flex rounded-lg shadow-2xl bg-green-700 overflow-hidden mt-4 sm:mt-6">
          <div className="flex-1 bg-white p-4 sm:p-6 lg:p-8 flex flex-col justify-between rounded-l-lg md:rounded-l-lg rounded-t-lg md:rounded-t-none overflow-auto">
            <div className="flex flex-col gap-4 sm:gap-5 items-start overflow-auto">
              <img src="assets/logo.png" alt="Logo" className="w-20 h-8 sm:w-25 sm:h-10" />
              <div className="w-full">
                <h1 className="text-xl sm:text-2xl font-bold text-green-700">
                  Welcome back!
                </h1>
                <p className="text-sm font-light text-gray-600 mt-1">Please enter your details</p>
              </div>

              {/* Role Selector */}
              <div className="w-full">
                <p className="text-sm font-medium text-gray-700 mb-3">I am logging in as:</p>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setSelectedRole('applicant')}
                    className={`p-3 sm:p-4 rounded-lg border-2 transition-all duration-200 touch-target ${
                      selectedRole === 'applicant'
                        ? 'border-green-700 bg-green-50 text-green-700'
                        : 'border-gray-300 bg-white text-gray-600 hover:border-green-300'
                    }`}
                  >
                    <div className="flex flex-col items-center">
                      <i className="fas fa-user text-lg sm:text-xl mb-1"></i>
                      <span className="text-xs sm:text-sm font-medium">Job Seeker</span>
                    </div>
                  </button>
                  <button
                    type="button"
                    onClick={() => setSelectedRole('employer')}
                    className={`p-3 sm:p-4 rounded-lg border-2 transition-all duration-200 touch-target ${
                      selectedRole === 'employer'
                        ? 'border-green-700 bg-green-50 text-green-700'
                        : 'border-gray-300 bg-white text-gray-600 hover:border-green-300'
                    }`}
                  >
                    <div className="flex flex-col items-center">
                      <i className="fas fa-briefcase text-lg sm:text-xl mb-1"></i>
                      <span className="text-xs sm:text-sm font-medium">Employer</span>
                    </div>
                  </button>
                </div>
              </div>

              <form onSubmit={handleLogin} className="w-full space-y-4" autoComplete="off">
                {/* Error Display */}
                {error && (
                  <div className="p-3 bg-red-50 border border-red-200 rounded-lg">
                    <p className="text-red-700 text-sm flex items-center">
                      <i className="fas fa-exclamation-circle mr-2"></i>
                      {error}
                    </p>
                  </div>
                )}

                <div className="relative">
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 sm:py-2 border border-green-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-700 focus:border-transparent pt-6 pb-2 text-base"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    onFocus={() => setEmailFocused(true)}
                    onBlur={() => !email && setEmailFocused(false)}
                    autoComplete="chrome-off"
                    readOnly={isReadOnly}
                    required
                  />
                  <label
                    htmlFor="email"
                    className={`absolute left-4 transition-all duration-200 pointer-events-none ${
                      emailFocused
                        ? 'text-xs text-green-700 top-1'
                        : 'text-green-700 top-3 sm:top-2'
                    }`}
                  >
                    Email
                  </label>
                </div>

                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    className="w-full px-4 py-3 sm:py-2 pr-12 border border-green-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-700 focus:border-transparent pt-6 pb-2 text-base"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    onFocus={() => setPasswordFocused(true)}
                    onBlur={() => !password && setPasswordFocused(false)}
                    autoComplete="new-password"
                    readOnly={isReadOnly}
                    required
                  />
                  <label
                    htmlFor="password"
                    className={`absolute left-4 transition-all duration-200 pointer-events-none ${
                      passwordFocused
                        ? 'text-xs text-green-700 top-1'
                        : 'text-green-700 top-3 sm:top-2'
                    }`}
                  >
                    Password
                  </label>
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
                    Login
                  </button>
                </div>
              </form>
            </div>

            <div className="mt-6 pt-4 border-t border-gray-200">
              <p className="text-center text-sm text-gray-600">
                Don't have an account?{' '}
                <Link
                  to={selectedRole === 'employer' ? '/employer_register' : '/register'}
                  className="text-green-700 font-bold hover:underline"
                >
                  Register as {selectedRole === 'employer' ? 'Employer' : 'Job Seeker'}
                </Link>
              </p>
            </div>
          </div>

          <div className="flex-1 hidden md:block">
            <img src="assets/pattern.png" alt="Pattern" className="w-full h-full object-cover rounded-r-lg" />
          </div>
        </div>
      )}
    </div>
  );
};

export default LoginPage;