import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './components/Home.jsx';
import Profile from './components/Profile.jsx';
import ProfileDetails from './components/ProfileDetails.jsx';
import ProfileSettings from './components/ProfileSettings.jsx';
import Post from './components/Post.jsx';
import Login from './components/Login.jsx';
import ProtectedRoute from './components/ProtectedRoute.jsx';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      {/* Protected profile routes */}
      <Route
        path="/profile/*"
        element={
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        }
      >
        {/* Nested routes under Profile */}
        <Route path="details" element={<ProfileDetails />} />
        <Route path="settings" element={<ProfileSettings />} />
      </Route>

      {/* Dynamic route for blog post */}
      <Route path="/post/:postId" element={<Post />} />

      {/* Login route */}
      <Route path="/login" element={<Login />} />

      {/* Catch-all redirect */}
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}