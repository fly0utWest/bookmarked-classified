import React from 'react';
import ListsButtons from '../../../components/ui/ListsButtons/ListsButtons';
import { FilmCoverProps } from '../../../types';
import config from '../../../config/config';
import { useAuth } from '../../../contexts/AuthContext';

const FilmCover: React.FC<FilmCoverProps> = ({ img, filmId }) => {
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
    <div className='film-cover'>
      <img src={`${config.IMAGE_API}/film-covers/${img}`} alt='' />
      <ListsButtons
        filmId={filmId}
        classModifier='film-cover__lists-buttons'
        listStatus={userListed}
      />
    </div>
  );
};

export default FilmCover;
