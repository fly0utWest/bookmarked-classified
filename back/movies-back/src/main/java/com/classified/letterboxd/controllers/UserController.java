package com.classified.letterboxd.controllers;

import com.classified.letterboxd.db.dao.UserDao;
import com.classified.letterboxd.models.User;
import com.classified.letterboxd.models.exceptions.NoMovieException;
import com.classified.letterboxd.utils.AppLogging;
import com.classified.letterboxd.utils.AuthUtil;
import com.classified.letterboxd.utils.JwtUtil;
import com.fasterxml.jackson.databind.ObjectMapper;
import io.jsonwebtoken.Claims;
import jakarta.annotation.Nullable;
import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Date;

import static org.springframework.http.HttpStatus.*;

@RestController
public class UserController implements AppLogging {
    @Autowired
    UserDao users;

    @Autowired
    private ObjectMapper objectMapper;

    @Autowired
    private AuthUtil authUtil;

    @GetMapping("users/{login}")
    public ResponseEntity<String> getUser(@PathVariable String login) throws Exception {
        try {
            User user = users.getUser(login);
            if (user != null) user.setPassword(""); else {throw new Exception("No user: " + login);}
            return ResponseEntity.status(OK).body(objectMapper.writeValueAsString(users.getUser(login)));
        } catch (NoMovieException e) {
            return ResponseEntity.status(NO_CONTENT).body("");
        }
    }

    @RequestMapping("/user")
    public String userByCookie(HttpServletResponse response, @RequestHeader("x-auth") String token) throws Exception {
        User user = authUtil.getUserByToken(token);

        if (user != null) {
            user.setPassword("");
            response.setStatus(OK.value());
            return (objectMapper.writeValueAsString(user));
        } else {
            response.setStatus(UNAUTHORIZED.value());
            return "Auth failed";
        }
    }

}
