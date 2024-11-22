import React from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';

const PrivateRoute = () => {
  const { isAuthenticated } = React.useContext(AuthContext);
  const location = useLocation();

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" state={{ from: location }} />;
};

export default PrivateRoute;
