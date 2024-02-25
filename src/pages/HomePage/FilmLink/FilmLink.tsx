import React from "react";
import { Link } from "react-router-dom";

type FilmLinkProps = {
  filmId?: number;
  src: string;
};

const FilmLink = (props: FilmLinkProps) => {
  return (
    <div className="popular-month-section__element">
      <Link to={`/film/${props.filmId}`}>
        <img src={props.src} alt="Ссылка на фильм" />
      </Link>
    </div>
  );
};

export default FilmLink;
