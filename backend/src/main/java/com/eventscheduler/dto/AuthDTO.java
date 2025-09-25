package com.eventscheduler.dto;

import lombok.Data;

@Data
public class LoginRequest {
    private String username;
    private String password;
}

@Data
public class LoginResponse {
    private String token;
    private String username;
}