package com.classified.letterboxd.db.handlers;

import com.classified.letterboxd.models.User;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class UserHandler {

    public static ResultSetHandler<List<User>> handle() {
        List<User> users = new ArrayList<>();

        return queryResultSet -> {
            while (queryResultSet.next()) {
                Integer userID = queryResultSet.getInt("id");
                String login = queryResultSet.getString("login");
                String password = queryResultSet.getString("pass");
                String role = queryResultSet.getString("role");
                String photo = queryResultSet.getString("photo");
                String background = queryResultSet.getString("background");
                String bio = queryResultSet.getString("bio");
                users.add(new User(userID, login, password, role, photo, background, bio));
            }
            return users;
        };

    }

    public static ResultSetHandler<List<Long>> handleMoviesIdsResultSet() {
        List<Long> movies = new ArrayList<>();
        return queryResultSet -> {
            while (queryResultSet.next()) {
                Long movieId = queryResultSet.getLong("movie_id");
                movies.add(movieId);
            }
            return movies;
        };
    }
}
