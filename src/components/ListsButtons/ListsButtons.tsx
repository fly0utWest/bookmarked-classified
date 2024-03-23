import React from 'react';
import { useState, useEffect } from 'react';
import watchedIcon from './watched.svg';
import watchedIconActive from './watched-active.svg';
import likedIcon from './liked.svg';
import likedIconActive from './liked-active.svg';
import listedIcon from './listed.svg';
import listedIconActive from './listed-active.svg';
import { ListsButtonsProps } from '../../types';
import { useAuth } from '../../Auth/useAuth';
import { useNavigate } from 'react-router-dom';

const ListsButtons: React.FC<ListsButtonsProps> = ({
  classModifier,
  listStatus,
}) => {
  const { user, isLoading, error } = useAuth();
  const navigate = useNavigate();

  const [watched, setWatched] = useState<boolean>(listStatus.watched);
  const [liked, setLiked] = useState<boolean>(listStatus.liked);
  const [listed, setListed] = useState<boolean>(listStatus.watchLater);

  const listSetter = (
    state: boolean,
    setter: React.Dispatch<React.SetStateAction<boolean>>,
  ) => {
    if (user) {
      setter(!state);
    } else navigate('/welcome');
  };

useEffect(() => {
  setWatched(listStatus.watched);
  setLiked(listStatus.liked);
  setListed(listStatus.watchLater);
}, [listStatus]);

  return (
    <div className={`lists-buttons ${classModifier ?? ''}`}>
      <button
        onClick={() => {
          listSetter(watched, setWatched);
        }}
        className='lists-buttons__watched'
      >
        <img src={watched ? watchedIconActive : watchedIcon} alt='' />
      </button>
      <button
        onClick={() => {
          listSetter(liked, setLiked);
        }}
        className='lists-buttons__liked'
      >
        <img src={liked ? likedIconActive : likedIcon} alt='' />
      </button>
      <button
        onClick={() => {
          listSetter(listed, setListed);
        }}
        className='lists-buttons__listed'
      >
        <img src={listed ? listedIconActive : listedIcon} alt='' />
      </button>
    </div>
  );
};

export default ListsButtons;
