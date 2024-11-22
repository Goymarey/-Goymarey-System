import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';
import '../styles/pages.css';

const HomePage = () => {
  const { user, logout } = useContext(AuthContext);

  return (
    <div className="home-container">
      <div className="home-content">
        <h1>Welcome to Goymarey PMS</h1>
        
        {user ? (
          <div className="dashboard-grid">
            <Link to="/projects" className="dashboard-card">
              <h2>Projects</h2>
              <p>Manage and track your projects</p>
            </Link>
            
            <Link to="/tasks" className="dashboard-card">
              <h2>Tasks</h2>
              <p>View and update your tasks</p>
            </Link>
            
            <Link to="/appointments" className="dashboard-card">
              <h2>Appointments</h2>
              <p>Schedule and manage appointments</p>
            </Link>
          </div>
        ) : (
          <div className="login-prompt">
            <p>Please log in to access the system</p>
            <Link to="/login" className="primary-button">
              Login
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default HomePage;