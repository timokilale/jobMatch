import { Link } from 'react-router-dom';
import Register from '../hooks/Register';

const RegisterPage = () => {
  const {
    fullname, setFullname,
    nida, setNida,
    email, setEmail,
    password, setPassword,
    handleRegister
  } = Register();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 pt-20">
      <nav className="fixed top-0 left-0 right-0 flex items-center justify-start gap-5 px-10 py-4 bg-white shadow z-10">
        <div className="logo-container mr-10">
          <img src="assets/logo.svg" alt="Logo" className="h-12 w-auto" />
        </div>
        <Link to="/" className="ml-auto text-green-700 font-bold hover:underline">
          Home
        </Link>
        <p className="flex gap-5 text-green-700 items-center m-0">
          <span>Employer</span>
          <Link to="/login" className="bg-green-700 text-white px-4 py-2 rounded-lg">
            Log in
          </Link>
          <Link to="/employer_register" className="border-2 border-green-700 text-green-700 px-4 py-2 rounded-lg bg-white">
            Register
          </Link>
        </p>
      </nav>

      <div className="w-4/5 md:flex rounded-lg shadow-2xl bg-green-700 max-h-[auto] overflow-hidden mt-10">
        <div className="flex-1 bg-white p-8 flex flex-col justify-between rounded-l-lg overflow-auto">
          <div className="flex flex-col gap-5 items-start overflow-auto">
            <img src="assets/logo.svg" alt="Logo" className="w-36 h-36" />
            <p className="text-2xl font-bold text-green-700">
              New Here! <br />
              <span className="text-sm font-light text-gray-600">Register below</span>
            </p>
            <form onSubmit={handleRegister} className="w-full">
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
                  Register
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
  );
};

export default RegisterPage;
