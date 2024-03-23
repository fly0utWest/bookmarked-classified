import React from 'react';
import { useState, useEffect } from 'react';
import watchedIcon from './watched.svg';
import watchedIconActive from './watched-active.svg';
import likedIcon from './liked.svg';
import likedIconActive from './liked-active.svg';
import listedIcon from './listed.svg';
import listedIconActive from './listed-active.svg';
import { ListsButtonsProps } from '../../types';
import { useAuth } from '../../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import config from '../../utils';
import { ListType } from '../../types';

const ListsButtons: React.FC<ListsButtonsProps> = ({
  classModifier,
  listStatus,
  filmId,
}) => {
  const { user, isLoading, error } = useAuth();
  const navigate = useNavigate();

  const [watched, setWatched] = useState<boolean>(listStatus.watched);
  const [liked, setLiked] = useState<boolean>(listStatus.liked);
  const [listed, setListed] = useState<boolean>(listStatus.watchLater);

  const listSetter = async (
    state: boolean,
    setter: React.Dispatch<React.SetStateAction<boolean>>,
    listType: ListType,
  ) => {
    if (user) {
      const url: string = `${config.BACK_API}/movies/${filmId}/${listType}`;
      try {
        const response = await fetch(url, {
          method: `${state ? 'DELETE' : 'POST'}`,
        });
        if (response.ok) {
          // Confirm the operation was successful before updating state
          setter(!state);
        } else {
          // Handle server errors (e.g., unauthorized, not found) here
          console.error('Operation failed:', response.statusText);
        }
      } catch (error) {
        // Handle network errors
        console.error('Network error:', error);
      }
    } else {
      navigate('/welcome');
    }
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
          listSetter(watched, setWatched, ListType.Watched);
        }}
        className='lists-buttons__watched'
      >
        <img src={watched ? watchedIconActive : watchedIcon} alt='' />
      </button>
      <button
        onClick={() => {
          listSetter(liked, setLiked, ListType.Favourites);
        }}
        className='lists-buttons__liked'
      >
        <img src={liked ? likedIconActive : likedIcon} alt='' />
      </button>
      <button
        onClick={() => {
          listSetter(listed, setListed, ListType.WatchLater);
        }}
        className='lists-buttons__listed'
      >
        <img src={listed ? listedIconActive : listedIcon} alt='' />
      </button>
    </div>
  );
};

export default ListsButtons;
