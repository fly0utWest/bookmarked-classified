import React from 'react';
import { ProfileListProps } from '../../../types';
import config from '../../../utils/utils';
import { convertParams } from '../../../utils/utils';
import { useFetch } from '../../../hooks/useFetch';
import { FilmData } from '../../../types';
import SlicedList from '../../../components/SlicedList/SlicedList';
import ErrorPage from '../../ErrorPage/ErrorPage';
import Loading from '../../../components/Loading/Loading';
import ListError from '../../../components/ui/ListError/ListError';

const ProfileList: React.FC<ProfileListProps> = ({ listArray }) => {
  const baseUrl: string = `${config.BACK_API}/moviesFilter?${convertParams(
    'id',
    listArray!,
  )}`;
  const { data: filmList, isLoading, error } = useFetch<FilmData[]>(baseUrl);

  if (isLoading) {
    return <Loading />;
  }

  if (listArray?.length === 0) {
    return <ListError />;
  }

  if (error) {
    return <ErrorPage code={204} description='данные не были получены' />;
  }

  return (
    <section className='profile-list-section'>
      {filmList && (
        <SlicedList
          films={filmList}
          limit={6}
          linkClassModifier='profile-list-section__film-link'
        />
      )}
    </section>
  );
};

export default ProfileList;
