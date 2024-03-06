import React from 'react';

type ArticleProps = {
  title?: string;
  cover?: string;
  content?: string;
  date?: string;
};

const ArticlePage: React.FC<ArticleProps> = (props) => {
  return (
    <div className='article'>
      <h1></h1>
      <img
        className='article-left__background'
        src='/assets/article-assets/1/villeneuve-cover.jpg'
        alt=''
      />
      <div className='article-left'>
        <p className='article-left__date'>{props.date}</p>
        <div className='article-left__text'>
          Последнее десятилетие Дени Вильнёв снимает легендарные фильмы, и
          амбициозная "Дюна: Часть вторая" столь же политически радикальна и
          масштабна, как и некоторые из его лучших работ. Вот наш рейтинг его
          фильмов; вы можете следить за нашим подкастом, чтобы услышать
          несколько исследований его эмоционально тщательных и концептуально
          сложных аллегорий.
        </div>
        <div className='article-right'></div>
      </div>
    </div>
  );
};
export default ArticlePage;
