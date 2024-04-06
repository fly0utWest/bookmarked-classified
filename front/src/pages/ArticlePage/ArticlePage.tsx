import React from 'react';
import { ArticleProps } from '../../types';

const ArticlePage: React.FC<ArticleProps> = (props) => {
  return (
    <article className='article'>
      <h1 className='article-heading'>Дэнни Вильнёв и его лучшие фильмы</h1>
      <img
        className='article-body__background'
        src='/assets/article-assets/villeneuve-cover.webp'
        alt=''
      />
      <div className='article-page'>
        <div className='article-body'>
          <p className='article-body__date'>
            <i>5 марта 2024</i>
          </p>
          <p className='article-body__text'>
            Последнее десятилетие Дени Вильнёв снимает легендарные фильмы, и
            амбициозная "Дюна: Часть вторая" столь же политически радикальна и
            масштабна, как и некоторые из его лучших работ. Вот наш рейтинг его
            фильмов; вы можете следить за нашим подкастом, чтобы услышать
            несколько исследований его эмоционально тщательных и концептуально
            сложных аллегорий.
          </p>
          <h2 className='article-body__heading'>Визуальный стиль</h2>
          <section className='article-body__heading__section'>
            Вильнёв известен своими потрясающими визуальными композициями,
            которые играют ключевую роль в повествовании его фильмов. Он тесно
            сотрудничает с операторами-постановщиками, чтобы создать уникальную
            атмосферу и тон каждого проекта. Элементы, такие как освещение, цвет
            и композиция кадра, используются с особым вниманием к деталям, что
            придает его работам глубину и эмоциональную насыщенность.
          </section>
        </div>
        <div className='article-right'></div>
      </div>
    </article>
  );
};

export default ArticlePage;
