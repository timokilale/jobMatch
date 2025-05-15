
import { Link } from 'react-router-dom';
import useLogin from '../hooks/Login';

const LoginPage = () => {
  const { email, setEmail, password, setPassword, handleLogin, loading, error } = useLogin();
 
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 pt-16 overflow-hidden">
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
            log in
          </Link>
          <Link to="/employer_register" className="px-5 py-2 rounded-xl bg-white border border-green-700 text-green-700 hover:bg-green-50 transition-colors duration-300">
            Register
          </Link>
        </p>
      </nav>

      {loading ? (
          <div className="flex flex-col items-center justify-center w-full h-full space-y-6">
           <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-green-700"></div>
           <p className="text-green-700 text-xl font-semibold">Logging in...</p>
           </div>
      ) : (

      <div className="w-4/5 md:flex rounded-lg shadow-2xl bg-green-700 h-[auto] max-h-[600px] overflow-hidden">
        <div className="flex-1 bg-white p-8 flex flex-col justify-between rounded-l-lg overflow-auto">
          <div className="flex flex-col gap-5 items-start overflow-auto">
            <img src="assets/logo.png" alt="Logo" className="w-25 h-10" />
            <p className="text-2xl font-bold text-green-700">
              Welcome back! <br />
              <span className="text-sm font-light text-gray-600">Please enter your details</span>
            </p>
            <form onSubmit={handleLogin} className="w-full">
              <input
                type="email"
                placeholder="Email"
                className="w-full px-3 py-2 border border-green-700 rounded mb-3 placeholder:text-green-700 placeholder:font-light focus:outline-none "
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <input
                type="password"
                placeholder="Password"
                className="w-full px-3 py-2 border border-green-700 rounded mb-3 placeholder:text-green-700 placeholder:font-light focus:outline-none"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <div className="text-left mt-3">
                <button
                  type="submit"
                  className="w-1/3 bg-green-700 text-white px-4 py-2 rounded hover:bg-green-800"
                >
                  Login
                </button>
              </div>
            </form>
          </div>
          <p className="text-center text-sm text-gray-600 mt-6">
            Don't have an account?{' '}
            <Link to="/register" className="text-green-700 font-bold hover:underline">
              Register
            </Link>
          </p>
        </div>

        <div className="flex-1  hidden md:block">
          <img src="assets/pattern.svg" alt="Pattern" className="w-full h-full object-cover rounded-r-lg" />
        </div>
      </div>
      )}
    </div>
  );
};

export default LoginPage;
