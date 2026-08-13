package com.glowmatch.backend.service;

import com.glowmatch.backend.model.User;
import com.glowmatch.backend.repository.UserRepository;
import org.springframework.stereotype.Service;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

@Service
public class AuthService {

    private final UserRepository userRepository;
    private final BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();

    public AuthService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public User register(User user) {

        String hashedPassword = passwordEncoder.encode(user.getPassword());

        user.setPassword(hashedPassword);

        return userRepository.save(user);
    }

    public User login(String email, String password) {

        User user = userRepository
                .findByEmail(email)
                .orElse(null);

        if (user == null) {
            return null;
        }

        boolean passwordMatches = passwordEncoder.matches(
                password,
                user.getPassword());

        if (!passwordMatches) {
            return null;
        }

        return user;
    }
}
