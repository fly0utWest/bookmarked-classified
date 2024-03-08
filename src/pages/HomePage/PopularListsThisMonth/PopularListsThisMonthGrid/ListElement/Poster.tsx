import React from 'react'
import { Link } from 'react-router-dom';
import { PosterProps } from '../../../../../types';

const Poster: React.FC<PosterProps> = (props) => {
  return (
    <div className="poster-link">
      <Link to="/show/:id">
        <img src={props.src} alt={props.alt}></img>
      </Link>
    </div>
  );
}

export default Poster