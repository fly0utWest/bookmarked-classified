import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { Navigate } from 'react-router-dom';
import { useTheme } from '../../contexts/ThemeContext';

const OnBoarding: React.FC = () => {
  const { user, error } = useAuth();
  const {theme} = useTheme();

  if (user && !error) {
    return <Navigate replace to='/home' />;
  }

  return (
    <div className='onboarding'>
      <div className='onboarding__background'></div>
      <div className='container onboarding__container'>
        <img src={`${theme === 'dark' ? '/assets/logo2.png' : '/assets/logo2-dark.png'}`} alt='Логотип' />
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
