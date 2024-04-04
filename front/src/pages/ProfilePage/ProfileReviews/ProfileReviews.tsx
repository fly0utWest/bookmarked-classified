import React from 'react';
import ReviewCard from '../../../components/ReviewCard/ReviewCard';
import { ProfileReviewsProps } from '../../../types';
import { convertParams } from '../../../utils/utils';
import { useFetch } from '../../../hooks/useFetch';
import { Review } from '../../../types';
import config from '../../../utils/utils';
import ReviewList from '../../../utils/ReviewList';
import ErrorMessage from '../../../components/ui/ErrorMessage/ErrorMessage';
import { Link } from 'react-router-dom';

const ProfileReviews: React.FC<ProfileReviewsProps> = ({
  reviews,
  username,
}) => {
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
          {reviews?.length === 0 ? null : (
            <Link to={`/user/${username}/reviews`}>Показать все</Link>
          )}
        </div>
        <section className='profile-reviews-section'>
          {reviewsData ? (
            <ReviewList
              reviews={reviewsData!}
              limit={6}
              reviewClassModifier='profile-review-section__review-card'
            />
          ) : (
            <>
              <ErrorMessage message='Обзоров пока нет :(' />
              <hr />
            </>
          )}
        </section>
      </div>
    </>
  );
};

export default ProfileReviews;
