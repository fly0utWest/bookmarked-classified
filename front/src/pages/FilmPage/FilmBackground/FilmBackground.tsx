import React from 'react';
import { FilmBackgroundsProps } from '../../../types';
import config from '../../../config/config';

const FilmBackground: React.FC<FilmBackgroundsProps> = ({url}) => {
  const backgroundUrl: string = `${config.IMAGE_API}/film-backgrounds/${url}`;

  return (
    <div
      className='film-background'
      style={{ backgroundImage: `url(${backgroundUrl})` }}
    ></div>
  );
};

export default FilmBackground;
