package com.ecommerce.controller;

import com.ecommerce.service.AuthService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.web.servlet.MockMvc;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@SpringBootTest
@AutoConfigureMockMvc
public class AuthControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private AuthService authService;

    @Test
    public void testLogin() throws Exception {
        when(authService.login(any())).thenReturn("fake-jwt-token");

        mockMvc.perform(post("/api/auth/login")
                .contentType("application/json")
                .content("{\"email\":\"test@example.com\",\"password\":\"password\"}"))
                .andExpect(status().isOk());
    }
}
