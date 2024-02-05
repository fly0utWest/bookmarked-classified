import React from 'react'

type BackgroundProps = {
    img: string
};

const FilmCover = (props: BackgroundProps) => {
  return (
    <div className="film-cover">
      <img src={props.img} alt="" />
    </div>
  );
}

export default FilmCover