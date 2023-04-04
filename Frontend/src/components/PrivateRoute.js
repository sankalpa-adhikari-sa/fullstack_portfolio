import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';

const PrivateRoute = () => {
    let isAuthenticated = localStorage.getItem('access_token') !== null;

    return isAuthenticated ? (
      <Outlet/>
    ) : (
      <Navigate to="/login" replace />
    );
  }

  export default PrivateRoute;