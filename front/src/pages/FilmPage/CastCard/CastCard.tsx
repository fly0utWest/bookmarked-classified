import React from 'react';
import { CastCardProps } from '../../../types';

const CastCard: React.FC<CastCardProps> = ({name}) => {
  return <p className='cast-card'>{name}</p>;
};

export default CastCard;
