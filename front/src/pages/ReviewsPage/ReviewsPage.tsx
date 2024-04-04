import React, { useState, useEffect } from 'react';
import { Review, User } from '../../types';
import config, { convertParams } from '../../utils/utils';
import { useFetch } from '../../hooks/useFetch';
import ReviewList from '../../utils/ReviewList';
import { useParams } from 'react-router-dom';
import ErrorMessage from '../../components/ui/ErrorMessage/ErrorMessage';

const ReviewsPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const userUrl: string = `${config.BACK_API}/users`;
  const {
    data: userData,
    isLoading,
    error: userError,
  } = useFetch<User>(userUrl, id);

  const [reviews, setReviews] = useState<Review[]>([]);
  const [isReviewsLoading, setIsReviewsLoading] = useState<boolean>(true);
  const [reviewsError, setReviewsError] = useState<string | null>(null);

  useEffect(() => {
    const abortController = new AbortController();

    const reviewsUrl = `${config.BACK_API}/reviews?${convertParams(
      'id',
      userData?.reviews!,
    )}`;

    fetch(reviewsUrl, { signal: abortController.signal })
      .then((response) => response.json())
      .then((data) => {
        setReviews(data);
      })
      .catch((error) => {
        if ((error as Error).name !== 'AbortError') {
          setReviewsError(
            error instanceof Error
              ? error.message
              : 'An unexpected error has occurred',
          );
        }
      })
      .finally(() => {
        setIsReviewsLoading(false);
      });

    return () => {
      abortController.abort();
    };
  }, [userData]);

  if (userError) {
    return <ErrorMessage message='Произошла ошибка.' />;
  }

  return (
    <div className='reviews'>
      <h1 className='reviews-heading'>
        {`Список обзоров пользователя `}
        <span className='reviews-heading__nickname'>{userData?.login}</span>
      </h1>
      <section className='reviews-section'>
        {reviews ? (
          <ReviewList
            reviews={reviews}
            reviewClassModifier='reviews-section__review-card'
          />
        ) : null}
        {reviews.length === 0 ? (
          <ErrorMessage message='В списке обзоров пока пусто :(' />
        ) : null}
      </section>
      <hr />
    </div>
  );
};

export default ReviewsPage;
