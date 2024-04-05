import React from 'react';
import { Link } from 'react-router-dom';
import { FilmCardProps } from '../../types';
import FilmLink from '../../pages/HomePage/FilmLink/FilmLink';
import { getRatingClass } from '../../utils/getRatingClass';
import config from '../../utils/utils';
import { useNavigate } from 'react-router-dom';

const FilmCard: React.FC<FilmCardProps> = ({ film }) => {
  const navigate = useNavigate();

  return (
    <article className='film-card' onClick={() => navigate(`/film/${film.id}`)}>
      <FilmLink
        filmId={String(film?.id)}
        src={`${config.IMAGE_API}/film-covers/${film?.cover}`}
        classModifier='film-card__film-link'
      />
      <div className='film-info'>
        <Link to={`/film/${film?.id}`} className='film-info__title'>
          {film?.title}
        </Link>
        <p className='film-info'>
          <span className={`film-info__rating ${getRatingClass(film?.rating)}`}>
            {film?.rating}
          </span>
          , <span className='film-info__studio'>{film?.studio}</span>,{' '}
          <span className='film-info__year'>{film?.year}</span>
        </p>
      </div>
    </article>
  );
};

export default FilmCard;
