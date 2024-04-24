import React, { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

const RequireAuth = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (!token) {
      navigate('/login');
    }
  }, [navigate]);

  return <Outlet />;
};

export default RequireAuth;
