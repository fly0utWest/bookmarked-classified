package com.classified.letterboxd.security;

import java.util.Arrays;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletResponse;

@Configuration
@EnableWebSecurity
public class SecurityConfig {

    @Bean
    public BCryptPasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    @Autowired
    private JwtRequestFilter jwtRequestFilter;

    @Bean
    public CorsConfigurationSource corsConfig() {
        CorsConfiguration config = new CorsConfiguration();
        config.setAllowCredentials(true);
        config.setAllowedMethods(Arrays.asList("GET", "POST", "PUT", "DELETE"));
        config.setAllowedHeaders(Arrays.asList("Authorization", "x-auth", "Cache-Control", "Content-Type")); // Headers allowed in the actual request
        config.setAllowedOrigins(Arrays.asList("http://localhost:3000", "http://localhost:80", "http://localhost", "http://193-168-173-18.cloud-xip.com:3000", "http://193-168-173-18.cloud-xip.com", "http://193-168-173-18.cloud-xip.com:80"));
        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", config);
        return source;
    }

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {

        http
            .authorizeHttpRequests(authorizeRequests -> authorizeRequests
                    .anyRequest().permitAll())
            .cors(c -> c.configurationSource(corsConfig()))
            .csrf(AbstractHttpConfigurer::disable)
            .logout(logout -> logout.permitAll()
                .logoutSuccessHandler((request, response, authentication) -> {
                    Cookie cookie = new Cookie("AUTH", null);
                    cookie.setPath("/");
                    cookie.setHttpOnly(true);
                    cookie.setMaxAge(0); // Set cookie to expire immediately
                    response.addCookie(cookie);
                    response.setStatus(HttpServletResponse.SC_OK);
                }));

        return http.build();
    }

    @Bean
    public AuthenticationManager authenticationManager(AuthenticationConfiguration authConfig) throws Exception {
        return authConfig.getAuthenticationManager();
    }
}