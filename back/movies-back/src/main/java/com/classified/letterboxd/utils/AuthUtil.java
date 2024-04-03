package com.classified.letterboxd.utils;

import com.classified.letterboxd.db.dao.UserDao;
import com.classified.letterboxd.models.User;
import com.fasterxml.jackson.databind.ObjectMapper;
import io.jsonwebtoken.Claims;
import jakarta.annotation.Nullable;
import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.Date;

@Component
public class AuthUtil implements AppLogging {

    @Autowired
    private UserDao users;
    @Autowired
    private ObjectMapper objectMapper;
    @Autowired
    private JwtUtil jwtUtil;

    public User userByCookie(HttpServletRequest request) throws Exception {
        Cookie[] cookies = request.getCookies();
        String jwtToken = null;
        User user = null;

        if (cookies != null) {
            for (Cookie cookie : cookies) {
                if ("AUTH".equals(cookie.getName())) {
                    jwtToken = cookie.getValue();
                    break;
                }
            }
        }

        if (jwtToken != null) {
            try {
                Claims token = jwtUtil.parseToken(jwtToken);
                String username = token.getSubject();
                if (token.getExpiration().after(new Date())) {
                    user = users.getUser(username);
                }
            } catch (Exception e) {
                log.info("Failed to get user by cookie: {}", e.getMessage());
            }
        }

        return user;
    }

    @Nullable
    public User getUserByToken(String token) throws Exception {
        User user = null;
        if (token != null) {
            try {
                Claims parsedToken = jwtUtil.parseToken(token);
                String username = parsedToken.getSubject();
                if (parsedToken.getExpiration().after(new Date())) {
                    user = users.getUser(username);
                }
            } catch (Exception e) {
                log.info("Failed to get user by token: {}", e.getMessage());
            }
        }

        return user;

    }

}
