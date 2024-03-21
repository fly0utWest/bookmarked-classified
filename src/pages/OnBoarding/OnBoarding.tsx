import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../Auth/useAuth';
import { Navigate } from 'react-router-dom';

const OnBoarding: React.FC = () => {
  const { user } = useAuth();

  if (user) {
    return <Navigate replace to='/home' />;
  }

  return (
    <div className='onboarding'>
      <div className='onboarding__background'></div>
      <div className='container onboarding__container'>
        <img src='/assets/logo2.png' alt='Логотип' />
        <p className='container__text'>
          Отслеживайте фильмы, которые посмотрели. Пополняйте свою коллекцию.
          Найдите свой идеал.
        </p>
        <Link to='/login' className='container__link'>
          Начнём!
        </Link>
      </div>
    </div>
  );
};

export default OnBoarding;
