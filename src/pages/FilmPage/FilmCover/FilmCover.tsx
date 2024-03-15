import React from 'react';
import ListsButtons from '../../../components/ListsButtons/ListsButtons';
import { FilmCoverProps } from '../../../types';
import config from '../../../utils';

const FilmCover: React.FC<FilmCoverProps> = (props) => {
  return (
    <div className='film-cover'>
      <img src={`${config.IMAGE_API}/film-covers/${props.img}`} alt='' />
      <ListsButtons classModifier='film-cover__lists-buttons' />
    </div>
  );
};

export default FilmCover;
