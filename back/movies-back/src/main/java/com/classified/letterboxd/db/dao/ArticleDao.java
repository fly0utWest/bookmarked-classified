package com.classified.letterboxd.db.dao;

import com.classified.letterboxd.db.Db;
import com.classified.letterboxd.models.Article;
import com.classified.letterboxd.models.User;
import com.classified.letterboxd.utils.AppLogging;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class ArticleDao implements AppLogging {
    @Autowired
    private Db database;

    public ArticleDao(Db database) {
        this.database = database;
    }

    public Article getArticle(long id) throws RuntimeException {
        try {
            Article article = database.getArticle(id);
            log.info("Article {} has been successfully retrieved!", id);
            return article;
        } catch (Exception e) {
            log.error("Article {} retrieving failed. Reason: {}", id, e.getMessage());
            throw new RuntimeException(e);
        }
    }

    public List<Article> getArticles() {
        try {
            return database.getArticles();
        } catch (Exception e) {
            log.error("Articles retrieving failed. Reason: {}", e.getMessage());
            throw new RuntimeException(e);
        }
    }

    public List<Article> getArticles(List<Long> ids) {
        try {
            return database.getArticles(ids);
        } catch (Exception e) {
            log.error("Articles retrieving failed. Reason: {}", e.getMessage());
            throw new RuntimeException(e);
        }
    }


    public Article addArticle(Article article) throws RuntimeException {
        try {
            database.addArticle(article);
            log.info("Article {} has been successfully created!", article.getTitle());
            return article;
        } catch (Exception e) {
            log.error("Article \"{}\" creation has been failed. Reason: {}", article.getTitle(), e.getMessage());
            throw new RuntimeException(e);
        }
    }

    public void removeArticle(Long id) throws RuntimeException {
        try {
            database.deleteArticle(id);
            log.info("Article {} has been deleted!", id);
        } catch (Exception e) {
            log.error("Article \"{}\" deletion has been failed. Reason: {}", id, e.getMessage());
            throw new RuntimeException(e);
        }
    }
}

