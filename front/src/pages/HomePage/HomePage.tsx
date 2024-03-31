import React from 'react';
import { Link } from 'react-router-dom';
import PopularThisMonth from './PopularThisMonth/PopularThisMonth';
import PopularListsThisMonth from './PopularListsThisMonth/PopularListsThisMonth';
import RecentArticles from './RecentArticles/RecentArticles';
import LatestNews from './LatestNews/LatestNews';
import { useAuth } from '../../contexts/AuthContext';
import LoginButton from '../../components/ui/LoginButton/LoginButton';
import HomeFeature from './HomeFeature/HomeFeature';

const HomePage: React.FC = () => {
  const { user } = useAuth();

  return (
    <div className='home'>
      {user ? null : <div className='home-unauthorized'></div>}
      <h1 className={`home__heading ${user ? 'home__heading_authorized' : ''}`}>
        {user ? (
          <>
            Привет, <span>{user?.login}</span>!
          </>
        ) : (
          'Отслеживайте фильмы, которые посмотрели. Пополняйте свою коллекцию. Найдите свой идеал.'
        )}
      </h1>
      <p
        className={`home__greeting ${
          user ? '' : 'home__greeting_unauthorized'
        }`}
      >
        {user ? (
          'Напишите обзор на уже просмотренный фильм или откройте для себя пару новинок'
        ) : (
          <LoginButton classModifier='home__login-button' />
        )}
      </p>
      <PopularThisMonth />
      {user ? (
        <Link to='/home' className='home__banner'>
          <img src='/assets/ad-banner.jpg' alt='' />
        </Link>
      ) : (
        <section className='home-features'>
          <HomeFeature
            icon='/assets/icons/watched.svg'
            alt='Просмотренное'
            text='Отслеживайте фильмы и отмечайте просмотренные!'
          />
          <HomeFeature
            icon='/assets/icons/listed.svg'
            alt='Список'
            text='Возможность вести личные списки фильмов!'
          />{' '}
          <HomeFeature
            icon='/assets/icons/liked.svg'
            alt='Понравившеися'
            text='Отмечайте понравившеися шоу!'
          />{' '}
          <HomeFeature
            icon='/assets/icons/reviews.svg'
            alt='Обзор'
            text='Расскажите миру своё мнение, написав обзор!'
          />{' '}
          <HomeFeature
            icon='/assets/icons/watchlist.svg'
            alt='Каталог'
            text='Находите новые шоу в нашем каталоге!'
          />{' '}
          <HomeFeature
            icon='/assets/icons/home.svg'
            alt='Составляйте списки просмотренных!'
            text='Создайте свой профиль!'
          />
        </section>
      )}
      <PopularListsThisMonth />
      <RecentArticles />
      <LatestNews />
    </div>
  );
};

export default HomePage;
