import React from 'react';
import ProfileBackground from './ProfileBackground/ProfileBackground';
import ProfileAvatar from './ProfileAvatar/ProfileAvatar';
import ProfileListCounter from './ProfileListCounter/ProfileListCounter';
import ProfileFavorites from './ProfileFavorites/ProfileFavorites';
import ProfileWatchlist from './ProfileWatchlist/ProfileWatchlist';
import ProfileReviews from './ProfileReviews/ProfileReviews';
import { Link } from 'react-router-dom';

const ProfilePage: React.FC = () => {
  return (
    <div className='profile'>
      <ProfileBackground />
      <div className='profile-page'>
        <div className='profile-page-header'>
          <ProfileAvatar />
          <div className='container profile-page-header__container'>
            <p className='profile-page-header__name'>Никита</p>
            <p className='profile-page-header__bio'>Плейсхолдер для био</p>
          </div>
          <ProfileListCounter />
        </div>
        <div className='profile-page__flex'>
          <div>
            <div className='container profile-page__container'>
              <h2>Любимые фильмы</h2>
              <Link to='/user/:id/favorites/'>Показать все</Link>
            </div>
            <ProfileFavorites />
            <hr />
            <div className='container profile-page__container'>
              <h2>Смотреть позже</h2>
              <Link to='/user/:id/favorites/'>Показать все</Link>
            </div>
            <ProfileWatchlist />
            <hr />
            <div className='container profile-page__container'></div>
          </div>
          <ProfileReviews />
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
