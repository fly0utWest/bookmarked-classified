import React from 'react';
import FilmLink from '../../pages/HomePage/FilmLink/FilmLink';
import { Link } from 'react-router-dom';
import config from '../../utils/config';
import { useFetch } from '../../hooks/useFetch';
import { FilmData, ReviewCardProps } from '../../types';
import { matchReviewType } from '../../utils/matchReviewType';
import { useAuth } from '../../contexts/AuthContext';
import deleteIcon from '../../assets/icons/delete.svg';

const ReviewCard: React.FC<ReviewCardProps> = ({ review, classModifier }) => {
  const {
    data: film,
    isLoading,
    error,
  } = useFetch<FilmData>(`${config.BACK_API}/movies/${review?.movieId}`);

  const { user } = useAuth();

  const handleDelete = async () => {
    try {
      const response = await fetch(`${config.BACK_API}/review/${review?.id}`, {
        method: 'DELETE',
        headers: {
          'x-auth': `${localStorage.getItem('jwtToken')}`,
        },
      });
      if (!response.ok) {
        throw new Error('Deleting a review has failed.');
      }
      window.location.reload();
    } catch (error: unknown) {
      console.error('Review: ', error);
    }
  };

  return (
    <div
      className={`review-card ${
        classModifier ? classModifier : ''
      } ${matchReviewType(review?.reviewType!)}`}
    >
      <FilmLink
        filmId={String(film?.id)}
        src={`${config.IMAGE_API}/film-covers/${film?.cover}`}
        classModifier='review-card__film-link'
      />
      <div className='review-card__info'>
        <Link to={`/film/${film?.id}`}>{film?.title}</Link>
        <span>{film?.year}</span>
        <p className='review-title'>{review?.title}</p>
        <p className='review-text'>{review?.text}</p>
      </div>
      {user?.reviews.includes(review?.id!) ? (
        <button className='review-card__delete' onClick={handleDelete}>
          <img src={deleteIcon} alt='' />
        </button>
      ) : null}
    </div>
  );
};

export default ReviewCard;
