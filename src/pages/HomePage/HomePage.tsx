import React from 'react';
import { Link } from 'react-router-dom';
import PopularThisMonth from './PopularThisMonth/PopularThisMonth';
import PopularListsThisMonth from './PopularListsThisMonth/PopularListsThisMonth';
import RecentArticles from './RecentArticles/RecentArticles';
import LatestNews from './LatestNews/LatestNews';
import { HomePageProps } from '../../types';
import config from '../../utils';

const HomePage: React.FC<HomePageProps> = (props) => {
  // const authFetch = async () => {
  //   const response = await fetch(`${config.BACK_API}/auth`, {
  //     method: 'POST',
  //     credentials: 'include',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({ login: 'Denis', password: 'anotherpass' }),
  //   });

  //   if (!response.ok) {
  //     throw new Error('Response was not ok.');
  //   }
  // };


  // const userFetch = async () => {
  //   const response = await fetch(`${config.BACK_API}/user`, {
  //     method: 'GET',
  //     credentials: 'include',
  //   });

  //   if (!response.ok) {
  //     throw new Error('Response was not ok.');
  //   }
  // };

  // authFetch();
  // userFetch();

  return (
    <div className='home'>
      <h1 className='home__heading'>
        Привет, <span>{props.username}</span>!
      </h1>
      <p className='home__greeting'>
        Напишите обзор на уже просмотренный фильм или откройте для себя пару
        новинок
      </p>
      <PopularThisMonth />
      <Link to='/home' className='home__banner'></Link>
      <PopularListsThisMonth />
      <RecentArticles />
      <LatestNews />
    </div>
  );
};

export default HomePage;
