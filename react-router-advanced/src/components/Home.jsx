import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <Link to="/profile">Go to Profile</Link>
      <br />
      <Link to="/post/123">Go to Post 123</Link>
    </div>
  );
}