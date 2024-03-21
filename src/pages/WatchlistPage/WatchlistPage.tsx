import React from 'react';
import { useFetch } from '../../hooks';
import { useAuth } from '../../Auth/useAuth';
import { Navigate } from 'react-router-dom';
import config from '../../utils';
import ErrorPage from '../ErrorPage/ErrorPage';

const WatchlistPage: React.FC = () => {
  const {data: films, isLoading, error: fetchError} = useFetch(`${config.BACK_API}`);

  return (
    <section className='watchlist'>
      <h1>Смотреть позже</h1>
    </section>
  );
};

export default WatchlistPage;
