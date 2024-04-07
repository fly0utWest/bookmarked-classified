import React from 'react';
import { Link } from 'react-router-dom';
import ListsButtons from '../../../components/ui/ListsButtons/ListsButtons';
import { FilmLinkProps } from '../../../types';
import { useAuth } from '../../../contexts/AuthContext';

const FilmLink: React.FC<FilmLinkProps> = ({ filmId, src, classModifier }) => {
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
        <img src={src} alt='Ссылка на фильм' loading='lazy'/>
      </Link>
      <ListsButtons filmId={filmId} listStatus={userListed} />
    </div>
  );
};

export default FilmLink;
