import React from 'react';
import { Link } from 'react-router-dom';

const OnBoarding: React.FC = () => {
  return (
    <div className='onboarding'>
      <div className='onboarding__background'></div>
      <img src='/assets/logo2.png' alt='Логотип' />
      <p className='onboarding__text'>
        Отслеживайте фильмы, которые посмотрели. Пополняйте свою коллекцию.
        Найдите свой идеал.
      </p>
      <Link to='/login' className='onboarding__link'>
        Начнём!
      </Link>
    </div>
  );
};

export default OnBoarding;
