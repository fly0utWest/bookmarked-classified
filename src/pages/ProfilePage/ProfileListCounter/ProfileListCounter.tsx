import React from 'react';
import { Link } from 'react-router-dom';
import { ProfileListCounterProps } from '../../../types';

const ProfileListCounter: React.FC<ProfileListCounterProps> = ({favoritesCount, watchlistCount, login}) => {
  const favCounter: number = favoritesCount?.length ?? 0;
  const watchLaterCounter: number = watchlistCount?.length ?? 0;

  return (
    <div className='profile-list-counter profile-page-header__profile-list-counter'>
      <Link
        to={`/user/${login}/favourites`}
        className='profile-list-counter__favorites'
      >
        <p className='counter'>{favCounter}</p>
        <p>
          Любимых
          <br />
          фильмов
        </p>
      </Link>
      <Link
        to={`/user/${login}/watchlist`}
        className='profile-list-counter__watchlist'
      >
        <p className='counter'>{watchLaterCounter}</p>
        <p>
          Смотреть
          <br />
          позже
        </p>
      </Link>
    </div>
  );
};

export default ProfileListCounter;
