import { useState, useEffect } from 'react';
import ErrorPage from '../../ErrorPage/ErrorPage';
import Loading from '../../../components/Loading/Loading';
import { FilmData } from '../../../types';
import FilmLink from '../FilmLink/FilmLink';

const PopularThisMonth: React.FC = () => {
  const [filmList, setFilmList] = useState<FilmData[] | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchFilmData = async () => {
    setIsLoading(true);

    try {
      const response = await fetch(`http://localhost:8080/movies`);

      if (!response.ok) {
        throw new Error('HTTP error!');
      }

      const json = await response.json();
      setFilmList(json);
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error(`Fetching error: ${error.message}`);
        setError(error.message);
      } else {
        console.error('An unexpected error has occured!');
        setError('An unexpected error has occured');
      }
    } finally {
      setIsLoading(false);
    }
    if (isLoading) {
      return <Loading />;
    }

    if (error) {
      return <ErrorPage code={204} description='данные не были получены' />;
    }
  };

  useEffect((): void => {
    fetchFilmData();
  }, []);

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
