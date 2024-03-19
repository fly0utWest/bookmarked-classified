import React from 'react';
import { FilmData } from '../../../types';
import ErrorPage from '../../ErrorPage/ErrorPage';
import Loading from '../../../components/Loading/Loading';
import { ProfileWatchedProps } from '../../../types';
import { convertParams } from '../../../utils';
import { useFetch } from '../../../hooks';
import config from '../../../utils';
import SlicedList from '../../../components/SlicedList/SliceList';

const ProfileWatched: React.FC<ProfileWatchedProps> = (props) => {
  const baseUrl: string = `${config.BACK_API}/moviesFilter?${convertParams(
    'id',
    props.watched!,
  )}`;
  const { data: filmList, isLoading, error } = useFetch<FilmData[]>(baseUrl);

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <ErrorPage code={204} description='данные не были получены' />;
  }

  return (
    <section className='profile-watched'>
      <div className='profile-watched-section'>
        <SlicedList
          films={filmList!}
          limit={6}
          linkClassModifier='profile-watched-section__film-link'
        />
      </div>
    </section>
  );
};

export default ProfileWatched;
