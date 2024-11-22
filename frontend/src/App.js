import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import HomePage from './pages/HomePage';
import ProjectPage from './pages/ProjectPage';
import TaskPage from './pages/TaskPage';
import AppointmentPage from './pages/AppointmentPage';
import CareerPage from './pages/CareerPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import { AuthProvider } from './contexts/AuthContext';
import { ProjectProvider } from './contexts/ProjectContext';
import PrivateRoute from './components/PrivateRoute.jsx'; // A component to protect routes
import './styles/tailwind.css';
import './styles/global.css';

const App = () => {
  return (
    <Router>
      <AuthProvider>
        <ProjectProvider>
          <div className="flex">
            <Sidebar />
            <div className="flex-1 flex flex-col">
              <Navbar />
              <main className="flex-1 p-4">
                <Routes>
                  <Route exact path="/" component={HomePage} />
                  <Route path="/login" component={LoginPage} />
                  <Route path="/register" component={RegisterPage} />
                  <PrivateRoute path="/projects" component={ProjectPage} />
                  <PrivateRoute path="/tasks" component={TaskPage} />
                  <PrivateRoute path="/appointments" component={AppointmentPage} />
                  <PrivateRoute path="/careers" component={CareerPage} />
                  {/* Add more routes as needed */}
                </Routes>
              </main>
              <Footer />
            </div>
          </div>
        </ProjectProvider>
      </AuthProvider>
    </Router>
  );
};

export default App;
