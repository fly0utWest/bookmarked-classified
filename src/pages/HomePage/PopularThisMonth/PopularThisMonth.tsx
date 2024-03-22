import { useState, useEffect } from 'react';
import ErrorPage from '../../ErrorPage/ErrorPage';
import Loading from '../../../components/Loading/Loading';
import { FilmData } from '../../../types';
import FilmLink from '../FilmLink/FilmLink';
import { useFetch } from '../../../hooks';
import config from '../../../utils';
import SlicedList from '../../../components/SlicedList/SlicedList';

const PopularThisMonth: React.FC = () => {
  const baseUrl: string = `${config.BACK_API}/moviesFilter?sort=rating`;
  const { data: filmList, isLoading, error } = useFetch<FilmData[]>(baseUrl);

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <ErrorPage code={204} description='данные не были получены' />;
  }

  return (
    <>
      <section className='popular-month'>
        <h2 className='popular-month__heading'>Популярно в этом месяце</h2>
        <div className='popular-month-section'>
          {filmList && (
            <SlicedList
              films={filmList}
              limit={6}
              linkClassModifier='popular-month-section__film-link'
            />
          )}
        </div>
      </section>
      <hr />
    </>
  );
};

export default PopularThisMonth;
