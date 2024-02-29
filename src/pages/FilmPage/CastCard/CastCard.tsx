import React from 'react';

type CastCardProps = {
  name: string | undefined;
};

const castCard: React.FC<CastCardProps> = (props) => {
  return <p>{props.name}</p>;
};

export default castCard;
