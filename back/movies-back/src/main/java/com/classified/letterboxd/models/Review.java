package com.classified.letterboxd.models;

import com.fasterxml.jackson.annotation.JsonProperty;

import java.util.Objects;

public class Review {

    private Long id;
    private Long movieId;
    private String title;
    private String reviewType;
    private String text;

    public Review(Long id, Long movieId, String title, String reviewType, String text) {
        this.id = id;
        this.title = title;
        this.reviewType = reviewType;
        this.text = text;
        this.movieId = movieId;
    }

    public Review(@JsonProperty("movieId") Long movieId,
                  @JsonProperty("title") String title,
                  @JsonProperty("reviewType") String reviewType,
                  @JsonProperty("text") String text) {
        this.title = title;
        this.reviewType = reviewType;
        this.text = text;
        this.movieId = movieId;
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

    public String getReviewType() {
        return reviewType;
    }

    public void setReviewType(String reviewType) {
        this.reviewType = reviewType;
    }

    public String getText() {
        return text;
    }

    public void setText(String text) { this.text = text; }

    public Long getMovieId() { return movieId; }

    public void setMovieId(Long movieId) { this.movieId = movieId; }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        Review review = (Review) o;

        if (!Objects.equals(id, review.id)) return false;
        if (!Objects.equals(title, review.title)) return false;
        if (!Objects.equals(reviewType, review.reviewType)) return false;
        return Objects.equals(text, review.text);
    }

    @Override
    public int hashCode() {
        int result = id != null ? id.hashCode() : 0;
        result = 31 * result + (title != null ? title.hashCode() : 0);
        result = 31 * result + (reviewType != null ? reviewType.hashCode() : 0);
        result = 31 * result + (text != null ? text.hashCode() : 0);
        return result;
    }
}
