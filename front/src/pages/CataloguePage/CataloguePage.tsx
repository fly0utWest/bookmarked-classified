import { useFetch } from '../../hooks/useFetch';
import { FilmData } from '../../types';
import config from '../../utils/config';
import SlicedList from '../../utils/SlicedList';
import Loading from '../../components/Loading/Loading';
import ErrorPage from '../ErrorPage/ErrorPage';

const CataloguePage = () => {
  const {
    data: films,
    isLoading,
    error,
  } = useFetch<FilmData[]>(`${config.BACK_API}/movies`);

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <ErrorPage description='Данные не были получены' code={204} />;
  }

  return (
    <div className='catalogue'>
      <h1 className='catalogue-heading'>Каталог</h1>
      <section className='catalogue-section'>
        {films && (
          <SlicedList
            films={films}
            linkClassModifier='catalogue-section__film-link'
          />
        )}
      </section>
    </div>
  );
};

export default CataloguePage;
