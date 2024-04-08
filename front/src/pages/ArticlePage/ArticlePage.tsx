import React from 'react';
import { useFetch } from '../../hooks/useFetch';
import { useParams } from 'react-router-dom';
import config from '../../config/config';
import { ArticleData } from '../../types';
import Loading from '../../components/Loading/Loading';
import ErrorPage from '../ErrorPage/ErrorPage';

const ArticlePage: React.FC = () => {
  const { id } = useParams();
  const baseUrl: string = `${config.BACK_API}/article/${id}`;
  const {
    data: articleData,
    isLoading,
    error,
  } = useFetch<ArticleData>(baseUrl);

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <ErrorPage code={204} description='данные не были получены' />;
  }

  return (
    <article className='article'>
      <h1 className='article-heading'>{articleData?.title}</h1>
      <img
        className='article-body__background'
        src={`${config.IMAGE_API}/article-covers/${articleData?.cover}`}
        alt='Обложка статьи'
      />
      <div className='article-page'>
        <div className='article-body'>
          <p className='article-body__date'>
            <i>{articleData?.publicationDate}</i>
          </p>
          <p className='article-body__text'>{articleData?.text}</p>
        </div>
      </div>
    </article>
  );
};

export default ArticlePage;
