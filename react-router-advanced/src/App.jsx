import { Routes, Route, Navigate } from 'react-router-dom';

// Pages / Components
import Home from './components/Home.jsx';
import Profile from './components/Profile.jsx';
import ProfileDetails from './components/ProfileDetails.jsx';
import ProfileSettings from './components/ProfileSettings.jsx';
import BlogPost from './components/BlogPost.jsx';
import Login from './components/Login.jsx';
import ProtectedRoute from './components/ProtectedRoute.jsx';

export default function App() {
  return (
    <Routes>
      {/* Home page */}
      <Route path="/" element={<Home />} />

      {/* Protected Profile route with nested routes */}
      <Route
        path="/profile/*"
        element={
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        }
      >
        <Route path="details" element={<ProfileDetails />} />
        <Route path="settings" element={<ProfileSettings />} />
      </Route>

      {/* Dynamic Blog Post route */}
      <Route path="/blog/:id" element={<BlogPost />} />

      {/* Login page */}
      <Route path="/login" element={<Login />} />

      {/* Catch-all redirect */}
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}