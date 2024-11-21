import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Layout Components
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import DashboardHome from './components/Dashboard/DashboardHome';

// Pages
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ProjectPage from './pages/ProjectPage';
import TaskPage from './pages/TaskPage';
import AppointmentPage from './pages/AppointmentPage';
import CareerPage from './pages/CareerPage';

// Contexts
import { useAuth } from './hooks/useAuth';

function App() {
  const { isAuthenticated, user } = useAuth();

  const PrivateRoute = ({ children }) => {
    return isAuthenticated ? (
      <div className="flex">
        <Sidebar />
        <div className="flex-grow">
          <Navbar />
          {children}
          <Footer />
        </div>
      </div>
    ) : (
      <Navigate to="/login" replace />
    );
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        
        <Route 
          path="/" 
          element={
            <PrivateRoute>
              <HomePage />
            </PrivateRoute>
          } 
        />
        
        <Route 
          path="/projects" 
          element={
            <PrivateRoute>
              <ProjectPage />
            </PrivateRoute>
          } 
        />
        
        <Route 
          path="/tasks" 
          element={
            <PrivateRoute>
              <TaskPage />
            </PrivateRoute>
          } 
        />
        
        <Route 
          path="/appointments" 
          element={
            <PrivateRoute>
              <AppointmentPage />
            </PrivateRoute>
          } 
        />
        
        <Route 
          path="/career" 
          element={
            <PrivateRoute>
              <CareerPage />
            </PrivateRoute>
          } 
        />
      </Routes>

      <ToastContainer />
    </div>
  );
}

export default App;
