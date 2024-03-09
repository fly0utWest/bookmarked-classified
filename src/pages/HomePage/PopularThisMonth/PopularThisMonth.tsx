import { useState, useEffect } from 'react';
import ErrorPage from '../../ErrorPage/ErrorPage';
import Loading from '../../../components/Loading/Loading';
import { FilmData } from '../../../types';
import FilmLink from '../FilmLink/FilmLink';
import { fetchFilms } from '../../../utils';

const PopularThisMonth: React.FC = () => {
  const [filmList, setFilmList] = useState<FilmData[] | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const baseUrl: string = 'http://localhost:8080/movies';
    setIsLoading(true);
    fetchFilms(baseUrl)
      .then((data) => {
        setFilmList(data);
      })
      .catch((error: Error) => {
        console.error(`Fetching error: ${error.message}`);
        setError(error.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

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
              src={`assets/film-covers/${film.cover}`}
            />
          ))}
        </div>
      </section>
      <hr />
    </>
  );
};

export default PopularThisMonth;
