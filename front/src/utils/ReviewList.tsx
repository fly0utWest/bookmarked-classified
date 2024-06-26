import React from 'react';
import ReviewCard from '../components/ReviewCard/ReviewCard';
import { ReviewListProps } from '../types';

const ReviewList: React.FC<ReviewListProps> = ({
  reviews,
  limit,
  reviewClassModifier,
}) => {
  return (
    <>
      {reviews?.slice(0, limit).map((review) => (
        <ReviewCard
          key={review.id}
          review={review}
          classModifier={reviewClassModifier}
        />
      ))}
    </>
  );
};

export default ReviewList;
