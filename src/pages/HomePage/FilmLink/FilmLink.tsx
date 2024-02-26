import React from 'react';
import { Link } from 'react-router-dom';

type FilmLinkProps = {
  filmId?: number;
  src: string;
  classModifier?: string;
};

const FilmLink = (props: FilmLinkProps) => {
  return (
    <div
      className={`film-link${
        props.classModifier === undefined ? '' : ' ' + props.classModifier
      }`}
    >
      <Link to={`/film/${props.filmId}`}>
        <img src={props.src} alt='Ссылка на фильм' />
      </Link>
    </div>
  );
};

export default FilmLink;
