import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Home from './components/Home.jsx'
import Profile from './components/Profile.jsx'
import ProfileDetails from './components/ProfileDetails.jsx'
import ProfileSettings from './components/ProfileSettings.jsx'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile/*" element={<Profile />}>
          <Route path="details" element={<ProfileDetails />} />
          <Route path="settings" element={<ProfileSettings />} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  )
}