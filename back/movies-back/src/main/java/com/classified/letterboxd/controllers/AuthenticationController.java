package com.classified.letterboxd.controllers;

import com.classified.letterboxd.db.dao.UserDao;
import com.classified.letterboxd.models.Movie;
import com.classified.letterboxd.models.User;
import com.classified.letterboxd.utils.JwtUtil;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import io.jsonwebtoken.Jwt;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.http.Cookie;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;


@RestController
public class AuthenticationController {

    @Autowired
    private final AuthenticationManager authenticationManager;
    @Autowired
    private final JwtUtil jwtUtil;
    @Autowired
    private ObjectMapper objectMapper;
    @Autowired
    UserDao users;

    @Autowired
    public BCryptPasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    public AuthenticationController(AuthenticationManager authenticationManager, JwtUtil jwtUtil) {
        this.authenticationManager = authenticationManager;
        this.jwtUtil = jwtUtil;
    }

    @PostMapping("/auth")
    public String authenticate(@RequestBody String body, HttpServletRequest request, HttpServletResponse response) throws JsonProcessingException {

        User user = objectMapper.readValue(body, User.class);

        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(user.getLogin(), user.getPassword()));

        SecurityContextHolder.getContext().setAuthentication(authentication);
        String jwt = jwtUtil.generateToken((UserDetails) authentication.getPrincipal());
        return jwt;
    }

    @GetMapping("/signout")
    public String logout(HttpServletRequest request, HttpServletResponse response) {
        Cookie cookie = new Cookie("AUTH", null);
        cookie.setPath("/");
        cookie.setHttpOnly(true);
        cookie.setMaxAge(0); // Set cookie to expire immediately
        response.addCookie(cookie);
        return "Logged out successfully";
    }

    @PostMapping("/signup")
    public String signup(@RequestBody String body, HttpServletResponse response) throws JsonProcessingException {
        User user = objectMapper.readValue(body, User.class);

        String hashedPass = passwordEncoder().encode(user.getPassword());
        user.setPassword(hashedPass);
        user.setRole("USER");

        User existentUser = users.getUser(user.getLogin());

        if (existentUser == null) {
            users.createUser(user);
            return "User has bee created";
        } else {
            response.setStatus(HttpServletResponse.SC_BAD_REQUEST);
            return "User already exists!";
        }
    }
}
