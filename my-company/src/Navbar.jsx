// src/components/Navbar.jsx
import { Link } from 'react-router-dom';
import { useState } from 'react';

function Navbar() {
  const navStyle = {
    display: 'flex',
    gap: '20px',
    padding: '15px 30px',
    backgroundColor: '#007BFF',
    alignItems: 'center',
  };

  const linkBaseStyle = {
    color: 'white',
    textDecoration: 'none',
    fontWeight: 'bold',
    transition: 'color 0.3s',
  };

  // Optional hover effect using React state
  const [hovered, setHovered] = useState(null);

  const getLinkStyle = (linkName) => ({
    ...linkBaseStyle,
    color: hovered === linkName ? '#FFD700' : 'white', // gold on hover
    cursor: 'pointer',
  });

  return (
    <nav style={navStyle}>
      <Link
        to="/"
        style={getLinkStyle('home')}
        onMouseEnter={() => setHovered('home')}
        onMouseLeave={() => setHovered(null)}
      >
        Home
      </Link>

      <Link
        to="/about"
        style={getLinkStyle('about')}
        onMouseEnter={() => setHovered('about')}
        onMouseLeave={() => setHovered(null)}
      >
        About
      </Link>

      <Link
        to="/services"
        style={getLinkStyle('services')}
        onMouseEnter={() => setHovered('services')}
        onMouseLeave={() => setHovered(null)}
      >
        Services
      </Link>

      <Link
        to="/contact"
        style={getLinkStyle('contact')}
        onMouseEnter={() => setHovered('contact')}
        onMouseLeave={() => setHovered(null)}
      >
        Contact
      </Link>
    </nav>
  );
}

export default Navbar;
