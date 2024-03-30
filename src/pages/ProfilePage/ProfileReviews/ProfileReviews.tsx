import React from 'react';
import ReviewCard from '../../../components/ReviewCard/ReviewCard';
import { ProfileReviewsProps } from '../../../types';
import { convertParams } from '../../../utils/utils';
import { useFetch } from '../../../hooks/useFetch';
import { Review } from '../../../types';
import config from '../../../utils/utils';
import ReviewList from '../../../components/ReviewList/ReviewList';

const ProfileReviews: React.FC<ProfileReviewsProps> = ({ reviews }) => {
  const reviewsUrl = `${config.BACK_API}/reviews?${convertParams(
    'id',
    reviews!,
  )}`;
  const {
    data: reviewsData,
    isLoading,
    error,
  } = useFetch<Review[]>(reviewsUrl);

  return (
    <>
      <div>
        <div className='container profile-page__container'>
          <h2>Обзоры</h2>
        </div>
        <section className='profile-reviews-section'>
          <ReviewList reviews={reviewsData!} />
        </section>
      </div>
    </>
  );
};

export default ProfileReviews;
