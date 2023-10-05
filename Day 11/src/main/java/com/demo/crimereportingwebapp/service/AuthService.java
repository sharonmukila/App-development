package com.demo.crimereportingwebapp.service;

import com.demo.crimereportingwebapp.dto.request.AuthenticationRequest;
import com.demo.crimereportingwebapp.dto.request.RegisterRequest;
import com.demo.crimereportingwebapp.dto.response.AuthenticationResponse;

public interface AuthService {
    boolean userRegistration(RegisterRequest request);

    AuthenticationResponse userAuthentication(AuthenticationRequest request);
}
