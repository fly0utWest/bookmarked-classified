package com.classified.letterboxd.utils;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.SignatureException;
import io.jsonwebtoken.security.Keys;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Component;

import java.security.Key;
import java.util.Date;

@Component
public class JwtUtil {
    private String SECRET_KEY = "my_super_secret_key_which_should_be_very_loooooooooooooong_for_HS512";
    private Key key = Keys.hmacShaKeyFor(SECRET_KEY.getBytes());
    private int jwtExpirationInMs = 3600000; // 1 hour

    public String generateToken(UserDetails userDetails) {
        Date now = new Date();
        Date expiryDate = new Date(now.getTime() + jwtExpirationInMs);
        String token = Jwts.builder()
                .setSubject(userDetails.getUsername())
                .setIssuedAt(new Date(System.currentTimeMillis()))
                .setExpiration(expiryDate)
                .signWith(key, SignatureAlgorithm.HS512)
                .compact();
        return token;
    }

    public Claims parseToken(String jwtToken) {
        try {
            return Jwts.parser().setSigningKey(key).build().parseClaimsJws(jwtToken).getBody();
        } catch (SignatureException ex) {
            throw new RuntimeException("Invalid JWT signature");
        } catch (Exception e) {
            throw new RuntimeException("Invalid JWT token");
        }
    }
}
