import React from 'react';
import ProfileBackground from './ProfileBackground/ProfileBackground';
import ProfileAvatar from './ProfileAvatar/ProfileAvatar';
import ProfileListCounter from './ProfileListCounter/ProfileListCounter';
import ProfileFavorites from './ProfileFavorites/ProfileFavorites';
import ProfileWatchlist from './ProfileWatchlist/ProfileWatchlist';
import ProfileReviews from './PorfileReviews/ProfileReviews';
import { Link } from 'react-router-dom';

const ProfilePage = () => {
  return (
    <div className='profile'>
      <ProfileBackground />
      <ProfileAvatar />
      <div className='profile-page'>
        <p className='profile-page__name'>Никита</p>
        <p className='profile-page__bio'>Плейсхолдер для био</p>
        <ProfileListCounter />
        <div className='container profile-page__container'>
          <h2>Любимые фильмы</h2>
          <Link to='/profile/:id/favorites/'>Показать все</Link>
        </div>
        <ProfileFavorites />
        <hr />
        <div className='container profile-page__container'>
          <h2>Смотреть позже</h2>
          <Link to='/profile/:id/favorites/'>Показать все</Link>
        </div>
        <ProfileWatchlist />
        <hr />
        <div className='container profile-page__container'>
          <h2>Обзоры</h2>
        </div>
        <ProfileReviews />
      </div>
    </div>
  );
};

export default ProfilePage;
