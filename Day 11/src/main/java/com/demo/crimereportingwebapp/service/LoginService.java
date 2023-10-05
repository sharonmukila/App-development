package com.demo.crimereportingwebapp.service;

import java.util.List;

import com.demo.crimereportingwebapp.dto.request.LoginRequest;
import com.demo.crimereportingwebapp.dto.response.LoginResponse;

public interface LoginService {

    List<LoginResponse> getAllUsers();

    LoginResponse getUser(Long uid);

    LoginResponse updateUser(LoginRequest request, Long uid);

    boolean deleteProduct(Long uid);

}
