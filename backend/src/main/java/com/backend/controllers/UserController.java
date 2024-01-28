package com.backend.controllers;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import com.backend.repository.UserEntity;


@Controller
public class UserController {
    
    @PostMapping("/api/user/signup")
    public ResponseEntity<?> postMethodName(@RequestBody UserEntity user) {
        //TODO: process POST request
        
        return new ResponseEntity<>("User account has been created", HttpStatus.OK);
    }
}
