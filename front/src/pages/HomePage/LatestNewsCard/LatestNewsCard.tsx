import React from 'react';
import { Link } from 'react-router-dom';
import { NewsCardProps } from '../../../types';

const LatestNewsCard: React.FC<NewsCardProps> = (props) => {
  return (
    <article className='latest-news-card'>
      <img className='latest-news-card__image' src={props.img} alt='' />
      <div className='latest-news-card__container'>
        <h3 className='latest-news-card__heading'>
          <p>{props.heading}</p>
        </h3>
        <p className='latest-news-card__description'>
          {props.description}
        </p>
      </div>
    </article>
  );
};

export default LatestNewsCard;
