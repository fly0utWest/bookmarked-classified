package com.classified.letterboxd.db;

import com.classified.letterboxd.models.Movie;
import com.classified.letterboxd.models.Review;
import com.classified.letterboxd.models.User;

import java.sql.Connection;
import java.util.List;

public interface Db {
    String getMetainfo();
    Connection getConnection() throws Exception;
    void initialize() throws Exception;
    User getUser(long id) throws Exception;
    User getUser(String login) throws Exception;

    void createUser(User user) throws Exception;
    int updateUser(User user) throws Exception;
    int deleteUser(long id) throws Exception;

    List<Long> getUsersFavouredMovies(long id) throws Exception;

    List<Long> getUsersWatchedMovies(long id) throws Exception;

    List<Long> getUsersWatchLaterMovies(long id) throws Exception;

    List<Long> getUsersReviews(long id) throws Exception;

    void addUsersReviews(long userId, long reviewId) throws Exception;

    void deleteUsersReviews(long userId, long reviewId) throws Exception;

    List<Review> getReviews() throws Exception;

    List<Review> getReviews(List<Long> ids) throws Exception;

    Review getReview(long id) throws Exception;

//    List<Review> getReviewsByUserIdAndMovie(Long userId, long movieId) throws Exception;

    long addReview(Review review) throws Exception;

    int deleteReview(long id) throws Exception;

    Movie getMovie(long id) throws Exception;

    List<Movie> getMoviesSorted(String sort) throws Exception;

    void addMovie(Movie movie) throws Exception;
    int updateMovie(Movie movie) throws Exception;
    int deleteMovie(long id) throws Exception;
    List<Movie> getMovies() throws Exception;
    List<Movie> getMovies(List<Long> ids) throws Exception;
    List<Movie> getMoviesBy(String field, String value) throws Exception;

    void likeMovie(Long movieId, Integer userId) throws Exception;
    void unlikeMovie(Long movieId, Integer userId) throws Exception;

    void markAsWatchedMovie(Long movieId, Integer userId) throws Exception;
    void unmarkAsWatchedMovie(Long movieId, Integer userId) throws Exception;

    void markToWatchLaterMovie(Long movieId, Integer userId) throws Exception;
    void unmarkToWatchLaterMovie(Long movieId, Integer userId) throws Exception;
}
