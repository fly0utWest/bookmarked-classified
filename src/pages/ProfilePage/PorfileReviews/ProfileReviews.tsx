import React from 'react';
import ReviewCard from './ReviewCard/ReviewCard';

const ProfileReviews = () => {
  return (
    <section className='profile-reviews'>
      <div className='profile-reviews__section'>
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
      </div>
    </section>
  );
};

export default ProfileReviews;
