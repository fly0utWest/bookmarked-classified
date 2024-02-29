import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header/Header';
import BottomNav from '../../components/BottomNav/BottomNav';
import PopularThisMonth from './PopularThisMonth/PopularThisMonth';
import PopularListsThisMonth from './PopularListsThisMonth/PopularListsThisMonth';
import RecentArticles from './RecentArticles/RecentArticles';
import LatestNews from './LatestNews/LatestNews';

type HomePageProps = {
  username: string;
};

const HomePage = (props: HomePageProps) => {
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
