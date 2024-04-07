package com.classified.letterboxd.models;

import com.fasterxml.jackson.annotation.JsonProperty;

import java.util.Objects;

public class Article {

    private Long id;
    private String title;
    private String publicationDate;
    private String text;
    private String cover;

    public Article(Long id, String title, String publicationDate, String text, String cover) {
        this.id = id;
        this.title = title;
        this.publicationDate = publicationDate;
        this.text = text;
        this.cover = cover;
    }

    public Article(@JsonProperty("title") String title,
                   @JsonProperty("publicationDate") String publicationDate,
                   @JsonProperty("text") String text,
                   @JsonProperty("cover") String cover) {
        this.title = title;
        this.publicationDate = publicationDate;
        this.text = text;
        this.cover = cover;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getPublicationDate() {
        return publicationDate;
    }

    public void setPublicationDate(String publicationDate) {
        this.publicationDate = publicationDate;
    }

    public String getText() {
        return text;
    }

    public void setText(String text) { this.text = text; }

    public String getCover() { return this.cover; }

    public void setCover(String cover) { this.cover = cover; }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        Article article = (Article) o;

        if (!Objects.equals(id, article.id)) return false;
        if (!Objects.equals(title, article.title)) return false;
        if (!Objects.equals(publicationDate, article.publicationDate))
            return false;
        if (!Objects.equals(text, article.text)) return false;
        return Objects.equals(cover, article.cover);
    }

    @Override
    public int hashCode() {
        int result = id != null ? id.hashCode() : 0;
        result = 31 * result + (title != null ? title.hashCode() : 0);
        result = 31 * result + (publicationDate != null ? publicationDate.hashCode() : 0);
        result = 31 * result + (text != null ? text.hashCode() : 0);
        result = 31 * result + (cover != null ? cover.hashCode() : 0);
        return result;
    }
}
