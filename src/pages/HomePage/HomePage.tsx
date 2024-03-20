import React from 'react';
import { Link } from 'react-router-dom';
import PopularThisMonth from './PopularThisMonth/PopularThisMonth';
import PopularListsThisMonth from './PopularListsThisMonth/PopularListsThisMonth';
import RecentArticles from './RecentArticles/RecentArticles';
import LatestNews from './LatestNews/LatestNews';
import { HomePageProps } from '../../types';
import config from '../../utils';
import { useAuth } from '../../Auth/useAuth';
import LoginButton from '../../components/ui/LoginButton/LoginButton';
import HomeFeature from './HomeFeature/HomeFeature';

const HomePage: React.FC = () => {
  const { user, error } = useAuth();

  return (
    <div className='home'>
      {error ? <div className='home-unauthorized'></div> : null}
      <h1 className={`home__heading ${error ? '' : 'home__heading_authorized'}`}>
        {error ? (
          'Отслеживайте фильмы, которые посмотрели. Пополняйте свою коллекцию. Найдите свой идеал.'
        ) : (
          <>
            Привет, <span>{user?.login}</span>!
          </>
        )}
      </h1>
      <p
        className={`home__greeting ${
          error ? 'home__greeting_unauthorized' : ''
        }`}
      >
        {error ? (
          <LoginButton classModifier='home__login-button' />
        ) : (
          'Напишите обзор на уже просмотренный фильм или откройте для себя пару новинок'
        )}
      </p>
      <PopularThisMonth />
      {error ? (
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
      ) : (
        <Link to='/home' className='home__banner'></Link>
      )}
      <PopularListsThisMonth />
      <RecentArticles />
      <LatestNews />
    </div>
  );
};

export default HomePage;
