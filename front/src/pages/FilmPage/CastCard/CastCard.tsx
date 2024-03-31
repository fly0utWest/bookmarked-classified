import React from 'react';
import { CastCardProps } from '../../../types';

const CastCard: React.FC<CastCardProps> = ({name}) => {
  return <p>{name}</p>;
};

export default CastCard;
