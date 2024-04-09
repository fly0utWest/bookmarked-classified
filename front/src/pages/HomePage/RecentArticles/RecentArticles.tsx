import React from 'react';
import ArticleCard from '../ArticleCard/ArticleCard';
import { ArticleData } from '../../../types';
import config from '../../../config/config';
import { useFetch } from '../../../hooks/useFetch';
import Loading from '../../../components/Loading/Loading';
import ErrorMessage from '../../../components/ui/ErrorMessage/ErrorMessage';

const RecentArticles: React.FC = () => {
  const baseUrl: string = `${config.BACK_API}/articles`;
  const {
    data: articleData,
    isLoading,
    error,
  } = useFetch<ArticleData[]>(baseUrl);

  if (isLoading) {
    return <Loading />
  }

  if (error) {
    return <ErrorMessage message='Произошла ошибка.' classModifier='error-message_warning'/>;
  }

  return (
    <>
      <section className='recent-articles'>
        <h2 className='recent-articles__heading'>Статьи</h2>
        <div className='container'>
          {articleData?.slice(0, 6).map((article) => (
            <ArticleCard key={article?.id} article={article} />
          ))}
        </div>
      </section>
      <hr />
    </>
  );
};

export default RecentArticles;
