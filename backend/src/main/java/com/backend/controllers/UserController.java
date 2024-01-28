package com.backend.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import com.backend.repository.UserEntity;
import com.backend.services.JwtService;
import com.backend.services.UserService;



@Controller
public class UserController {

    @Autowired
    private JwtService jwtService;

    @Autowired
    private UserService userService;
    
    @PostMapping("/api/user/signup")
    public ResponseEntity<?> postMethodName(@RequestBody UserEntity user) {
        UserDetails userDetails = userService.userSignup(user);
        if (userDetails != null) {
            return new ResponseEntity<>("Signup successful", HttpStatus.CREATED);
        } else {
            return new ResponseEntity<>("Something went wrong", HttpStatus.INTERNAL_SERVER_ERROR);
        }
        
    }

    @PostMapping("/api/user/login")
    public ResponseEntity<?> getMethodName(@RequestBody UserEntity user) throws Exception {
        try {
            UserEntity userEntity = userService.userLogin(user);
            if (userEntity == null) {
                throw new UsernameNotFoundException("User not found");
            }
            String token = jwtService.generateToken(user.getUsername());
            return ResponseEntity.ok(token);
        } catch (AuthenticationException e) {
            throw new BadCredentialsException("Invalid username or password", e);
        }
    }
    
}
