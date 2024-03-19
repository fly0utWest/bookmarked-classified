import React from 'react';
import { FilmData } from '../../../types';
import ErrorPage from '../../ErrorPage/ErrorPage';
import Loading from '../../../components/Loading/Loading';
import { ProfileFavoritesProps } from '../../../types';
import { convertParams } from '../../../utils';
import { useFetch } from '../../../hooks';
import config from '../../../utils';
import FilmList from '../../../components/FilmList/FilmList';

const ProfileFavorites: React.FC<ProfileFavoritesProps> = (props) => {
  const baseUrl: string = `${config.BACK_API}/moviesFilter?${convertParams(
    'id',
    props.favourites!,
  )}`;
  const { data: filmList, isLoading, error } = useFetch<FilmData[]>(baseUrl);

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <ErrorPage code={204} description='данные не были получены' />;
  }

  return (
    <section className='profile-favorites'>
      <div className='profile-favorites-section'>
        <FilmList
          films={filmList!}
          limit={6}
          linkClassModifier='profile-favorites-section__film-link'
        />
      </div>
    </section>
  );
};

export default ProfileFavorites;
