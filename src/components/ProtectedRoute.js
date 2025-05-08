import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = ({ allowedRoles }) => {
  const { token, role } = useSelector((state) => state.auth);
  
  if (!token) return <Navigate to="/login" />;
  if (!allowedRoles.includes(role)) return <Navigate to="/login" />;
  
  return <Outlet />;
};

export default ProtectedRoute;