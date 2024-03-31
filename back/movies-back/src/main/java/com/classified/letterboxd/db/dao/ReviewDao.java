package com.classified.letterboxd.db.dao;

import com.classified.letterboxd.db.Db;
import com.classified.letterboxd.models.Review;
import com.classified.letterboxd.models.User;
import com.classified.letterboxd.utils.AppLogging;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class ReviewDao implements AppLogging {
    @Autowired
    private Db database;

    public ReviewDao(Db database) {
        this.database = database;
    }

    public Review getReview(long id) throws RuntimeException {
        try {
            Review review = database.getReview(id);
            log.info("Review {} has been successfully retrieved!", id);
            return review;
        } catch (Exception e) {
            log.error("Review {} retrieving failed. Reason: {}", id, e.getMessage());
            throw new RuntimeException(e);
        }
    }

    public List<Review> getReviewByUsersIdAndMovie(Long userId, Long movieId) throws RuntimeException {
        try {
            List<Long> reviewIds = database.getUsersReviews(userId);
            List<Review> reviews = database.getReviews(reviewIds);
            List<Review> result = reviews.stream().filter(review -> review.getMovieId() == movieId).toList();
            log.info("Reviews {} has been successfully retrieved!", String.join(", ",
                    result.stream().map(review -> review.getId().toString()).toList()));
            return result;
        } catch (Exception e) {
            log.error("Review for {} retrieving failed. Reason: {}", userId, e.getMessage());
            throw new RuntimeException(e);
        }
    }


    public List<Review> getReviews() {
        try {
            return database.getReviews();
        } catch (Exception e) {
            log.error("Reviews retrieving failed. Reason: {}", e.getMessage());
            throw new RuntimeException(e);
        }
    }

    public List<Review> getReviews(List<Long> ids) {
        try {
            return database.getReviews(ids);
        } catch (Exception e) {
            log.error("Reviews retrieving failed. Reason: {}", e.getMessage());
            throw new RuntimeException(e);
        }
    }


    public Review addReview(Review review, User user) throws RuntimeException {
        try {
            long reviewId = database.addReview(review);
            database.addUsersReviews(reviewId, user.getId());
            log.info("Review {} has been successfully created!", review.getTitle());
            return review;
        } catch (Exception e) {
            log.error("Review \"{}\" creation has been failed. Reason: {}", review.getTitle(), e.getMessage());
            throw new RuntimeException(e);
        }
    }

    public void removeReview(Long id, User user) throws RuntimeException {
        try {
            database.deleteReview(id);
            database.deleteUsersReviews(user.getId(), id);
            log.info("Review {} has been deleted!", id);
        } catch (Exception e) {
            log.error("Review \"{}\" deletion has been failed. Reason: {}", id, e.getMessage());
            throw new RuntimeException(e);
        }
    }
}

