import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
import PrivateRoute from './components/PrivateRoute';
import './styles/tailwind.css';
import './styles/global.css';

const App = () => {
  return (
      <AuthProvider>
        <ProjectProvider>
          <div className="flex">
            <Sidebar />
            <div className="flex-1 flex flex-col">
              <Navbar />
              <main className="flex-1 p-4">
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/login" element={<LoginPage />} />
                  <Route path="/register" element={<RegisterPage />} />
                  <Route path="/" element={<PrivateRoute />}>
                    <Route path="projects" element={<ProjectPage />} />
                    <Route path="tasks" element={<TaskPage />} />
                    <Route path="appointments" element={<AppointmentPage />} />
                    <Route path="careers" element={<CareerPage />} />
                    {/* Add more protected routes here */}
                  </Route>
                </Routes>
              </main>
              <Footer />
            </div>
          </div>
        </ProjectProvider>
      </AuthProvider>
  );
};

export default App;
