import React from 'react';
import FilmLink from '../../HomePage/FilmLink/FilmLink';
import { Link } from 'react-router-dom';
import { ProfileWatchlistProps } from '../../../types';
import config from '../../../utils';
import { convertParams } from '../../../utils';
import { useFetch } from '../../../hooks';
import { FilmData } from '../../../types';

const ProfileWatchlist: React.FC<ProfileWatchlistProps> = (props) => {
  const baseUrl: string = `${config.BACK_API}/movies?${convertParams(
    'id',
    props.watchLater!,
  )}`;
  const { data: filmList, isLoading, error } = useFetch<FilmData[]>(baseUrl);
  
  return (
    <section className='profile-watchlist'>
      <div className='profile-watchlist__section'>
            {filmList?.slice(0, 6).map((film) => (
          <FilmLink
            key={film.id}
            filmId={film.id}
            src={`${config.IMAGE_API}/film-covers/${film.cover}`}
          />
        ))}
      </div>
    </section>
  );
};

export default ProfileWatchlist;
