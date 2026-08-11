package com.glowmatch.backend.repository;

import com.glowmatch.backend.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ProductRepository extends JpaRepository<Product, Long> {

    List<Product> findBySkinType(String skinType);

    List<Product> findByCategoryAndUndertoneAndFinishAndPriceLessThanEqual(
            String category,
            String undertone,
            String finish,
            Double price);

    List<Product> findByCategoryAndGenderAndFragranceFamilyAndPriceLessThanEqual(
            String category,
            String gender,
            String fragranceFamily,
            Double price);

    List<Product> findByCategoryAndFragranceFamilyAndPriceLessThanEqual(
            String category,
            String fragranceFamily,
            Double price);
}