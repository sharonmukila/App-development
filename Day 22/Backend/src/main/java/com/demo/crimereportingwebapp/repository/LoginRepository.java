package com.demo.crimereportingwebapp.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.demo.crimereportingwebapp.model.Login;

public interface LoginRepository extends JpaRepository<Login, Long> {

    Optional<Login> findByEmail(String username);

    Login findByUid(Long uid);

    void deleteByUid(Long uid);

}
