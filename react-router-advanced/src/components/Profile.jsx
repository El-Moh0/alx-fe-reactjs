import { Routes, Route } from 'react-router-dom';
import ProfileDetails from './ProfileDetails.jsx';
import ProfileSettings from './ProfileSettings.jsx';

import { Link, Outlet } from 'react-router-dom';

export default function Profile() {
  return (
    <div>
      <h1>Profile Page</h1>
      <nav>
        <Link to="details">Details</Link> |{' '}
        <Link to="settings">Settings</Link>
      </nav>
      <Outlet />
    </div>
  );
}