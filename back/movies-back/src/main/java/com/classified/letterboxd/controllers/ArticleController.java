package com.classified.letterboxd.controllers;

import com.classified.letterboxd.db.dao.ArticleDao;
import com.classified.letterboxd.db.dao.ReviewDao;
import com.classified.letterboxd.models.Article;
import com.classified.letterboxd.models.Review;
import com.classified.letterboxd.models.User;
import com.classified.letterboxd.models.exceptions.NoMovieException;
import com.classified.letterboxd.utils.AppLogging;
import com.classified.letterboxd.utils.AuthUtil;
import com.fasterxml.jackson.databind.ObjectMapper;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

import static org.springframework.http.HttpStatus.*;

@RestController
public class ArticleController implements AppLogging {
    @Autowired
    ArticleDao articles;

    @Autowired
    private ObjectMapper objectMapper;

    @Autowired
    private AuthUtil authUtil;


    @GetMapping("/article/{id}")
    public ResponseEntity<String> getArticle(@PathVariable long id) throws Exception {
        try {
            return ResponseEntity.status(OK).body(objectMapper.writeValueAsString(articles.getArticle(id)));
        } catch (NoMovieException e) {
            return ResponseEntity.status(NO_CONTENT).body("");
        }
    }



    @RequestMapping("/articles")
    public ResponseEntity<List<Article>> getArticles(@RequestParam(value = "id", required = false) List<Long> ids) {

        List<Article> result = null;

        //request by ids handling
        if (ids != null && !ids.isEmpty()) result = articles.getArticles(ids);
        else result  = articles.getArticles();
        //handling obtained result
        if (result != null && result.size() > 0) return ResponseEntity.status(OK).body(result);
        else {
            log.warn("Empty response for getArticles request");
            return ResponseEntity.status(HttpStatus.NO_CONTENT).body(result);
        }
    }

    @PostMapping("/article")
    public String addArticle(@RequestBody String body, HttpServletResponse response) throws Exception {
        try {
            Article article = objectMapper.readValue(body, Article.class);
            articles.addArticle(article);
            return "Article has been created successfully";
        } catch (Exception e) {
            response.setStatus(INTERNAL_SERVER_ERROR.value());
            return "Request failed" + e.getMessage();
        }
    }

    @DeleteMapping("/article/{id}")
    public String removeArticle(@PathVariable long id, HttpServletResponse response) throws Exception {
        try {
            articles.removeArticle(id);
            return "Article has been deleted successfully";
        } catch (Exception e) {
            response.setStatus(INTERNAL_SERVER_ERROR.value());
            return "Request failed" + e.getMessage();
        }

    }
}
