import React from 'react';
import FilmLink from '../../HomePage/FilmLink/FilmLink';
import { FilmData } from '../../../types';
import { Link } from 'react-router-dom';
import ErrorPage from '../../ErrorPage/ErrorPage';
import Loading from '../../../components/Loading/Loading';
import { ProfileFavoritesProps } from '../../../types';
import { convertParams } from '../../../utils';
import { useFetch } from '../../../hooks';
import config from '../../../utils';
import FilmList from '../../../components/FilmList/FilmList';

const ProfileFavorites: React.FC<ProfileFavoritesProps> = (props) => {
  const baseUrl: string = `${config.BACK_API}/movies?${convertParams(
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
      <div className='profile-favorites__section'>
        <FilmList films={filmList!} limit={6}/>
      </div>
    </section>
  );
};

export default ProfileFavorites;
