package com.classified.letterboxd.controllers;

import com.classified.letterboxd.db.dao.MovieDao;
import com.classified.letterboxd.db.dao.UserDao;
import com.classified.letterboxd.models.Movie;
import com.classified.letterboxd.models.User;
import com.classified.letterboxd.models.exceptions.NoMovieException;
import com.classified.letterboxd.utils.AppLogging;
import com.classified.letterboxd.utils.JwtUtil;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import io.jsonwebtoken.Claims;
import jakarta.annotation.Nullable;
import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Arrays;
import java.util.Date;
import java.util.List;

import static org.springframework.http.HttpStatus.NO_CONTENT;
import static org.springframework.http.HttpStatus.OK;

@RestController
public class MovieController implements AppLogging {
    @Autowired
    MovieDao movies;
    @Autowired
    UserDao users;
    @Autowired
    private ObjectMapper objectMapper;
    @Autowired
    private JwtUtil jwtUtil;

    @GetMapping("/movies/{id}")
    public ResponseEntity<String> getMovie(@PathVariable long id) throws Exception {
        try {
            return ResponseEntity.status(OK).body(objectMapper.writeValueAsString(movies.getMovie(id)));
        } catch (NoMovieException e) {
            return ResponseEntity.status(NO_CONTENT).body("");
        }
    }

    @PostMapping
    public Movie addMovie(@RequestBody String movieJson) throws JsonProcessingException {
        Movie movie = objectMapper.readValue(movieJson, Movie.class);
        movies.addMovie(movie);
        return movie;
    }

    @DeleteMapping("/movies/{id}")
    public ResponseEntity<String> deleteMovie(@PathVariable int id) {
        int result = movies.deleteMovie(id);
        if (result > 0) return ResponseEntity.status(OK).body("Movie with ID " + id + " deleted successfully");
        else return ResponseEntity.status(HttpStatus.NO_CONTENT).body("No movie with id " + id + " to delete");
    }

    @PostMapping("/movies/{movieId}/like")
    public ResponseEntity<Void> likeMovie(@PathVariable Long movieId, HttpServletRequest request) throws Exception {
        User user = getUserByCookie(request);
        if (user != null) {
            movies.likeMovie(movieId, user.getId());
            return new ResponseEntity<>(HttpStatus.OK);
        } else return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
    }

    @DeleteMapping("/movies/{movieId}/like")
    public ResponseEntity<Void> unlikeMovie(@PathVariable Long movieId, HttpServletRequest request) throws Exception {
        User user = getUserByCookie(request);
        if (user != null) {
            movies.unlikeMovie(movieId, user.getId());
            return new ResponseEntity<>(HttpStatus.OK);
        } else return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
    }

    @PostMapping("/movies/{movieId}/watched")
    public ResponseEntity<Void> watchedMovie(@PathVariable Long movieId, HttpServletRequest request) throws Exception {
        User user = getUserByCookie(request);
        if (user != null) {
            movies.markAsWatched(movieId, user.getId());
            return new ResponseEntity<>(HttpStatus.OK);
        } else return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
    }

    @DeleteMapping("/movies/{movieId}/watched")
    public ResponseEntity<Void> unwatchMovie(@PathVariable Long movieId, HttpServletRequest request) throws Exception {
        User user = getUserByCookie(request);
        if (user != null) {
            movies.unmarkAsWatched(movieId, user.getId());
            return new ResponseEntity<>(HttpStatus.OK);
        } else return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
    }

    @PostMapping("/movies/{movieId}/watch-later")
    public ResponseEntity<Void> watchLaterMovie(@PathVariable Long movieId, HttpServletRequest request) throws Exception {
        User user = getUserByCookie(request);
        if (user != null) {
            movies.markToWatchLater(movieId, user.getId());
            return new ResponseEntity<>(HttpStatus.OK);
        } else return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
    }

    @DeleteMapping("/movies/{movieId}/watch-later")
    public ResponseEntity<Void> unwatchLaterMovie(@PathVariable Long movieId, HttpServletRequest request) throws Exception {
        User user = getUserByCookie(request);
        if (user != null) {
            movies.unMarkToWatchLater(movieId, user.getId());
            return new ResponseEntity<>(HttpStatus.OK);
        } else return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
    }

    @RequestMapping("/movies")
    public ResponseEntity<List<Movie>> getMovies() {

        List<Movie> result = movies.getMovies();
        //handling obtained result
        if (result != null && result.size() > 0) return ResponseEntity.status(OK).body(result);
        else {
            log.warn("Empty response for getMovies request");
            return ResponseEntity.status(HttpStatus.NO_CONTENT).body(result);
        }
    }


    @GetMapping("/moviesFilter")
    public ResponseEntity<List<Movie>> getMoviesFilter(
            @RequestParam(value="id", required = false) List<Long> ids,
            @RequestParam(value="director", required = false) String director,
            @RequestParam(value="studio", required = false) String studio,
            @RequestParam(value="sort", required = false) String sort) {

        List<Movie> result = null;

        //request by ids handling
        if (ids != null && !ids.isEmpty()) result = movies.getMovies(ids);

        //request filtering by director handling
        if (director != null) result = movies.getMoviesBy("director", director);

        //request filtering by studio handling
        if (studio != null) result = movies.getMoviesBy("studio", studio);

        //request sorting handling
        if (sort != null) result = movies.getMoviesSorted(sort);

        //handling obtained result
        if (result != null && result.size() > 0) return ResponseEntity.status(OK).body(result);
        else {
            log.warn("Empty response for getMovies request");
            return ResponseEntity.status(HttpStatus.NO_CONTENT).body(result);
        }
}
    private static List<String> supportedRequestParams = Arrays.asList("only_count");



    @Nullable
    public User getUserByCookie(HttpServletRequest request) throws Exception {
        Cookie[] cookies = request.getCookies();
        String jwtToken = null;
        User user = null;

        if (cookies != null) {
            for (Cookie cookie : cookies) {
                if ("AUTH".equals(cookie.getName())) {
                    jwtToken = cookie.getValue();
                    break;
                }
            }
        }

        if (jwtToken != null) {
            try {
                Claims token = jwtUtil.parseToken(jwtToken);
                String username = token.getSubject();
                if (token.getExpiration().after(new Date())) {
                    user = users.getUser(username);
                }
            } catch (Exception e) {
                log.info("Failed to get user by cookie: {}", e.getMessage());
            }
        }

        return user;

    }
}
