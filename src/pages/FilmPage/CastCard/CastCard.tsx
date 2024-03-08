import React from 'react';
import { CastCardProps } from '../../../types';

const CastCard: React.FC<CastCardProps> = (props) => {
  return <p>{props.name}</p>;
};

export default CastCard;
