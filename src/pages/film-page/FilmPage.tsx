import React from "react";
import { Link } from "react-router-dom";
import FilmCover from "./film-cover/FilmCover";
import cover from "./card.jpg";
import background from "./background.jpg";
import FilmBackground from "./film-background/FilmBackground";

type FilmProp = {
  title?: string;
  year?: number;
  director?: string;
  description?: string;
};

const FilmPage = (props: FilmProp) => {
  return (
    <div className="film">
      <FilmBackground />
      <div className="film-page">
        <FilmCover img={cover} />
        <div className="film-page-info">
          <p>{props.title}</p>
          <p>{props.year}</p>
          <p>{props.director}</p>
        </div>
        <p>{props.description}</p>
      </div>
    </div>
  );
};

export default FilmPage;
