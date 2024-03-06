import React from 'react';

type ArticleProps = {
  title?: string;
  cover?: string;
  content?: string;
  date?: string;
};

const ArticlePage: React.FC<ArticleProps> = (props) => {
  return (
    <article className='article'>
      <h1 className='article-heading'>Дэнни Вильнёв и его лучшие фильмы</h1>
      <img
        className='article-body__background'
        src='/assets/article-assets/1/villeneuve-cover.jpg'
        alt=''
      />
      <div className='article-page'>
        <div className='article-body'>
          <p className='article-body__date'>{props.date}</p>
          <p className='article-body__text'>
            Последнее десятилетие Дени Вильнёв снимает легендарные фильмы, и
            амбициозная "Дюна: Часть вторая" столь же политически радикальна и
            масштабна, как и некоторые из его лучших работ. Вот наш рейтинг его
            фильмов; вы можете следить за нашим подкастом, чтобы услышать
            несколько исследований его эмоционально тщательных и концептуально
            сложных аллегорий.
          </p>
        </div>
        <div className='article-right'></div>
      </div>
    </article>
  );
};

export default ArticlePage;
