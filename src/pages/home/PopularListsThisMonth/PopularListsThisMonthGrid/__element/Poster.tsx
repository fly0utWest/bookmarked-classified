import React from 'react'
import { Link } from 'react-router-dom';

type PosterProps = {
    src: string;
    alt: string;
}

const Poster = (props: PosterProps) => {
  return (
    <div className="poster-link">
      <Link to="/show/:id">
        <img src={props.src} alt={props.alt}></img>
      </Link>
    </div>
  );
}

export default Poster