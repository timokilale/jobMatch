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
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 pt-20">
        <nav className="fixed top-0 left-0 right-0 flex items-center justify-start gap-5 px-10 py-4 bg-transparent ">
          <div className="logo-container mr-10">
            <img src="assets/logo.png" alt="Logo" className="h-12 w-auto" />
          </div>
          <Link to="/" className="ml-auto text-green-700 font-bold hover:underline">
            Home
          </Link>
          <p className="flex gap-5 text-green-700 items-center m-0">
            <span>Employer</span>
            <Link to="/login" className="bg-green-700 text-white px-4 py-2 rounded-lg">
              Log in
            </Link>
            <Link to="/employer_register" className="px-5 py-2 rounded-xl bg-white border border-green-700 text-green-700 hover:bg-green-50 transition-colors duration-300">
              Register
            </Link>
          </p>
        </nav>

        <div className="w-4/5 md:flex rounded-lg shadow-2xl bg-green-700 max-h-[auto] overflow-hidden mt-10">
          <div className="flex-1 bg-white p-8 flex flex-col justify-between rounded-l-lg overflow-auto">
            <div className="flex flex-col gap-5 items-start overflow-auto">
              <img src="assets/logo.png" alt="Logo" className="w-25 h-10" />
              <p className="text-2xl font-bold text-green-700">
                New Here! <br />
                <span className="text-sm font-light text-gray-600">Register below</span>
              </p>
              <form onSubmit={handleRegister}  className="space-y-4 max-w-md mx-auto">
                <input
                  type="text"
                  placeholder="Fullname"
                  className="w-full px-3 py-2 border border-green-700 rounded mb-3 placeholder:text-green-700 placeholder:font-light focus:outline-none "
                  value={fullname}
                  onChange={(e) => setFullname(e.target.value)}
                  required
                />
                <input
                  type="text"
                  placeholder="NIDA"
                  className="w-full px-3 py-2 border border-green-700 rounded mb-3 placeholder:text-green-700 placeholder:font-light focus:outline-none "
                  value={nida}
                  onChange={(e) => setNida(e.target.value)}
                  required
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full px-3 py-2 border border-green-700 rounded mb-3 placeholder:text-green-700 placeholder:font-light focus:outline-none"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <MultiSelectDropdown
                  options={categoryOptions}
                  selected={selectedCategories}
                  setSelected={setSelectedCategories}
                />
                <div className="relative mb-3">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    className="w-full px-3 py-2 border border-green-700 rounded mb-3 placeholder:text-green-700 placeholder:font-light focus:outline-none"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <button
                    type="button"
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-green-700 focus:outline-none"
                    onClick={() => setShowPassword(!showPassword)}
                    tabIndex="-1"
                  >
                    {showPassword ? (
                      <i className="fas fa-eye-slash"></i>
                    ) : (
                      <i className="fas fa-eye"></i>
                    )}
                  </button>
                </div>
                
                <div className="text-left mt-3">
                  <button
                    type="submit"
                    className="w-1/3 bg-green-700 text-white px-4 py-2 rounded hover:bg-green-800"
                    disabled={loading}
                  >
                   {loading ? 'Registering...' : 'Register'}
                  </button>
                </div>
              </form>
            </div>
            <p className="text-center text-sm text-gray-600 mt-6">
              Have an account?{' '}
              <Link to="/login" className="text-green-700 font-bold hover:underline">
                Log in
              </Link>
            </p>
          </div>

          <div className="flex-1 hidden md:block">
            <img src="assets/pattern.svg" alt="Pattern" className="w-full h-full object-cover rounded-r-lg" />
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterPage;