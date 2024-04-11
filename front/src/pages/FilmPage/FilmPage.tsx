import React from 'react';
import { FilmData } from '../../types';
import { useParams } from 'react-router-dom';
import FilmCover from './FilmCover/FilmCover';
import CastCard from './CastCard/CastCard';
import ErrorPage from '../ErrorPage/ErrorPage';
import Loading from '../../components/Loading/Loading';
import { FilmReviewForm } from './FilmReviewForm/FilmReviewForm';
import FilmBackground from './FilmBackground/FilmBackground';
import { useFetch } from '../../hooks/useFetch';
import config from '../../config/config';
import { getRatingClass } from '../../utils/getRatingClass';
import AuthAlert from '../../components/AuthAlert/AuthAlert';
import { useAuth } from '../../contexts/AuthContext';
import { Review } from '../../types';
import ReviewCard from '../../components/ReviewCard/ReviewCard';

const FilmPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { user } = useAuth();
  const movieUrl: string = `${config.BACK_API}/movies`;
  const reviewUrl: string = `${config.BACK_API}/review`;

  const { data: filmData, isLoading, error } = useFetch<FilmData>(movieUrl, id);
  const {
    data: reviewData,
    isLoading: reviewLoading,
    error: reviewError,
  } = useFetch<Review[]>(`${reviewUrl}/${user?.id}/${id}`);

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
        <FilmCover filmId={id} img={filmData?.cover} />
        <section className='film-page-info'>
          <div className='film-page-heading'>
            <p className='film-page-heading__title'>{filmData?.title}</p>
            <p
              className={`film-page-heading__rating ${getRatingClass(
                filmData?.rating!,
              )}`}
            >
              {filmData?.rating}
            </p>
            <div className='film-page-heading__production'>
              <p className='year'>{filmData?.year}</p>
              <p className='director'>
                Режиссёр: <span className='director__name'>{filmData?.director}</span>,{' '}
                <span className='director__studio'>{filmData?.studio}</span>
              </p>
            </div>
          </div>
          <p className='film-page-info__slogan'>{filmData?.slogan}</p>
          <p className='film-page-info__description'>{filmData?.description}</p>
          <hr />
          <div className='film-page-info__cast'>
            <p className='cast-heading'>Актёры</p>
            <div className='container'>
              {filmData?.cast?.map((castMember) => (
                <CastCard key={castMember} name={castMember} />
              ))}
            </div>
          </div>
          <hr />
          {!user && (
            <AuthAlert message='Сначала авторизуйтесь, чтобы написать рецензию.' />
          )}
          {user &&
            (reviewData?.length === 0 || reviewData === null ? (
              <FilmReviewForm />
            ) : (
              <ReviewCard review={reviewData?.[0]} />
            ))}
        </section>
      </div>
    </div>
  );
};

export default FilmPage;
