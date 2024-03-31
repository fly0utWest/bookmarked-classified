import React from 'react';
import FilmLink from '../../pages/HomePage/FilmLink/FilmLink';
import { Link } from 'react-router-dom';
import config from '../../utils/utils';
import { useFetch } from '../../hooks/useFetch';
import { FilmData, ReviewCardProps } from '../../types';
import { matchReviewType } from '../../utils/matchReviewType';
import { useAuth } from '../../contexts/AuthContext';
import deleteIcon from '../../assets/icons/delete.svg';

const ReviewCard: React.FC<ReviewCardProps> = ({ review }) => {
  const {
    data: film,
    isLoading,
    error,
  } = useFetch<FilmData>(`${config.BACK_API}/movies/${review?.movieId}`);

  const {user} = useAuth();

  return (
    <div className={`review-card ${matchReviewType(review?.reviewType!)}`}>
      <FilmLink
        filmId={String(film?.id)}
        src={`${config.IMAGE_API}/film-covers/${film?.cover}`}
        classModifier='review-card__film-link'
      />
      <div className='review-card__info'>
        <Link to={`/film/${film?.id}`}>{film?.title}</Link>
        <span>
          <i>{film?.year}</i>
        </span>
        <p className='review-title'>{review?.title}</p>
        <p className='review-text'>{review?.text}</p>
      </div>
      <button className='review-card__delete'>
        {user?.reviews.includes(review?.id!) ? <img src={deleteIcon} alt="" /> : null}
      </button>
    </div>
  );
};

export default ReviewCard;
