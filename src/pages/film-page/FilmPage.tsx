import React from "react";
import { Link } from "react-router-dom";
import FilmCover from "./film-cover/FilmCover";
import cover from "./card.jpg";
import background from "./background.jpg";
import CastCard from "./cast-card/CastCard";
import { FilmReviewForm } from "./film-review-form/FilmReviewForm";
import FilmBackground from "./film-background/FilmBackground";

type FilmProp = {
  title?: string;
  year?: number;
  director?: string;
  slogan?: string;
  description?: string;
};

const FilmPage = (props: FilmProp) => {
  return (
    <div className="film">
      <FilmBackground />
      <div className="film-page">
        <FilmCover img={cover} />
        <div className="film-page-heading">
          <p className="film-page-heading__title">{props.title}</p>
          <div className="film-page-heading__production">
            <p className="year">{props.year}</p>
            <p className="director">
              Режиссёр: <span>{props.director}</span>
            </p>
          </div>
        </div>
        <section className="film-page-info">
          <p className="film-page-info__slogan">{props.slogan}</p>
          <p className="film-page-info__description">{props.description}</p>
          <hr />
          <div className="film-page-info__cast">
            <p>Cast</p>
            <div className="container">
              <CastCard name="example" />
              <CastCard name="example" />
              <CastCard name="example" />
              <CastCard name="example" />
              <CastCard name="example" />
              <CastCard name="example" />
              <CastCard name="example" />
            </div>
          </div>
          <FilmReviewForm />
        </section>
      </div>
    </div>
  );
};

export default FilmPage;
