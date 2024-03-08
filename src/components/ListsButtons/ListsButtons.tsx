import React from 'react';
import { useState } from 'react';
import watchedIcon from './watched.svg';
import watchedIconActive from './watched-active.svg';
import likedIcon from './liked.svg';
import likedIconActive from './liked-active.svg';
import listedIcon from './listed.svg';
import listedIconActive from './listed-active.svg';
import { ListsButtonsProps } from '../../types';

const ListsButtons: React.FC<ListsButtonsProps> = (props) => {
  const [watched, setWatched] = useState<boolean>(false);
  const [liked, setLiked] = useState<boolean>(false);
  const [listed, setListed] = useState<boolean>(false);

  return (
    <div className={`lists-buttons ${props.classModifier ?? ''}`}>
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
  );
};

export default ListsButtons;
