package com.classified.letterboxd.db.handlers;

import com.classified.letterboxd.models.Movie;
import com.classified.letterboxd.models.Review;
import com.classified.letterboxd.models.User;

import java.util.ArrayList;
import java.util.List;

public class ReviewHandler {

    public static ResultSetHandler<List<Review>> handle() {
        List<Review> reviews = new ArrayList<>();
        return queryResultSet -> {
            while (queryResultSet.next()) {
                long reviewId = queryResultSet.getLong("review_id");
                long movieId = queryResultSet.getLong("movie_id");
                String title = queryResultSet.getString("title");
                String reviewType = queryResultSet.getString("review_type");
                String text = queryResultSet.getString("text");
                reviews.add(new Review(
                        reviewId,
                        movieId,
                        title,
                        reviewType,
                        text
                ));
            }
            return reviews;
        };
    }

    public static ResultSetHandler<List<Long>> handleReviewIdsResultSet() {
        List<Long> movies = new ArrayList<>();
        return queryResultSet -> {
            while (queryResultSet.next()) {
                Long movieId = queryResultSet.getLong("review_id");
                movies.add(movieId);
            }
            return movies;
        };
    }
}
