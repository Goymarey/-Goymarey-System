import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import RegisterForm from '../components/Auth/RegisterForm';
import { useAuth } from '../contexts/AuthContext.js';

const RegisterPage = () => {
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const { register } = useAuth();

  const handleRegister = async (userData) => {
    try {
      await register(userData);
      navigate('/login');
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Register for Goymarey PMS</h2>
        
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
            {error}
          </div>
        )}

        <RegisterForm onSubmit={handleRegister} />

        <div className="mt-4 text-center">
          <a href="/login" className="text-blue-500 hover:underline">
            Already have an account? Login
          </a>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;