import React from 'react';
import { Link } from 'react-router-dom';
import { ArticleCardProps } from '../../../types';
import config from '../../../config/config';

const ArticleCard: React.FC<ArticleCardProps> = ({ article }) => {
  return (
    <article className='article-card'>
      <img
        className='article-card__image'
        src={`${config.IMAGE_API}/article-covers/${article.cover}`}
        alt='Обложка статьи'
      />
      <div>
        <Link to={`/article/${article.id}`}>
          <h3 className='article-card__heading'>{article.title}</h3>
        </Link>
        <p className='article-card__description'>{article.text}</p>
        <Link to={`/article/${article?.id}`} className='article-card__link'>
          Читать статью
        </Link>
      </div>
    </article>
  );
};

export default ArticleCard;
