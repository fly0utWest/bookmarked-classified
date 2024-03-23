import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ListsButtons from '../../../components/ListsButtons/ListsButtons';
import { FilmLinkProps } from '../../../types';
import { useAuth } from '../../../Auth/useAuth';

const FilmLink: React.FC<FilmLinkProps> = ({filmId, src, classModifier}) => {
  const { user } = useAuth();
  let userListed = {
    watched: false,
    liked: false,
    watchLater: false,
  };

  if (user) {
    userListed = {
      watched: user.watched.includes(Number(filmId)),
      liked: user.favourites.includes(Number(filmId)),
      watchLater: user.watchLater.includes(Number(filmId)),
    };
  }

  return (
    <div className={`film-link ${classModifier ?? ''}`}>
      <Link to={`/film/${filmId}`}>
        <img src={src} alt='Ссылка на фильм' />
      </Link>
      <ListsButtons listStatus={userListed}/>
    </div>
  );
};

export default FilmLink;
