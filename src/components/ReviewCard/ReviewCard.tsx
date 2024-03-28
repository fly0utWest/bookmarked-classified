import React from 'react';
import FilmLink from '../../pages/HomePage/FilmLink/FilmLink';
import { Link } from 'react-router-dom';
import config from '../../utils/utils';
import { useFetch } from '../../hooks/useFetch';
import { FilmData, ReviewCardProps } from '../../types';

const ReviewCard: React.FC<ReviewCardProps> = ({ review }) => {
  const {
    data: film,
    isLoading,
    error,
  } = useFetch<FilmData>(`${config.BACK_API}/movies/${review?.movieId}`);

  return (
    <div className='review-card'>
      <FilmLink
        filmId={String(film?.id)}
        src={`${config.IMAGE_API}/film-covers/${film?.cover}`}
        classModifier='review-card__film-link'
      />
      <div className='review-card__info'>
        <Link to={`/movies/${film?.id}`}>{film?.title}</Link>
        <span>
          <i>{film?.year}</i>
        </span>
        <p className='review-title'>{review?.title}</p>
        <p className='review-text'>{review?.text}</p>
      </div>
    </div>
  );
};

export default ReviewCard;
