import React from 'react'
import LatestNewsCard from '../latest-news-card/LatestNewsCard';
import cardCover from "./news-cover.jpg";

const LatestNews = () => {
  return (
    <>
      <section className="latest-news">
        <h2 className="latest-news__heading">Последние новости</h2>
        <div className="container">
          <LatestNewsCard
            img={cardCover}
            heading='Fantastique Cinematheque: Клебер Мендонса Фильо о сохранении воспоминаний о бразильских кинодворцах с помощью "Картинок с привидениями"'
            description='В связи с выходом в американский прокат документального фильма "Картины призраков" Клебер Мендонса Фильо делится киновоспоминаниями о своем родном городе Ресифи, Бразилия, в том числе о просмотре фильма Кроненберга "Муха" в 80-е годы, и о том, почему киномеханики и программисты так важны для выживания кинематографа.'
          />
        </div>
      </section>
    </>
  );
}

export default LatestNews