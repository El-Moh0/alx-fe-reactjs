import { Navigate } from 'react-router-dom';

// Simulated authentication check
const isAuthenticated = () => {
  return localStorage.getItem('auth') === 'true';
};

export default function ProtectedRoute({ children }) {
  if (!isAuthenticated()) {
    return <Navigate to="/login" replace />;
  }
  return children;
}