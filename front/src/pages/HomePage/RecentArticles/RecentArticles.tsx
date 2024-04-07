import React from 'react';
import ArticleCard from '../ArticleCard/ArticleCard';
import { ArticleData } from '../../../types';
import config from '../../../config/config';
import { useFetch } from '../../../hooks/useFetch';

const RecentArticles: React.FC = () => {
  const baseUrl = `${config.BACK_API}/articles`;
  const {
    data: articleData,
    isLoading,
    error,
  } = useFetch<ArticleData[]>(baseUrl);

  return (
    <>
      <section className='recent-articles'>
        <h2 className='recent-articles__heading'>Статьи</h2>
        <div className='container'>
          {articleData?.slice(0, 6).map((article) => (
            <ArticleCard
              img={article?.cover}
              heading={article?.title}
              description={article?.text}
            />
          ))}
        </div>
      </section>
      <hr />
    </>
  );
};

export default RecentArticles;
