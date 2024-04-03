import React from 'react';
import { useState, useEffect } from 'react';
import watchedIcon from '../../../assets/icons/watched.svg';
import watchedIconActive from '../../../assets/icons/watched-active.svg';
import likedIcon from '../../../assets/icons/liked.svg';
import likedIconActive from '../../../assets/icons/liked-active.svg'
import listedIcon from '../../../assets/icons/listed.svg';
import listedIconActive from '../../../assets/icons/listed-active.svg';
import { ListsButtonsProps } from '../../../types';
import { useAuth } from '../../../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import config from '../../../utils/utils';
import { ListType } from '../../../types';

const ListsButtons: React.FC<ListsButtonsProps> = ({
  classModifier,
  listStatus,
  filmId,
}) => {
  const { user, reFetchUser } = useAuth();
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
          headers: {
            "x-auth": `${localStorage.getItem('jwtToken')}`
          }
        });
        if (response.ok) {
          setter(!state);
          reFetchUser();
        } else {
          console.error('Operation failed:', response.statusText);
        }
      } catch (error) {
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
