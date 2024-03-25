import React from 'react';
import { useFetch } from '../../hooks/useFetch';
import { useAuth } from '../../contexts/AuthContext';
import { Navigate } from 'react-router-dom';
import config from '../../utils/utils';
import ErrorPage from '../ErrorPage/ErrorPage';
import { useParams } from 'react-router-dom';
import SlicedList from '../../components/SlicedList/SlicedList';
import { FilmData, ListPageProps, User } from '../../types';
import { convertParams } from '../../utils/utils';
import { ListPageType } from '../../types';

const ListPage: React.FC<ListPageProps> = ({ heading, type }) => {
  const { id } = useParams<{ id: string }>();

  const userUrl = `${config.BACK_API}/users`;
  const {
    data: userData,
    isLoading: isUserLoading,
    error: userError,
  } = useFetch<User>(userUrl, id);

  const moviesUrl = `${config.BACK_API}/moviesFilter?${convertParams(
    'id',
    userData?.favourites!,
  )}`;

  const {
    data: films,
    isLoading: isFilmsLoading,
    error: filmsError,
  } = useFetch<FilmData[]>(moviesUrl);

  console.log(films);

  return (
    <section className='list'>
      <h1>{heading}</h1>
      {films ? <SlicedList films={films} /> : null}
    </section>
  );
};

export default ListPage;
