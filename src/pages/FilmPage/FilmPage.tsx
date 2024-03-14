import React from 'react';
import { FilmData } from '../../types';
import { useParams } from 'react-router-dom';
import FilmCover from './FilmCover/FilmCover';
import CastCard from './CastCard/CastCard';
import ErrorPage from '../ErrorPage/ErrorPage';
import Loading from '../../components/Loading/Loading';
import { FilmReviewForm } from './FilmReviewForm/FilmReviewForm';
import FilmBackground from './FilmBackground/FilmBackground';
import { useFetch } from '../../hooks';

const FilmPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const baseUrl: string = `http://localhost:8080/movies`;

  const { data: filmData, isLoading, error } = useFetch<FilmData>(baseUrl, id);

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <ErrorPage code={204} description='данные не были получены' />;
  }

  return (
    <div className='film'>
      <FilmBackground url={filmData?.background} />
      <div className='film-page'>
        <FilmCover img={filmData?.cover} />
        <section className='film-page-info'>
          <div className='film-page-heading'>
            <p className='film-page-heading__title'>{filmData?.title}</p>
            <div className='film-page-heading__production'>
              <p className='year'>{filmData?.year}</p>
              <p className='director'>
                Режиссёр: <span>{filmData?.director}</span>
              </p>
            </div>
          </div>
          <p className='film-page-info__slogan'>{filmData?.slogan}</p>
          <p className='film-page-info__description'>{filmData?.description}</p>
          <hr />
          <div className='film-page-info__cast'>
            <p>Актёры</p>
            <div className='container'>
              {filmData?.cast?.map((castMember) => (
                <CastCard name={castMember} />
              ))}
            </div>
          </div>
          <hr />
          <FilmReviewForm />
        </section>
      </div>
    </div>
  );
};

export default FilmPage;
