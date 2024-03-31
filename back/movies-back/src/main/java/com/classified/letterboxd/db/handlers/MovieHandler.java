package com.classified.letterboxd.db.handlers;

import com.classified.letterboxd.models.Movie;


import java.util.ArrayList;
import java.util.List;

public class MovieHandler {

    public static ResultSetHandler<List<Movie>> handle() {
        List<Movie> movies = new ArrayList<>();
        return queryResultSet -> {
            while (queryResultSet.next()) {
                long movieId = queryResultSet.getLong("id");
                String title = queryResultSet.getString("title");
                String background = queryResultSet.getString("background");
                String cover = queryResultSet.getString("cover");
                String director = queryResultSet.getString("director");
                String description = queryResultSet.getString("description");
                short year = queryResultSet.getShort("year");
                String slogan = queryResultSet.getString("slogan");
                String[] cast = queryResultSet.getString("cast").split(",");
                String studio = queryResultSet.getString("studio");
                float rating = queryResultSet.getFloat("rating");
                movies.add(new Movie(
                        movieId,
                        title,
                        background,
                        cover,
                        director,
                        description,
                        year,
                        slogan,
                        cast,
                        studio,
                        rating
                ));
            }
            return movies;
        };
    }
}
