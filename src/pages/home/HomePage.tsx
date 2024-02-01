import React from "react";
import Header from "../../components/header/Header";
import BottomNav from "../../components/bottomNav/BottomNav";
import PopularThisMonth from "./PopularThisMonth/PopularThisMonth";
import PopularListsThisMonth from "./PopularListsThisMonth/PopularListsThisMonth";
import RecentArticles from "./recent-articles/RecentArticles";
import LatestNews from "./latest-news/LatestNews";

type HomePageProps = {
  username: string;
};

const HomePage = (props: HomePageProps) => {
  return (
    <div className="home">
      <h1 className="home__heading">
        Привет, <span>{props.username}</span>!
      </h1>
      <p className="home__greeting">
        Напишите обзор на уже просмотренный фильм или откройте для себя пару
        новинок
      </p>
      <PopularThisMonth />
      <PopularListsThisMonth />
      <RecentArticles />
      <LatestNews />
    </div>
  );
};

export default HomePage;
