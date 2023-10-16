package com.demo.crimereportingwebapp.service.impl;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.demo.crimereportingwebapp.dto.request.LoginRequest;
import com.demo.crimereportingwebapp.dto.response.LoginResponse;
import com.demo.crimereportingwebapp.model.Login;
import com.demo.crimereportingwebapp.model.enumerate.Role;
import com.demo.crimereportingwebapp.repository.LoginRepository;

import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;

@Service
@Transactional
@RequiredArgsConstructor
public class  LoginServiceImpl {

    private final LoginRepository userRepository;
    

  
    public List<LoginResponse> getAllUsers() {
        List<Login> userList = userRepository.findAll();
        return userList.stream()
                .filter(user -> !user.getRole().equals(Role.ADMIN))
                .map(this::mapUserToUserResponse)
                .collect(Collectors.toList());
    }

    public LoginResponse getUser(Long uid) {
        Login user = userRepository.findByUid(uid);
        return mapUserToUserResponse(user);
    }

    
    public LoginResponse updateUser(LoginRequest request, Long uid) {
        Login user = userRepository.findByUid(uid);
        Login newUser = new Login();
        if (user != null) {
            newUser = Login.builder()
                    .name(request.getName())
                    .email(request.getEmail())
                    .password(request.getPassword())
                    .role(request.getRole())
                    .isEnabled(request.getIsEnabled())
                    .build();
            userRepository.save(newUser);
        }
        return mapUserToUserResponse(newUser);
    }

    

    private LoginResponse mapUserToUserResponse(Login user) {
        return LoginResponse.builder()
                .uid(user.getUid())
                .name(user.getName())
                .email(user.getEmail())
                .role(user.getRole())
                .isEnabled(user.getIsEnabled())
                .build();
    }

}
