import { Link, Outlet } from 'react-router-dom';

export default function Profile() {
  return (
    <div>
      <h1>Profile Page</h1>
      <Link to="details">Profile Details</Link> |{' '}
      <Link to="settings">Profile Settings</Link>
      <Outlet />
    </div>
  );
}