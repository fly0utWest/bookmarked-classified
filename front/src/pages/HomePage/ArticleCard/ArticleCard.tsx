import React from 'react'
import { Link } from 'react-router-dom'
import { ArticleCardProps } from '../../../types';
import config from '../../../config/config';

const ArticleCard: React.FC<ArticleCardProps> = ({img, heading, description}) => {
  return (
    <article className="article-card">
      <img className="article-card__image" src={`${config.IMAGE_API}/article-covers/${img}`} alt="Обложка статьи" />
      <div>
        <Link to="/article:id">
          <h3 className="article-card__heading">{heading}</h3>
        </Link>
        <p className="article-card__description">{description}</p>
        <Link to="/article/:id" className="article-card__link">
          Читать статью
        </Link>
      </div>
    </article>
  );
}

export default ArticleCard