import React from "react";

type BackgroundsProp = {
  url: string | undefined;
};

const FilmBackground = (props: BackgroundsProp) => {
  return (
    <div
      className="film-background"
      style={{ backgroundImage: `url(${"/assets/film-backgrounds/" + props.url})` }}
    ></div>
  );
};

export default FilmBackground;
