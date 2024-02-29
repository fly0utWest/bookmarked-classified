import React from "react";
import ListsButtons from "../../../components/ListsButtons/ListsButtons";

type BackgroundProps = {
  img: string | undefined;
};

const FilmCover = (props: BackgroundProps) => {
  return (
    <div className='film-cover'>
      <img src={'/assets/film-covers/' + props.img} alt='' />
      <ListsButtons classModifier="film-cover__lists-buttons"/>
    </div>
  );
};

export default FilmCover;
