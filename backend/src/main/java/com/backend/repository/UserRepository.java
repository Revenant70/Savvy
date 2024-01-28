package com.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@EnableJpaRepositories
public interface UserRepository extends JpaRepository<UserEntity, Long>{
    UserEntity findByUsername(String username);
    UserEntity findByUserid(Long userid);
}