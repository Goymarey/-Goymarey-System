import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const HomePage = () => {
  const { user } = useAuth();

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold mb-6">Welcome to Goymarey PMS</h1>
        
        {user ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Link 
              to="/projects" 
              className="bg-white p-4 rounded-lg shadow hover:bg-blue-50 transition"
            >
              <h2 className="text-xl font-semibold">Projects</h2>
              <p>Manage and track your projects</p>
            </Link>
            
            <Link 
              to="/tasks" 
              className="bg-white p-4 rounded-lg shadow hover:bg-blue-50 transition"
            >
              <h2 className="text-xl font-semibold">Tasks</h2>
              <p>View and update your tasks</p>
            </Link>
            
            <Link 
              to="/appointments" 
              className="bg-white p-4 rounded-lg shadow hover:bg-blue-50 transition"
            >
              <h2 className="text-xl font-semibold">Appointments</h2>
              <p>Schedule and manage appointments</p>
            </Link>
          </div>
        ) : (
          <div className="text-center">
            <p className="mb-4">Please log in to access the system</p>
            <Link 
              to="/login" 
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
            >
              Login
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default HomePage;