package com.classified.letterboxd.controllers;

import com.classified.letterboxd.db.dao.MovieDao;
import com.classified.letterboxd.db.dao.ReviewDao;
import com.classified.letterboxd.models.Movie;
import com.classified.letterboxd.models.Review;
import com.classified.letterboxd.models.User;
import com.classified.letterboxd.models.exceptions.NoMovieException;
import com.classified.letterboxd.utils.AppLogging;
import com.classified.letterboxd.utils.AuthUtil;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import static org.springframework.http.HttpStatus.*;

@RestController
public class ReviewController implements AppLogging {
    @Autowired
    ReviewDao reviews;

    @Autowired
    private ObjectMapper objectMapper;

    @Autowired
    private AuthUtil authUtil;


    @GetMapping("/review/{id}")
    public ResponseEntity<String> getReview(@PathVariable long id) throws Exception {
        try {
            return ResponseEntity.status(OK).body(objectMapper.writeValueAsString(reviews.getReview(id)));
        } catch (NoMovieException e) {
            return ResponseEntity.status(NO_CONTENT).body("");
        }
    }


    @RequestMapping("/reviews")
    public ResponseEntity<List<Review>> getReviews(@RequestParam(value="id", required = false) List<Long> ids) {

        List<Review> result = null;

        //request by ids handling
        if (ids != null && !ids.isEmpty()) result = reviews.getReviews(ids);

        //handling obtained result
        if (result != null && result.size() > 0) return ResponseEntity.status(OK).body(result);
        else {
            log.warn("Empty response for getReviews request");
            return ResponseEntity.status(HttpStatus.NO_CONTENT).body(result);
        }
    }

    @PostMapping("/review")
    public String addReview(@RequestBody String body, @RequestHeader("x-auth") String token, HttpServletResponse response) throws Exception {
        User user = authUtil.getUserByToken(token);
        if (user != null) {

            try {
                Review review = objectMapper.readValue(body, Review.class);
                reviews.addReview(review, user);
                return "Review has been created successfully";
            } catch (Exception e) {
                response.setStatus(INTERNAL_SERVER_ERROR.value());
                return "Request failed" + e.getMessage();
            }
        } else {
            response.setStatus(UNAUTHORIZED.value());
            return "Auth failed for review creation";
        }

    }

    @DeleteMapping("/review/{id}")
    public String removeReview(@PathVariable long id, @RequestHeader("x-auth") String token, HttpServletResponse response) throws Exception {
        User user = authUtil.getUserByToken(token);
        if (user != null) {

            try {
                reviews.removeReview(id, user);
                return "Review has been deleted successfully";
            } catch (Exception e) {
                response.setStatus(INTERNAL_SERVER_ERROR.value());
                return "Request failed" + e.getMessage();
            }
        } else {
            response.setStatus(UNAUTHORIZED.value());
            return "Auth failed for review creation";
        }

    }


    @GetMapping("/review/{userId}/{movieId}")
    public ResponseEntity<List<Review>> getReviewsByUserAndMovie(@PathVariable Long userId, @PathVariable long movieId, HttpServletRequest request, HttpServletResponse response) throws Exception {

            try {
                List<Review> result = reviews.getReviewByUsersIdAndMovie(userId, movieId);
                return ResponseEntity.status(OK).body(result);
            } catch (Exception e) {
                return ResponseEntity.status(INTERNAL_SERVER_ERROR).body(new ArrayList<>());
            }

    }
}
