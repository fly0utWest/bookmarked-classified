package com.classified.letterboxd.db.dao;

import com.classified.letterboxd.db.Db;
import com.classified.letterboxd.models.User;
import com.classified.letterboxd.utils.AppLogging;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class UserDao implements AppLogging {
    @Autowired
    Db database;

    public UserDao(Db database) {
        this.database = database;
    }

    public User getUser(long id) throws RuntimeException {
        try {
            User user = database.getUser(id);
            richUser(user);
            log.info("User {}:{} has been successfully retrieved!", user.getLogin(), id);
            return user;
        } catch (Exception e) {
            log.error("User {} retrieving failed. Reason: {}", id, e.getMessage());
            throw new RuntimeException(e);
        }
    }

    public User getUser(String login) throws RuntimeException {
        try {
            User user = database.getUser(login);
            if (user != null) {
                richUser(user);
                log.info("User {}:{} has been successfully retrieved!", user.getLogin(), user.getId());
            } else {
                log.warn("User does not exist: {}", login);
            }
            return user;
        } catch (Exception e) {
            log.error("User {} retrieving failed. Reason: {}", login, e.getMessage());
            throw new RuntimeException(e);
        }
    }

    private void richUser(User user) throws Exception {
        List<Long> favouredMovies = database.getUsersFavouredMovies(user.getId());
        List<Long> watchedMovies = database.getUsersWatchedMovies(user.getId());
        List<Long> watchLaterMovies = database.getUsersWatchLaterMovies(user.getId());
        List<Long> reviews = database.getUsersReviews(user.getId());
        user.setFavourites(favouredMovies);
        user.setWatched(watchedMovies);
        user.setWatchLater(watchLaterMovies);
        user.setReviews(reviews);
    }

    public void createUser(User user) throws RuntimeException {
        try {
            database.createUser(user);
            log.info("User {} creation has been successfully completed!", user.getLogin());
        } catch (Exception e) {
            log.error("User {} creation failed. Reason: {}", user.getLogin(), e.getMessage());
            throw new RuntimeException(e);
        }
    }

    public int updateUser(User user) throws RuntimeException {
        try {
            int rows = database.updateUser(user);
            if (rows == 1) {
                log.info("User {} update has successfully completed", user.getLogin());
            } else log.warn("Nothing were changed for User {}  via update query.", user.getId());
            return rows;
        } catch (Exception e) {
            log.error("User {} updated failed. Reason: {}", user.getId(), e.getMessage());
            throw new RuntimeException(e);
        }
    }

    public int deleteUser(long id) throws RuntimeException {
        try {
            int rows = database.deleteUser(id);
            if (rows == 1) {
                log.info("User {} deletion has successfully completed", id);
            } else log.debug("No rows were affected with delete query for user: {}", id);
            return rows;
        } catch (Exception e) {
            log.error("User {} deletion failed. Reason: {}", id, e.getMessage());
            throw new RuntimeException(e);
        }
    }
}

