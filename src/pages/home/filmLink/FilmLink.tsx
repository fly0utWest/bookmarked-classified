import React from 'react'
import { Link } from 'react-router-dom'
import poster from "./batmanPoster.png";

const FilmLink = () => {
  return (
    <div className='popular-month-grid__element'>
      <Link to="/film/:id">
        <img src={poster} alt="Ссылка на фильм" />
      </Link>
    </div>
  )
}

export default FilmLink