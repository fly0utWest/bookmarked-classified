import React from "react";
import ListsButtons from "../../../components/ListsButtons/ListsButtons";
import { FilmCoverProps } from "../../../types";

const FilmCover: React.FC<FilmCoverProps> = (props) => {
  return (
    <div className='film-cover'>
      <img src={'/assets/film-covers/' + props.img} alt='' />
      <ListsButtons classModifier="film-cover__lists-buttons"/>
    </div>
  );
};

export default FilmCover;
