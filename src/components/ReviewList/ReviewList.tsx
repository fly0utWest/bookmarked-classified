import React from 'react';
import ReviewCard from '../ReviewCard/ReviewCard';
import { ReviewListProps } from '../../types';

const ReviewList: React.FC<ReviewListProps> = ({
  reviews,
  limit,
  linkClassModifier,
}) => {
  return (
    <>
      {reviews?.slice(0, limit).map((review) => (
        <ReviewCard review={review} />
      ))}
    </>
  );
};

export default ReviewList;
