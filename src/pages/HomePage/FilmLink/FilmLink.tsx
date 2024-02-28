import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import watchedIcon from './watched.svg';
import watchedIconActive from './watched-active.svg';
import likedIcon from './liked.svg';
import likedIconActive from './liked-active.svg';
import listedIcon from './listed.svg';
import listedIconActive from './listed-active.svg';

type FilmLinkProps = {
  filmId?: number;
  src: string;
  classModifier?: string;
};

const FilmLink: React.FC<FilmLinkProps> = (props) => {
  const [watched, setWatched] = useState<boolean>(false);
  const [liked, setLiked] = useState<boolean>(false);
  const [listed, setListed] = useState<boolean>(false);

  return (
    <div className={`film-link ${props.classModifier ?? ''}`}>
      <Link to={`/film/${props.filmId}`}>
        <img src={props.src} alt='Ссылка на фильм' />
      </Link>
      <div className='lists-buttons'>
        <button
          onClick={(): void => {
            setWatched(!watched);
          }}
          className='lists-buttons__watched'
        >
          <img src={watched ? watchedIconActive : watchedIcon} alt='' />
        </button>
        <button
          onClick={(): void => {
            setLiked(!liked);
          }}
          className='lists-buttons__liked'
        >
          <img src={liked ? likedIconActive : likedIcon} alt='' />
        </button>
        <button
          onClick={(): void => {
            setListed(!listed);
          }}
          className='lists-buttons__listed'
        >
          <img src={listed ? listedIconActive : listedIcon} alt='' />
        </button>
      </div>
    </div>
  );
};

export default FilmLink;
