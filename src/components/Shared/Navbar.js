import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const navigate = useNavigate();
  const username = sessionStorage.getItem('username');

  const handleLogout = () => {
    sessionStorage.removeItem('isLoggedIn');
    sessionStorage.removeItem('username');
    navigate('/login');
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-brand">
          <Link to="/" className="brand-link">
            <span className="brand-icon">📅</span>
            <span className="brand-text">Event Scheduler</span>
          </Link>
        </div>
        
        <div className="navbar-menu">
          <div className="navbar-nav">
            <Link to="/" className="nav-link">
              Dashboard
            </Link>
            <Link to="/events" className="nav-link">
              Events
            </Link>
            <Link to="/calendar" className="nav-link">
              Calendar
            </Link>
            <Link to="/tasks" className="nav-link">
              Tasks
            </Link>
          </div>
          
          <div className="navbar-user">
            <div className="user-avatar">
              <span>👤</span>
            </div>
            <span className="user-name">{username}</span>
            <button onClick={handleLogout} className="logout-btn">Logout</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
