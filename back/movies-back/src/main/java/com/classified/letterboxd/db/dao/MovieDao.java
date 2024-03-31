package com.classified.letterboxd.db.dao;

import com.classified.letterboxd.db.Db;
import com.classified.letterboxd.models.Movie;
import com.classified.letterboxd.utils.AppLogging;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class MovieDao implements AppLogging {

    @Autowired
    Db database;

    public MovieDao(Db database) {
        this.database = database;
    }

    public Movie getMovie(long id) throws Exception {
        try {
            Movie movie = database.getMovie(id);
            log.info("Movie {} has been successfully retrieved!", id);
            return movie;
        } catch (Exception e) {
            log.error("Movie {} retrieving failed. Reason: {}", id, e.getMessage());
            throw e;
        }
    }

    public List<Movie> getMovies() {
        try {
            return database.getMovies();
        } catch (Exception e) {
            log.error("Movies retrieving failed. Reason: {}", e.getMessage());
            throw new RuntimeException(e);
        }
    }

    public List<Movie> getMovies(List<Long> ids) {
        try {
            return database.getMovies(ids);
        } catch (Exception e) {
            log.error("Movies retrieving failed. Reason: {}", e.getMessage());
            throw new RuntimeException(e);
        }
    }

    public List<Movie> getMoviesBy(String field, String value) {
        try {
            return database.getMoviesBy(field, value);
        } catch (Exception e) {
            log.error("Movies retrieving failed. Reason: {}", e.getMessage());
            throw new RuntimeException(e);
        }
    }

    public List<Movie> getMoviesSorted(String sort) {
        try {
            return database.getMoviesSorted(sort);
        } catch (Exception e) {
            log.error("Movies retrieving failed. Reason: {}", e.getMessage());
            throw new RuntimeException(e);
        }
    }

    public void addMovie(Movie movie) throws RuntimeException {
        try {
            database.addMovie(movie);
            log.info("Movie {} creation has been successfully completed!", movie.getTitle());
        } catch (Exception e) {
            log.error("Movie {} creation failed. Reason: {}", movie.getTitle(), e.getMessage());
            throw new RuntimeException(e);
        }
    }

    public int updateMovie(Movie movie) throws RuntimeException {
        try {
            int rows = database.updateMovie(movie);
            if (rows == 1) {
                log.info("Movie {} update has successfully completed", movie.getId());
            } else log.warn("Nothing were changed for Movie {}  via update query.", movie.getId());
            return rows;
        } catch (Exception e) {
            log.error("Movie {} updated failed. Reason: {}", movie.getId(), e.getMessage());
            throw new RuntimeException(e);
        }
    }

    public int deleteMovie(long id) throws RuntimeException {
        try {
            int rows = database.deleteMovie(id);
            if (rows == 1) {
                log.info("Movie {} deletion has successfully completed", id);
            } else log.debug("No rows were affected with delete query for movie: {}", id);
            return rows;
        } catch (Exception e) {
            log.error("Movie {} deletion failed. Reason: {}", id, e.getMessage());
            throw new RuntimeException(e);
        }
    }

    public void likeMovie(Long movieId, Integer userId) {
        try {
            database.likeMovie(movieId, userId);
        } catch (Exception e) {
            log.error("Movie like failed. Reason: {}", e.getMessage());
            throw new RuntimeException(e);
        }
    }

    public void unlikeMovie(Long movieId, Integer userId) {
        try {
            database.unlikeMovie(movieId, userId);
        } catch (Exception e) {
            log.error("Movie like failed. Reason: {}", e.getMessage());
            throw new RuntimeException(e);
        }
    }


    public void markAsWatched(Long movieId, Integer userId) {
        try {
            database.markAsWatchedMovie(movieId, userId);
        } catch (Exception e) {
            log.error("Movie like failed. Reason: {}", e.getMessage());
            throw new RuntimeException(e);
        }
    }

    public void unmarkAsWatched(Long movieId, Integer userId) {
        try {
            database.unmarkAsWatchedMovie(movieId, userId);
        } catch (Exception e) {
            log.error("Movie like failed. Reason: {}", e.getMessage());
            throw new RuntimeException(e);
        }
    }

    public void markToWatchLater(Long movieId, Integer userId) {
        try {
            database.markToWatchLaterMovie(movieId, userId);
        } catch (Exception e) {
            log.error("Movie like failed. Reason: {}", e.getMessage());
            throw new RuntimeException(e);
        }
    }

    public void unMarkToWatchLater(Long movieId, Integer userId) {
        try {
            database.unmarkToWatchLaterMovie(movieId, userId);
        } catch (Exception e) {
            log.error("Movie like failed. Reason: {}", e.getMessage());
            throw new RuntimeException(e);
        }
    }
}
