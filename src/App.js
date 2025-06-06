import {  Routes, Route } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute';
import Header from './components/Header';
import Hero from './components/Hero';
import Login from './components/Login';
import Register from './components/Register';
import EmployerRegister from './components/EmployerRegister';
import ApplicantDashboard from './components/ApplicantDashboard';
import EmployerDashboard from './components/EmployerDashboard';
import ChatWidget from './components/ChatWidget';
import '@fortawesome/fontawesome-free/css/all.min.css';



function App() {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/employer_register" element={<EmployerRegister />} />


        <Route element={<ProtectedRoute allowedRoles={['APPLICANT']} />}>
          <Route path="/applicant_dashboard" element={<ApplicantDashboard />} />
        </Route>
        <Route element={<ProtectedRoute allowedRoles={['EMPLOYER']} />}>
          <Route path="/employer_dashboard" element={<EmployerDashboard />} />
        </Route>

        <Route path="/" element={
          <div className="bg-gray-50 min-h-screen">
            <Header />
            <Hero />
          </div>
          }/>
      </Routes>

      {/* Chat Widget - Available on all pages for authenticated users */}
      <ChatWidget />
    </div>
  );
}

export default App;
