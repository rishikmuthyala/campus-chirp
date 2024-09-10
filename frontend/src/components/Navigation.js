import React from 'react';
import { Link } from 'react-router-dom';

function Navigation({ user, setUser }) {
  const handleLogout = () => {
    // Clear user data and localStorage
    setUser(null);
    localStorage.removeItem('token');
  };

  return (
    <nav>
      <Link to="/">Home</Link>
      {user ? (
        <>
          <Link to="/dashboard">Dashboard</Link>
          <button onClick={handleLogout}>Logout</button>
        </>
      ) : (
        <>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </>
      )}
    </nav>
  );
}

export default Navigation;
