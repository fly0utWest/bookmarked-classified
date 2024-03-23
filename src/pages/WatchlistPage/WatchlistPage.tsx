import React from 'react';
import { useFetch } from '../../hooks';
import { useAuth } from '../../Auth/useAuth';
import { Navigate } from 'react-router-dom';
import config from '../../utils';
import ErrorPage from '../ErrorPage/ErrorPage';
import { useParams } from 'react-router-dom';
import SlicedList from '../../components/SlicedList/SlicedList';
import { ListPageProps, User } from '../../types';
import { convertParams } from '../../utils';
import { ListType } from '../../types';

const ListPage: React.FC<ListPageProps> = ({heading, type}) => {
  const { userId } = useParams<{ userId: string }>();
  const {data: userData, isLoading: isUserLoading, error: userError} = useFetch<User>('');
  const userUrl = `${config.BACK_API}/${userId}`;
    // const moviesUrl = `${config.BACK_API}/moviesFilter?${convertParams('id', userData?.)}`
  const {
    data: films,
    isLoading: isFilmsLoading,
    error: filmsError,
  } = useFetch(`${config.BACK_API}`);

  return (
    <section className='list'>
      <h1>{heading}</h1>
    </section>
  );
};

export default ListPage;
