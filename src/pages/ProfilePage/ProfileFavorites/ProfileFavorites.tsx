import React from 'react';
import FilmLink from '../../HomePage/FilmLink/FilmLink';
import { Link } from 'react-router-dom';
import { ProfileFavoritesProps } from '../../../types';
const ProfileFavorites: React.FC<ProfileFavoritesProps> = (props) => {
  return (
    <section className='profile-favorites'>
      <div className='profile-favorites__section'>
        <FilmLink
          src='/assets/film-covers/chou-chou.webp'
          classModifier='film-link_profile'
        />
        <FilmLink
          filmId={1}
          src='/assets/film-covers/wonka-cover.jpg'
          classModifier='film-link_profile'
        />
      </div>
    </section>
  );
};

export default ProfileFavorites;
