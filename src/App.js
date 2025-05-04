import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Login from './components/Login';
import Register from './components/Register';
import EmployerRegister from './components/EmployerRegister';
import ApplicantDashboard from './components/ApplicantDashboard';
import EmployerDashboard from './components/EmployerDashboard';
import '@fortawesome/fontawesome-free/css/all.min.css';


function App() {
  return (
    <Router>
      <Routes>
        <Route 
          path="/" 
          element={
            <div className="bg-gray-50 min-h-screen">
              <Header />
              <Hero />
            </div>
        } />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/employer_register" element={<EmployerRegister />} />
        <Route path="/applicant_dashboard" element={<ApplicantDashboard />} />
        <Route path="/employer_dashboard" element={<EmployerDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
