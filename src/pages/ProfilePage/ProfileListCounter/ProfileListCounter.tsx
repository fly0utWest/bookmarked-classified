import React from 'react';
import { Link } from 'react-router-dom';

type ProfileListCounterProps = {
  favoritesCount: number;
  watchlistCount: number;
};

const ProfileListCounter = () => {
  return (
    <div className='profile-list-counter profile-page__profile-list-counter'>
      <Link
        to='/profile/:id/favorites'
        className='profile-list-counter__favorites'
      >
        <p className='counter'>9</p>
        <p>Любимых</p>
      </Link>
      <Link
        to='/profile/:id/favorites'
        className='profile-list-counter__watchlist'
      >
        <p className='counter'>11</p>
        <p>Смотреть позже</p>
      </Link>
    </div>
  );
};

export default ProfileListCounter;
