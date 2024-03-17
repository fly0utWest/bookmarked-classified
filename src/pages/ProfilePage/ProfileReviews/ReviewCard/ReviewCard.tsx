import React from 'react';
import FilmLink from '../../../HomePage/FilmLink/FilmLink';
import { Link } from 'react-router-dom';
import config from '../../../../utils';

const ReviewCard: React.FC = () => {
  return (
    <div className='review-card'>
      <FilmLink
        filmId={1}
        src={`${config.IMAGE_API}/film-covers/wonka-cover.jpg`}
        classModifier='review-card__film-link'
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
