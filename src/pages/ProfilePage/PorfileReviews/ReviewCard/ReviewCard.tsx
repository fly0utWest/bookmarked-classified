import React from 'react';
import FilmLink from '../../../HomePage/FilmLink/FilmLink';
import { Link } from 'react-router-dom';

const ReviewCard: React.FC = () => {
  return (
    <div className='review-card'>
      <FilmLink
        filmId={1}
        src='/assets/film-covers/wonka-cover.jpg'
        classModifier='film-link_profile'
      />
      <div className='review-card__info'>
        <Link to='/movies/1'>Вонка</Link>
        <span>
          <i>2023</i>
        </span>
        <p>Фильм супер!</p>
      </div>
    </div>
  );
};

export default ReviewCard;
