import React from "react";
import FilmLink from "../FilmLink/FilmLink";

const PopularThisMonth = () => {
  return (
    <>
      <section className="popular-month">
        <h2 className="popular-month__heading">Популярно в этом месяце</h2>
        <div className="popular-month-section">
          <FilmLink filmId={1} src={"/assets/film-covers/wonka-cover.jpg"} />
          <FilmLink src={"/assets/film-covers/chou-chou.webp"} />
          <FilmLink src={"/assets/film-covers/chou-chou.webp"} />
          <FilmLink src={"/assets/film-covers/chou-chou.webp"} />
          <FilmLink src={"/assets/film-covers/chou-chou.webp"} />
          <FilmLink src={"/assets/film-covers/chou-chou.webp"} />
        </div>
      </section>
      <hr />
    </>
  );
};

export default PopularThisMonth;
