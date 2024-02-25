import React from "react";

type BackgroundProps = {
  img: string | undefined;
};

const FilmCover = (props: BackgroundProps) => {
  return (
    <div className="film-cover">
      <img src={"/assets/film-covers/" + props.img} alt="" />
    </div>
  );
};

export default FilmCover;
