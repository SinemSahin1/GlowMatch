package com.glowmatch.backend.controller;

import com.glowmatch.backend.model.Favorite;
import com.glowmatch.backend.service.FavoriteService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/favorites")
@CrossOrigin(origins = "http://localhost:5173")
public class FavoriteController {

    private final FavoriteService favoriteService;

    public FavoriteController(FavoriteService favoriteService) {
        this.favoriteService = favoriteService;
    }

    @PostMapping
    public Favorite addFavorite(
            @RequestParam Long userId,
            @RequestParam Long productId) {

        return favoriteService.addFavorite(userId, productId);
    }

    @GetMapping("/{userId}")
    public List<Favorite> getFavorites(
            @PathVariable Long userId) {

        return favoriteService.getUserFavorites(userId);
    }

    @DeleteMapping
    public void removeFavorite(
            @RequestParam Long userId,
            @RequestParam Long productId) {

        favoriteService.removeFavorite(userId, productId);
    }
}