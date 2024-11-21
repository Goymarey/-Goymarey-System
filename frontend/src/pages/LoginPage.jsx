import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LoginForm from '../components/Auth/LoginForm';
import { useAuth } from '../contexts/AuthContext';

const LoginPage = () => {
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleLogin = async (credentials) => {
    try {
      await login(credentials);
      navigate('/');
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Login to Goymarey PMS</h2>
        
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
            {error}
          </div>
        )}

        <LoginForm onSubmit={handleLogin} />

        <div className="mt-4 text-center">
          <a href="/register" className="text-blue-500 hover:underline">
            Don't have an account? Register
          </a>
          <br />
          <a href="/password-reset" className="text-sm text-gray-600 hover:underline">
            Forgot password?
          </a>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;