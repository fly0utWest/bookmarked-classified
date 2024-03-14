import React from 'react';
import { useState } from 'react';
import FilmLink from '../../HomePage/FilmLink/FilmLink';
import { FilmData } from '../../../types';
import { Link } from 'react-router-dom';
import { ProfileFavoritesProps } from '../../../types';

const ProfileFavorites: React.FC<ProfileFavoritesProps> = (props) => {

  return (
    <section className='profile-favorites'>
      <div className='profile-favorites__section'>
        {props.favourites ?? 0} 
      </div>
    </section>
  );
};

export default ProfileFavorites;
