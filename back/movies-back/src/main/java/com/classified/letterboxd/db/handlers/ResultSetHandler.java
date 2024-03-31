package com.classified.letterboxd.db.handlers;

import java.sql.ResultSet;
import java.sql.SQLException;

@FunctionalInterface
public interface ResultSetHandler<T> {
    T handle(ResultSet resultSet) throws SQLException;
}
