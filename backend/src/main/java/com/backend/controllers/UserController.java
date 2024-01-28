package com.backend.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.backend.repository.UserEntity;
import com.backend.services.JwtService;
import com.backend.services.UserService;



@RestController
@RequestMapping("/api/user")
public class UserController {

    @Autowired
    private JwtService jwtService;

    @Autowired
    private UserService userService;
    
    @PostMapping("/signup")
    public ResponseEntity<?> postMethodName(@RequestBody UserEntity user) {
        UserDetails userDetails = userService.userSignup(user);
        if (userDetails != null) {
            return new ResponseEntity<>("Signup successful", HttpStatus.CREATED);
        } else {
            return new ResponseEntity<>("Something went wrong", HttpStatus.INTERNAL_SERVER_ERROR);
        }
        
    }

    @PostMapping("/login")
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

    @PutMapping("/edit-profile")
    public ResponseEntity<?> editUserProfile(@RequestBody UserEntity updatedUser, Authentication authentication)
            throws Exception {
        try {
            userService.editUserProfile(updatedUser, authentication);
            return new ResponseEntity<String>("Profile edited", HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>("Could not edit profile", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }


    @DeleteMapping("/delete-profile")
    public ResponseEntity<?> deleteUserProfile(Authentication authentication) throws Exception {
        try {
            userService.deleteUserProfile(authentication);
            return new ResponseEntity<>("Profile Deleted", HttpStatus.OK);
        } catch (Exception exception) {
            return new ResponseEntity<>("Could not delete profile", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

}
