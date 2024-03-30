import React, { useEffect, useState } from 'react';
import { useFetch } from '../../hooks/useFetch';
import { useAuth } from '../../contexts/AuthContext';
import { Navigate } from 'react-router-dom';
import config from '../../utils/utils';
import ErrorPage from '../ErrorPage/ErrorPage';
import { useParams } from 'react-router-dom';
import SlicedList from '../../components/SlicedList/SlicedList';
import { FilmData, ListPageProps, User } from '../../types';
import { convertParams } from '../../utils/utils';
import { matchListType } from '../../utils/matchListType';
import ErrorMessage from '../../components/ui/ErrorMessage/ErrorMessage';

const ListPage: React.FC<ListPageProps> = ({ heading, type }) => {
  const { id } = useParams<{ id: string }>();
  const { user } = useAuth();

  const userUrl = `${config.BACK_API}/users`;
  const {
    data: userData,
    isLoading: isUserLoading,
    error: userError,
  } = useFetch<User>(userUrl, id);

  const [films, setFilms] = useState<FilmData[]>([]);
  const [isFilmsLoading, setIsFilmsLoading] = useState<boolean>(true);
  const [filmsError, setFilmsError] = useState<string | null>(null);

  const listType = matchListType(type, userData!);
  const params = convertParams('id', listType);

  useEffect(() => {
    const abortController = new AbortController();

    if (listType && listType.length > 0) {
      const moviesUrl = `${config.BACK_API}/moviesFilter?${params}`;

      fetch(moviesUrl, { signal: abortController.signal })
        .then((response) => response.json())
        .then((data) => {
          setFilms(data);
        })
        .catch((error) => {
          if ((error as Error).name !== 'AbortError') {
            setFilmsError(
              error instanceof Error
                ? error.message
                : 'An unexpected error has occurred',
            );
          }
        })
        .finally(() => {
          setIsFilmsLoading(false);
        });
    }

    return () => {
      abortController.abort();
    };
  }, [userData, listType]);

  if (listType?.length === 0) {
      return (
        <div className='list'>
          <h1 className='list-heading'>
            {`Список "${heading}" пользователя `}
            <span className='list-heading__nickname'>{userData?.login}</span>
          </h1>
          <section className='list-section'>
              <ErrorMessage message='В списке пока пусто :(' />
          </section>
          <hr />
        </div>
      );
  }

  return (
    <div className='list'>
      <h1 className='list-heading'>
        {`Список "${heading}" пользователя `}
        <span className='list-heading__nickname'>{userData?.login}</span>
      </h1>
      <section className='list-section'>
        {films && 
          <SlicedList
            films={films}
            linkClassModifier='list-section__film-link'
          />}
        {filmsError ? <ErrorMessage message={filmsError!}/> : null}
        {listType?.length === 0 && <ErrorMessage message='В списке пока пусто :('/>}
      </section>
      <hr />
    </div>
  );
};

export default ListPage;
