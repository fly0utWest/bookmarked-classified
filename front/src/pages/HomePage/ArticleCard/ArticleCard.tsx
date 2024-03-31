import React from 'react'
import { Link } from 'react-router-dom'
import { ArticleCardProps } from '../../../types';

const ArticleCard: React.FC<ArticleCardProps> = (props) => {
  return (
    <article className="article-card">
      <img className="article-card__image" src={props.img} alt="" />
      <div>
        <Link to="/article:id">
          <h3 className="article-card__heading">{props.heading}</h3>
        </Link>
        <p className="article-card__description">{props.description}</p>
        <Link to="/article/:id" className="article-card__link">
          Читать статью
        </Link>
      </div>
    </article>
  );
}

export default ArticleCard