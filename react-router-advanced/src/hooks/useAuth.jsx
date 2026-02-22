// src/hooks/useAuth.jsx
export default function useAuth() {
  const isAuthenticated = () => localStorage.getItem('auth') === 'true';
  return { isAuthenticated };
}