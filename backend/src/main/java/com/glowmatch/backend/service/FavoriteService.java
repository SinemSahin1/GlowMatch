package com.glowmatch.backend.service;

import com.glowmatch.backend.model.Favorite;
import com.glowmatch.backend.model.Product;
import com.glowmatch.backend.model.User;
import com.glowmatch.backend.repository.FavoriteRepository;
import com.glowmatch.backend.repository.ProductRepository;
import com.glowmatch.backend.repository.UserRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class FavoriteService {

    private final FavoriteRepository favoriteRepository;
    private final UserRepository userRepository;
    private final ProductRepository productRepository;

    public FavoriteService(
            FavoriteRepository favoriteRepository,
            UserRepository userRepository,
            ProductRepository productRepository) {

        this.favoriteRepository = favoriteRepository;
        this.userRepository = userRepository;
        this.productRepository = productRepository;
    }

    public Favorite addFavorite(Long userId, Long productId) {

        User user = userRepository.findById(userId).orElse(null);
        Product product = productRepository.findById(productId).orElse(null);

        if (user == null || product == null) {
            return null;
        }

        if (favoriteRepository
                .findByUserIdAndProductId(userId, productId)
                .isPresent()) {

            return null;
        }

        Favorite favorite = new Favorite(user, product);

        return favoriteRepository.save(favorite);
    }

    public List<Favorite> getUserFavorites(Long userId) {
        return favoriteRepository.findByUserId(userId);
    }

    @Transactional
    public void removeFavorite(Long userId, Long productId) {
        favoriteRepository.deleteByUserIdAndProductId(
                userId,
                productId);
    }
}