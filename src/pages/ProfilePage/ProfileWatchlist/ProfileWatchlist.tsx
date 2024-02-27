import React from 'react';
import FilmLink from '../../HomePage/FilmLink/FilmLink';
import { Link } from 'react-router-dom';

const ProfileWatchlist: React.FC = () => {
  return (
    <section className='profile-watchlist'>
      <div className='profile-watchlist__section'>
        <FilmLink
          src='/assets/film-covers/chou-chou.webp'
          classModifier='film-link_profile'
        />
        <FilmLink
          src='/assets/film-covers/chou-chou.webp'
          classModifier='film-link_profile'
        />
        <FilmLink
          src='/assets/film-covers/chou-chou.webp'
          classModifier='film-link_profile'
        />
        <FilmLink
          src='/assets/film-covers/chou-chou.webp'
          classModifier='film-link_profile'
        />
      </div>
    </section>
  );
};

export default ProfileWatchlist;
