import React from "react";
import { FilmBackgroundsProps } from "../../../types";

const FilmBackground: React.FC<FilmBackgroundsProps> = (props) => {
  return (
    <div
      className="film-background"
      style={{ backgroundImage: `url(${"/assets/film-backgrounds/" + props.url})` }}
    ></div>
  );
};

export default FilmBackground;
