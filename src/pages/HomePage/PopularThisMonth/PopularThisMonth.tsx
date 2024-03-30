import Loading from '../../../components/Loading/Loading';
import { FilmData } from '../../../types';
import { useFetch } from '../../../hooks/useFetch';
import config from '../../../utils/utils';
import SlicedList from '../../../components/SlicedList/SlicedList';
import ErrorMessage from '../../../components/ui/ErrorMessage/ErrorMessage';

const PopularThisMonth: React.FC = () => {
  const baseUrl: string = `${config.BACK_API}/moviesFilter?sort=rating`;
  const { data: filmList, isLoading, error } = useFetch<FilmData[]>(baseUrl);

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <ErrorMessage message={error} classModifier='error-message_warning'/>  }

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
