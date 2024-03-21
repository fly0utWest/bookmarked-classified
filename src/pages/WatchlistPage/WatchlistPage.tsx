import React from 'react';
import { useFetch } from '../../hooks';
import { useAuth } from '../../Auth/useAuth';
import { Navigate } from 'react-router-dom';
import config from '../../utils';
import ErrorPage from '../ErrorPage/ErrorPage';

const WatchlistPage: React.FC = () => {
  const { user, error } = useAuth();
  const {data: films, isLoading, error: fetchError} = useFetch(`${config.BACK_API}`);

  if (error) {
    return <Navigate replace to='/welcome' />;
  } else if (fetchError) {
    return <ErrorPage/>    
  }

  return (
    <section className='watchlist'>
      <h1>Смотреть позже</h1>
    </section>
  );
};

export default WatchlistPage;
