import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const AdminRoute = () => {
  const { authUser } = useAuth();

  if (authUser === null) {
    return <div>Loading...</div>;
  }
  if (authUser.isAdmin) {
    return <Outlet />;
  }

  return <Navigate to="/login" replace />;
};

export default AdminRoute;