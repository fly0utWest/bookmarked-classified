import React from 'react';
import { FilmBackgroundsProps } from '../../../types';
import config from '../../../config/config';

const FilmBackground: React.FC<FilmBackgroundsProps> = (props) => {
  const backgroundUrl: string = `${config.IMAGE_API}/film-backgrounds/${props.url}`;

  return (
    <div
      className='film-background'
      style={{ backgroundImage: `url(${backgroundUrl})` }}
    ></div>
  );
};

export default FilmBackground;
