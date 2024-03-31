package com.classified.letterboxd.models;

import com.fasterxml.jackson.annotation.JsonProperty;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;
import java.util.StringJoiner;

public class User {
    private Integer id;
    private String login;
    private String password;
    private String role;
    private String bio;
    private List<Long> favourites;
    private List<Long> watchLater;
    private List<Long> watched;
    private List<Long> reviews;
    private String photo;
    private String background;

    public User(Integer id,
                String login,
                String password,
                String role,
                String bio,
                List<Long> favourites,
                List<Long> watchLater,
                List<Long> watched,
                List<Long> reviews,
                String photo,
                String background) {

        this.id = id;
        this.login = login;
        this.password = password;
        this.role = role;
        this.bio = bio;
        this.favourites = favourites;
        this.watchLater = watchLater;
        this.watched = watched;
        this.reviews = reviews;
        this.photo = photo;
        this.background = background;
    }

    public User(Integer id, String login, String password, String bio) {
        this.id = id;
        this.login = login;
        this.password = password;
        this.bio = bio;
        this.role = "USER";
    }

    public User(@JsonProperty("login") String login,
                @JsonProperty("password") String password) {
        this.login = login;
        this.password = password;
        this.bio = "";
        this.role = "";
        this.photo = "";
        this.background = "";
        this.favourites = new ArrayList<>();
        this.watchLater = new ArrayList<>();
        this.watched = new ArrayList<>();
        this.reviews= new ArrayList<>();
    }

    public User(Integer id, String login, String password, String role, String photo, String background, String bio) {
        this.id = id;
        this.login = login;
        this.password = password;
        this.bio = bio;
        this.role = role;
        this.photo = photo;
        this.background = background;
        this.favourites = new ArrayList<>();
        this.watchLater = new ArrayList<>();
        this.watched = new ArrayList<>();
        this.reviews= new ArrayList<>();
    }

    public Integer getId() {
        return id;
    }

    public String getLogin() {
        return login;
    }

    public void setLogin(String login) {
        this.login = login;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getBio() {
        return bio;
    }

    public void setBio(String bio) {
        this.bio = bio;
    }

    public List<Long> getFavourites() {
        return favourites;
    }

    public void setFavourites(List<Long> favourites) {
        this.favourites = favourites;
    }

    public List<Long> getWatchLater() {
        return watchLater;
    }

    public void setWatchLater(List<Long> watchLater) {
        this.watchLater = watchLater;
    }

    public List<Long> getWatched() {
        return watched;
    }

    public void setWatched(List<Long> watched) {
        this.watched = watched;
    }

    public List<Long> getReviews() {
        return reviews;
    }

    public void setReviews(List<Long> reviews) {
        this.reviews = reviews;
    }

    public String getRole() { return role; }

    public void setRole(String role) { this.role = role; }

    public String getPhoto() { return photo; }

    public void setPhoto(String photo) { this.photo = photo; }

    public String getBackground() { return background; }

    public void setBackground(String background) {
        this.background = background;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        User user = (User) o;

        if (id != user.id) return false;
        if (!login.equals(user.login)) return false;
        if (!Objects.equals(bio, user.bio)) return false;
        if (!Objects.equals(favourites, user.favourites)) return false;
        if (!Objects.equals(watchLater, user.watchLater)) return false;
        return Objects.equals(reviews, user.reviews);
    }

    @Override
    public int hashCode() {
        int result = id;
        result = 31 * result + login.hashCode();
        result = 31 * result + (bio != null ? bio.hashCode() : 0);
        result = 31 * result + (favourites != null ? favourites.hashCode() : 0);
        result = 31 * result + (watchLater != null ? watchLater.hashCode() : 0);
        result = 31 * result + (reviews != null ? reviews.hashCode() : 0);
        return result;
    }

    @Override
    public String toString() {
        return new StringJoiner(", ", User.class.getSimpleName() + "[", "]")
                .add("id=" + id)
                .add("login='" + login + "'")
                .add("bio='" + bio + "'")
                .add("favourites=" + favourites)
                .add("watchLater=" + watchLater)
                .add("reviews=" + reviews)
                .toString();
    }
}

