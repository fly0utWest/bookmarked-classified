import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ListsButtons from '../../../components/ListsButtons/ListsButtons';

type FilmLinkProps = {
  filmId?: number;
  src: string;
  classModifier?: string;
};

const FilmLink: React.FC<FilmLinkProps> = (props) => {
  return (
    <div className={`film-link ${props.classModifier ?? ''}`}>
      <Link to={`/film/${props.filmId}`}>
        <img src={props.src} alt='Ссылка на фильм' />
      </Link>
      <ListsButtons />
    </div>
  );
};

export default FilmLink;
