package com.classified.letterboxd.db.handlers;

import com.classified.letterboxd.models.Article;
import com.classified.letterboxd.models.Review;

import java.util.ArrayList;
import java.util.List;

public class ArticleHandler {

    public static ResultSetHandler<List<Article>> handle() {
        List<Article> articles = new ArrayList<>();
        return queryResultSet -> {
            while (queryResultSet.next()) {
                long articleId = queryResultSet.getLong("id");
                String publicationDate = queryResultSet.getString("publication_date");
                String title = queryResultSet.getString("title");
                String cover = queryResultSet.getString("cover");
                String text = queryResultSet.getString("text");
                articles.add(new Article(
                        articleId,
                        title,
                        publicationDate,
                        text,
                        cover
                ));
            }
            return articles;
        };
    }
}
