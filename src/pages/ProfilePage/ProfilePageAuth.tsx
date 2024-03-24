import React from 'react';
import { Navigate } from 'react-router-dom';
import Loading from '../../components/Loading/Loading';
import { useAuth } from '../../contexts/AuthContext';

const ProfilePageAuth: React.FC = () => {
  const { user, isLoading, error } = useAuth();

  if (error) {
    return <Navigate replace to='/welcome' />;
  }

  if (isLoading) {
    return <Loading />;
  }

  return <Navigate replace to={`/user/${user?.login}`} />;
};

export default ProfilePageAuth;
