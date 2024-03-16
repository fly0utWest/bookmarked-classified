import React from 'react';
import ReviewCard from './ReviewCard/ReviewCard';
import { ProfileReviewsProps } from '../../../types';
import config from '../../../utils';
import { FilmData } from '../../../types';


const ProfileReviews: React.FC<ProfileReviewsProps> = (props) => {

  
  return (
    <>
      <div>
        <div className='container profile-page__container'>
          <h2>Обзоры</h2>
        </div>
        <section className='profile-reviews'>
          <div className='profile-reviews__section'>
            <ReviewCard />
            <ReviewCard />
            <ReviewCard />
            <ReviewCard />
          </div>
        </section>
      </div>
    </>
  );
};

export default ProfileReviews;
