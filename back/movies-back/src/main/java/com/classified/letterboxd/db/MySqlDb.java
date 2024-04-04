package com.classified.letterboxd.db;

import com.classified.letterboxd.db.handlers.MovieHandler;
import com.classified.letterboxd.db.handlers.ResultSetHandler;
import com.classified.letterboxd.db.handlers.ReviewHandler;
import com.classified.letterboxd.db.handlers.UserHandler;
import com.classified.letterboxd.models.Movie;
import com.classified.letterboxd.models.Review;
import com.classified.letterboxd.models.User;
import com.classified.letterboxd.models.exceptions.NoMovieException;
import com.classified.letterboxd.models.exceptions.NoUserException;
import com.classified.letterboxd.utils.AppLogging;
import jakarta.annotation.PostConstruct;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.sql.*;
import java.util.List;
import java.util.concurrent.atomic.AtomicReference;

import static com.classified.letterboxd.utils.MetricsHelper.measured;

@Service
public class MySqlDb implements Db, AppLogging {

    @Autowired
    private HikariPool connections;

    @Override
    public Connection getConnection() throws SQLException {
        try {
            return connections.getConnection();
        } catch (SQLException e) {
            e.printStackTrace();
            throw e;
        }
    }

    @Override
    public String getMetainfo() {
        try (Connection connection = getConnection()) {
            DatabaseMetaData metaData = connection.getMetaData();
            return "Connected to: " + metaData.getURL() + "\n" +
                    "DB name: " + metaData.getDatabaseProductName() + "\n" +
                    "DB version: " + metaData.getDatabaseProductVersion() + "\n" +
                    "Driver: " + metaData.getDriverName();
        } catch (Exception e) {
            e.printStackTrace();
            return e.getMessage();
        }
    }

    @PostConstruct
    @Override
    public void initialize() throws Exception {
        Driver driver = (Driver) Class.forName("com.mysql.cj.jdbc.Driver").getConstructor().newInstance();
        DriverManager.registerDriver(driver);
        measured(() -> {
            try (Connection connection = getConnection()) {
                log.info(getMetainfo());

                createSchema(connection, "DB_CINEMA");

                createUsersTable(connection);
                createMoviesTable(connection);
                createReviewsTable(connection);

                createUsersFavouredMoviesTable(connection);
                createUsersWatchedMoviesTable(connection);
                createUsersWatchLaterMoviesTable(connection);
                createUsersReviewsTable(connection);
                log.info("DB initialization has been successfully completed");
            } catch (Exception e) {
                String errorMessage = "DB initialization failed";
                log.error(errorMessage + ": " + e.getMessage());
                throw new RuntimeException(errorMessage);
            }
        }, "DB init");
    }

    private void createSchema(Connection connection, String name) {
        try {
            String query = String.format("CREATE DATABASE IF NOT EXISTS %s", name);
            Statement statement = connection.createStatement();
            statement.executeUpdate(query);
            log.info("Schema {} has been successfully created", name);
        } catch (SQLException e) {
            log.error("Schema creation failed with error: {}", e.getMessage());
            throw new RuntimeException(e);
        }
    }

    private void createUsersTable(Connection connection) {
        try {
            String query =
                    "CREATE TABLE IF NOT EXISTS DB_CINEMA.USERS(" +
                            "id INT AUTO_INCREMENT, " +
                            "login VARCHAR(255) NOT NULL, " +
                            "pass VARCHAR(255) NOT NULL, " +
                            "role VARCHAR(255) NOT NULL, " +
                            "photo VARCHAR(255) NOT NULL, " +
                            "background VARCHAR(255) NOT NULL, " +
                            "bio VARCHAR(255) NOT NULL, " +
                            "PRIMARY KEY(id, login))";
            Statement statement = connection.createStatement();
            statement.executeUpdate(query);
            log.info("Users table was successfully created");
        } catch (SQLException e) {
            log.error("Users table creation failed");
            throw new RuntimeException(e);
        }
    }

    private void createMoviesTable(Connection connection) {
        try {
            String query =
                    "CREATE TABLE IF NOT EXISTS DB_CINEMA.MOVIES(\n" +
                            "id INT AUTO_INCREMENT PRIMARY KEY,\n" +
                            "title VARCHAR(255) NOT NULL,\n" +
                            "background VARCHAR(255) NOT NULL,\n" +
                            "cover VARCHAR(255) NOT NULL,\n" +
                            "director VARCHAR(255) NOT NULL,\n" +
                            "description VARCHAR(765) NOT NULL,\n" +
                            "year SMALLINT NOT NULL,\n" +
                            "slogan VARCHAR(255) NOT NULL,\n" +
                            "cast VARCHAR(255) NOT NULL,\n" +
                            "studio VARCHAR(255) NOT NULL,\n" +
                            "rating FLOAT NOT NULL\n)";
            Statement statement = connection.createStatement();
            statement.executeUpdate(query);
            log.info("Movies table was successfully created");
        } catch (SQLException e) {
            log.error("Movies table creation failed");
            throw new RuntimeException(e);
        }
    }

    private void createReviewsTable(Connection connection) {
        String tableName = "REVIEWS";
        try {
            String query =
                    "CREATE TABLE IF NOT EXISTS DB_CINEMA." + tableName + "(" +
                            "review_id INT AUTO_INCREMENT PRIMARY KEY, " +
                            "movie_id INT NOT NULL, " +
                            "title VARCHAR(255) NOT NULL, " +
                            "review_type VARCHAR(255) NOT NULL, " +
                            "text VARCHAR(255) NOT NULL" +
                            ")";
            Statement statement = connection.createStatement();
            statement.executeUpdate(query);
            log.info("{} table was successfully created", tableName);
        } catch (SQLException e) {
            log.error("{} table creation failed", tableName);
            throw new RuntimeException(e);
        }
    }

    private void createUsersFavouredMoviesTable(Connection connection) {
        createUsersMoviesTable(connection, "USERS_FAVOURED_MOVIES");
    }

    private void createUsersWatchedMoviesTable(Connection connection) {
        createUsersMoviesTable(connection, "USERS_WATCHED_MOVIES");
    }

    private void createUsersWatchLaterMoviesTable(Connection connection) {
        createUsersMoviesTable(connection, "USERS_WATCH_LATER_MOVIES");
    }

    private void createUsersMoviesTable(Connection connection, String tableName) {
        try {
            String query =
                    "CREATE TABLE IF NOT EXISTS DB_CINEMA." + tableName + "(" +
                            "user_id INT NOT NULL, " +
                            "movie_id INT NOT NULL)";
            Statement statement = connection.createStatement();
            statement.executeUpdate(query);
            log.info("{} table was successfully created", tableName);
        } catch (SQLException e) {
            log.error("{} table creation failed", tableName);
            throw new RuntimeException(e);
        }
    }

    private void createUsersReviewsTable(Connection connection) {
        String tableName = "USERS_REVIEWS";
        try {
            String query =
                    "CREATE TABLE IF NOT EXISTS DB_CINEMA." + tableName + "(" +
                            "user_id INT NOT NULL, " +
                            "review_id INT NOT NULL)";
            Statement statement = connection.createStatement();
            statement.executeUpdate(query);
            log.info("{} table was successfully created", tableName);
        } catch (SQLException e) {
            log.error("{} table creation failed", tableName);
            throw new RuntimeException(e);
        }
    }

    @Override
    public User getUser(long id) throws Exception {
        String query = "SELECT * FROM DB_CINEMA.USERS WHERE ID = ?";
        List<User> result = execQuery(UserHandler.handle(), query, id);
        if (result.size() < 1) throw new NoUserException();
        return result.get(0);
    }

    @Override
    public User getUser(String login) throws Exception {
        String query = "SELECT * FROM DB_CINEMA.USERS WHERE login = ?";
        List<User> result = execQuery(UserHandler.handle(), query, login);
        if (result.size() < 1) return null;
        return result.get(0);
    }

    @Override
    public void createUser(User user) throws Exception {
        execUpdate(
                "INSERT INTO DB_CINEMA.USERS (LOGIN, PASS, ROLE, PHOTO, BACKGROUND, BIO) VALUES(?, ?, ?, ?, ?, ?)",
                user.getLogin(), user.getPassword(), user.getRole(), user.getPhoto(), user.getBackground(), user.getBio()
        );
    }

    @Override
    public int updateUser(User user) throws Exception {
        return execUpdate(
                "UPDATE DB_CINEMA.USERS SET login = \"?\", pass = \"?\" WHERE ID = ?",
                user.getLogin(), user.getPassword(), user.getId()
        );
    }

    public int deleteUser(long id) throws Exception {
        return execUpdate(
                "DELETE FROM DB_CINEMA.USERS WHERE ID = ?",
                id
        );
    }

    @Override
    public List<Long> getUsersFavouredMovies(long id) throws Exception {
        String query = "SELECT DISTINCT USERS_FAVOURED_MOVIES.movie_id FROM DB_CINEMA.USERS_FAVOURED_MOVIES" +
                " WHERE USERS_FAVOURED_MOVIES.user_id = ?";
        List<Long> result = execQuery(UserHandler.handleMoviesIdsResultSet(), query, id);
        return result;
    }

    @Override
    public List<Long> getUsersWatchedMovies(long id) throws Exception {
        String query = "SELECT DISTINCT USERS_WATCHED_MOVIES.movie_id FROM DB_CINEMA.USERS_WATCHED_MOVIES" +
                " WHERE USERS_WATCHED_MOVIES.user_id = ?";
        List<Long> result = execQuery(UserHandler.handleMoviesIdsResultSet(), query, id);
        return result;
    }

    @Override
    public List<Long> getUsersWatchLaterMovies(long id) throws Exception {
        String query = "SELECT DISTINCT USERS_WATCH_LATER_MOVIES.movie_id FROM DB_CINEMA.USERS_WATCH_LATER_MOVIES" +
                " WHERE USERS_WATCH_LATER_MOVIES.user_id = ?";
        List<Long> result = execQuery(UserHandler.handleMoviesIdsResultSet(), query, id);
        return result;
    }

    @Override
    public List<Long> getUsersReviews(long id) throws Exception {
        String query = "SELECT DISTINCT USERS_REVIEWS.review_id FROM DB_CINEMA.USERS_REVIEWS" +
                " WHERE USERS_REVIEWS.user_id = ?";
        List<Long> result = execQuery(ReviewHandler.handleReviewIdsResultSet(), query, id);
        return result;
    }

    @Override
    public void addUsersReviews(long reviewId, long userId) throws Exception {
        execUpdate(
                "INSERT INTO DB_CINEMA.USERS_REVIEWS (USER_ID, REVIEW_ID) VALUES (?, ?)",
                userId, reviewId);
    }

    @Override
    public void deleteUsersReviews(long userId, long reviewId) throws Exception {
        execUpdate(
                "DELETE FROM DB_CINEMA.USERS_REVIEWS WHERE USER_ID = ? AND REVIEW_ID = ?",
                userId, reviewId);
    }


    @Override
    public List<Review> getReviews() throws Exception {
        String query = "SELECT * FROM DB_CINEMA.REVIEWS LIMIT 20";
        return execQuery(ReviewHandler.handle(), query);
    }

    @Override
    public List<Review> getReviews(List<Long> ids) throws Exception {
        String query = "SELECT * FROM DB_CINEMA.REVIEWS WHERE REVIEW_ID " + buildListClause(ids);
        return execQuery(ReviewHandler.handle(), query, ids.toArray());
    }

    @Override
    public Review getReview(long id) throws Exception {
        String query = "SELECT * FROM DB_CINEMA.REVIEWS WHERE REVIEW_ID = ?";
        List<Review> result = execQuery(ReviewHandler.handle(), query, id);
        if (result.size() < 1) throw new Exception("No review obtained with id: " + id);
        return result.get(0);
    }

//    @Override
//    public List<Review> getReviewsByUserIdA(Long userId, long movieId) throws Exception {
//        String query = "SELECT * FROM DB_CINEMA.USERS_REVIEWS" +
//                " WHERE USERS_REVIEWS.user_id = ? AND USERS_REVIEWS.MOVIE_ID = ?";
//        List<Review> result = execQuery(ReviewHandler.handle(), query, userId, movieId);
//        if (result.size() < 1) throw new Exception("No review obtained for user id: " + userId);
//        return result;
//    }

    @Override
    public long addReview(Review review) throws Exception {
        execUpdate(
                "INSERT INTO DB_CINEMA.REVIEWS (MOVIE_ID, TITLE, TEXT, REVIEW_TYPE) VALUES (?, ?, ?, ?)",
                review.getMovieId(), review.getTitle(), review.getText(), review.getReviewType());

        AtomicReference<Integer> id = new AtomicReference<>();

        execQuery(resultSet -> {
            while (resultSet.next()) {
                id.set(resultSet.getInt("LAST_INSERT_ID()"));
            }
            return id;
        }, "SELECT LAST_INSERT_ID();");
        return id.get();
    }


    @Override
    public int deleteReview(long id) throws Exception {
        execUpdate(
                "DELETE FROM DB_CINEMA.REVIEWS WHERE REVIEW_ID = ?",
                id);
        return 0;
    }

    @Override
    public Movie getMovie(long id) throws Exception {
        String query = "SELECT * FROM DB_CINEMA.MOVIES WHERE ID = ?";
        List<Movie> result = execQuery(MovieHandler.handle(), query, id);
        if (result.size() < 1) throw new NoMovieException();
        return result.get(0);
    }

    @Override
    public List<Movie> getMovies() throws Exception {
        String query = "SELECT * FROM DB_CINEMA.MOVIES LIMIT 20";
        return execQuery(MovieHandler.handle(), query);
    }

    @Override
    public List<Movie> getMovies(List<Long> ids) throws Exception {
        String query = "SELECT * FROM DB_CINEMA.MOVIES WHERE ID " + buildListClause(ids);
        return execQuery(MovieHandler.handle(), query, ids.toArray());
    }

    @Override
    public List<Movie> getMoviesBy(String field, String value) throws Exception {
        String query = "SELECT * FROM DB_CINEMA.MOVIES WHERE " + field + " = ?";
        return execQuery(MovieHandler.handle(), query, value);
    }

    @Override
    public List<Movie> getMoviesSorted(String sort) throws Exception {
        String query = "SELECT * FROM DB_CINEMA.MOVIES ORDER BY " + sort + " DESC";
        return execQuery(MovieHandler.handle(), query);
    }

    @Override
    public List<Movie> searchMovies(String request) throws Exception {
        String query = "SELECT * FROM DB_CINEMA.MOVIES WHERE" +
                " director LIKE CONCAT('%', ?, '%') OR" +
                " title LIKE CONCAT('%', ?, '%') OR" +
                " description LIKE CONCAT('%', ?, '%') OR" +
                " slogan LIKE CONCAT('%', ?, '%') OR" +
                " studio LIKE CONCAT('%', ?, '%') OR" +
                " cast LIKE CONCAT('%', ?, '%')";

        return execQuery(MovieHandler.handle(), query, request, request, request, request, request, request);
    }

    @Override
    public void addMovie(Movie movie) throws Exception {
        execUpdate(
                "INSERT INTO DB_CINEMA.MOVIES (title, background, cover, director, description, year, slogan, cast, studio, rating) VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
                movie.getTitle(),
                movie.getBackground(),
                movie.getCover(),
                movie.getDirector(),
                movie.getDescription(),
                movie.getYear(),
                movie.getSlogan(),
                String.join(", ", movie.getCast()),
                movie.getStudio(),
                movie.getRating()
        );
    }

    @Override
    public int updateMovie(Movie movie) throws Exception {
        return execUpdate(
                "UPDATE DB_CINEMA.MOVIES SET title = \"?\", director = \"?\", description = \"?\", year = \"?\", slogan = \"?\", cast = \"?\", studio = \"?\" WHERE ID = ?",
                movie.getTitle(),
                movie.getDirector(),
                movie.getDescription(),
                movie.getYear(),
                movie.getSlogan(),
                String.join(", ", movie.getCast()),
                movie.getStudio(),
                movie.getId()
        );
    }

    @Override
    public int deleteMovie(long id) throws Exception {
        return execUpdate(
                "DELETE FROM DB_CINEMA.MOVIES WHERE ID = ?",
                id
        );
    }

    @Override
    public void likeMovie(Long movieId, Integer userId) throws Exception {
        execUpdate(
                "INSERT INTO DB_CINEMA.USERS_FAVOURED_MOVIES (user_id, movie_id) VALUES (?, ?)",
                userId,
                movieId
        );
    }

    @Override
    public void unlikeMovie(Long movieId, Integer userId) throws Exception {
        execUpdate(
                "DELETE FROM DB_CINEMA.USERS_FAVOURED_MOVIES WHERE user_id = ? AND movie_id = ?",
                userId,
                movieId
        );
    }

    @Override
    public void markAsWatchedMovie(Long movieId, Integer userId) throws Exception {
        execUpdate(
                "INSERT INTO DB_CINEMA.USERS_WATCHED_MOVIES (user_id, movie_id) VALUES (?, ?)",
                userId,
                movieId
        );
    }

    @Override
    public void unmarkAsWatchedMovie(Long movieId, Integer userId) throws Exception {
        execUpdate(
                "DELETE FROM DB_CINEMA.USERS_WATCHED_MOVIES WHERE user_id = ? AND movie_id = ?",
                userId,
                movieId
        );
    }

    @Override
    public void markToWatchLaterMovie(Long movieId, Integer userId) throws Exception {
        execUpdate(
                "INSERT INTO DB_CINEMA.USERS_WATCH_LATER_MOVIES (user_id, movie_id) VALUES (?, ?)",
                userId,
                movieId
        );
    }

    @Override
    public void unmarkToWatchLaterMovie(Long movieId, Integer userId) throws Exception {
        execUpdate(
                "DELETE FROM DB_CINEMA.USERS_WATCH_LATER_MOVIES WHERE user_id = ? AND movie_id = ?",
                userId,
                movieId
        );
    }

    private String buildListClause(List<Long> ids) {
        StringBuilder queryBuilder = new StringBuilder();
        queryBuilder.append("IN (");
        for (int i = 0; i < ids.size(); i++) {
            queryBuilder.append("?");
            if (i < ids.size() - 1) {
                queryBuilder.append(",");
            }
        }
        queryBuilder.append(")");

        return queryBuilder.toString();
    }

    public <T> T execQuery(ResultSetHandler<T> handler, String query, Object... parameters) throws SQLException {
        try (Connection connection = getConnection();
             PreparedStatement preparedStatement = connection.prepareStatement(query)
        ) {
            setStatementParameters(preparedStatement, parameters);
            ResultSet result = preparedStatement.executeQuery();
            return handler.handle(result);
        }
    }

    public int execUpdate(String query, Object... parameters) throws SQLException {
        try (Connection connection = getConnection();
             PreparedStatement preparedStatement = connection.prepareStatement(query)
        ) {
            setStatementParameters(preparedStatement, parameters);
            int result = preparedStatement.executeUpdate();
            return result;
        }
    }

    private static void setStatementParameters(PreparedStatement preparedStatement, Object... parameters) throws SQLException {
        for (int i = 0; i < parameters.length; i++) {
            preparedStatement.setObject(i + 1, parameters[i]);
        }
    }

}
