package com.backend.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.backend.repository.UserEntity;
import com.backend.repository.UserRepository;

import io.micrometer.common.lang.NonNull;
import jakarta.persistence.EntityNotFoundException;

import com.backend.repository.Role;

@Service
public class UserService {
    
    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private UserRepository userRepository;

    public UserDetails userSignup(UserEntity userEntity) {
        userEntity.setPassword(passwordEncoder.encode(userEntity.getPassword()));
        userEntity.setRole(Role.USER);
        userRepository.save(userEntity);
        return userEntity;
    }

    public UserEntity userLogin(UserEntity userEntity) {
        return userRepository.findByUsername(userEntity.getUsername());
    }

    public void editUserProfile(UserEntity updatedUser, Authentication authentication) {
        try {
            UserEntity dbUserEntity = userRepository.findByUsername(authentication.getName());
            if (dbUserEntity != null) {
                if (!updatedUser.getUsername().isEmpty()) {
                    dbUserEntity.setUsername(updatedUser.getUsername());
                }
                if (!updatedUser.getPassword().isEmpty()) {
                    dbUserEntity.setPassword(passwordEncoder.encode(updatedUser.getPassword()));
                }
                if (!updatedUser.getEmail().isEmpty()) {
                    dbUserEntity.setEmail(updatedUser.getEmail());
                }
                userRepository.save(dbUserEntity);
            }
        } catch (EntityNotFoundException e) {
            e.printStackTrace();
            System.out.println(e.getLocalizedMessage());
        }
    }

    public void deleteUserProfile(Authentication authentication) {
        try {
            UserEntity userEntity = userRepository.findByUsername(authentication.getName());
            userRepository.deleteById(userEntity.getUserid());
        } catch (Exception exception) {
            System.out.println(exception.getLocalizedMessage());
        }
    }
}
