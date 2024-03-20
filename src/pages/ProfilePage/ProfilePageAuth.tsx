import React from 'react';
import { Navigate } from 'react-router-dom';
import config from '../../utils';
import { useEffect, useState } from 'react';
import ProfileBackground from './ProfileBackground/ProfileBackground';
import ProfileAvatar from './ProfileAvatar/ProfileAvatar';
import ProfileFavorites from './ProfileFavorites/ProfileFavorites';
import ProfileInfo from '../../components/ProfileInfo/ProfileInfo';
import ProfileReviews from './ProfileReviews/ProfileReviews';
import ProfileWatchlist from './ProfileWatchlist/ProfileWatchlist';
import { Link } from 'react-router-dom';
import ProfileListCounter from './ProfileListCounter/ProfileListCounter';
import { User } from '../../types';
import ErrorPage from '../ErrorPage/ErrorPage';
import OnBoarding from '../OnBoarding/OnBoarding';
import Loading from '../../components/Loading/Loading';
import { ErrorResponse } from '../../types';
import { useFetchUser } from '../../hooks'
import { useAuth } from '../../Auth/useAuth';

const ProfilePageAuth: React.FC = () => {
  const {user, isLoading, error} = useAuth();

  if (error) {
    return <Navigate replace to='/welcome' />;
  }

  if (isLoading) {
    return <Loading />;
  }

  return <Navigate replace to ={`/user/${user?.login}`}/>;
};

export default ProfilePageAuth;