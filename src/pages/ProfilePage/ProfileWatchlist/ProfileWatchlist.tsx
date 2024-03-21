import React from 'react';
import FilmLink from '../../HomePage/FilmLink/FilmLink';
import { Link } from 'react-router-dom';
import { ProfileWatchlistProps } from '../../../types';
import config from '../../../utils';
import { convertParams } from '../../../utils';
import { useFetch } from '../../../hooks';
import { FilmData } from '../../../types';
import SliceList from '../../../components/SliceList/SliceList';
import ErrorPage from '../../ErrorPage/ErrorPage';
import Loading from '../../../components/Loading/Loading';

const ProfileWatchlist: React.FC<ProfileWatchlistProps> = (props) => {
  const baseUrl: string = `${config.BACK_API}/moviesFilter?${convertParams(
    'id',
    props.watchLater!,
  )}`;
  const { data: filmList, isLoading, error } = useFetch<FilmData[]>(baseUrl);

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <ErrorPage code={204} description='данные не были получены' />;
  }

  return (
    <section className='profile-watchlist'>
      <div className='profile-watchlist-section'>
        {filmList && (
          <SliceList
            films={filmList}
            limit={6}
            linkClassModifier='profile-watchlist-section__film-link'
          />
        )}
      </div>
    </section>
  );
};

export default ProfileWatchlist;
