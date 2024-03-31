import React from 'react';
import { HomeFeatureType } from '../../../types';
import { Link } from 'react-router-dom';

const HomeFeature: React.FC<HomeFeatureType> = ({ icon, alt, text }) => {
  return (
    <Link to='/welcome' className='home-feature'>
      <img className='home-feature__icon' src={icon} alt={alt} />
      <p className='home-feature__text'>{text}</p>
    </Link>
  );
};

export default HomeFeature;
