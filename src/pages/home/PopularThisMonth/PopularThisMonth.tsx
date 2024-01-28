import React from 'react'
import FilmLink from "../filmLink/FilmLink";

const PopularThisMonth = () => {
  return (
    <section className="popular-month">
      <h2 className="popular-month__heading">Популярно в этом месяце</h2>
      <div className="popular-month-grid">
        <FilmLink />
        <FilmLink />
        <FilmLink />
        <FilmLink />
        <FilmLink />
      </div>
    </section>
  );
}

export default PopularThisMonth