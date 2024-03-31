package com.classified.letterboxd.models;

import java.util.Arrays;

public class Movie {
    private Long id;
    private String title;
    private String background;
    private String cover;
    private String director;
    private String description;
    private Short year;
    private String slogan;
    private String[] cast;
    private String studio;
    private float rating;

    public Movie(Long id, String title, String background, String cover, String director, String description, Short year, String slogan, String[] cast, String studio, float rating) {
        this.id = id;
        this.title = title;
        this.background = background;
        this.cover = cover;
        this.director = director;
        this.description = description;
        this.year = year;
        this.slogan = slogan;
        this.cast = cast;
        this.studio = studio;
        this.rating = rating;
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

    public String getDirector() {
        return director;
    }

    public void setDirector(String director) {
        this.director = director;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Short getYear() {
        return year;
    }

    public void setYear(Short year) {
        this.year = year;
    }

    public String getSlogan() {
        return slogan;
    }

    public void setSlogan(String slogan) {
        this.slogan = slogan;
    }

    public String[] getCast() {
        return cast;
    }

    public void setCast(String[] cast) {
        this.cast = cast;
    }

    public String getBackground() {
        return background;
    }

    public void setBackground(String background) {
        this.background = background;
    }

    public String getCover() {
        return cover;
    }

    public void setCover(String cover) {
        this.cover = cover;
    }

    public String getStudio() { return studio; }

    public void setStudio(String studio) { this.studio = studio;}

    public float getRating() { return rating; }

    public void setRating(float rating) { this.rating = rating; }


    @Override
    public String toString() {
        return "Movie{" +
                "id=" + id +
                ", title='" + title + '\'' +
                ", background='" + background + '\'' +
                ", cover='" + cover + '\'' +
                ", director='" + director + '\'' +
                ", description='" + description + '\'' +
                ", year=" + year +
                ", slogan='" + slogan + '\'' +
                ", cast=" + Arrays.toString(cast) +
                ", studio=" + studio +
                ", rating=" + rating +
                '}';
    }
}