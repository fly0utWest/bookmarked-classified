import { useState, useEffect } from 'react';
import ErrorPage from '../../ErrorPage/ErrorPage';
import Loading from '../../../components/Loading/Loading';
import { FilmData } from '../../../types';
import FilmLink from '../FilmLink/FilmLink';
import { useFetch } from '../../../hooks';
import config from '../../../utils';

const PopularThisMonth: React.FC = () => {
  const baseUrl: string = `${config.BACK_API}/movies`;
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
          {filmList?.slice(0, 6).map((film) => (
            <FilmLink
              key={film.id}
              filmId={film.id}
              src={`${config.IMAGE_API}/film-covers/${film.cover}`}
            />
          ))}
        </div>
      </section>
      <hr />
    </>
  );
};

export default PopularThisMonth;
