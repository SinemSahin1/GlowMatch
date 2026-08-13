package com.glowmatch.backend.service;

import com.glowmatch.backend.model.Product;
import com.glowmatch.backend.repository.ProductRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductService {

    private final ProductRepository productRepository;

    public ProductService(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    public List<Product> getAllProducts() {
        return productRepository.findAll();
    }

    public Product saveProduct(Product product) {
        return productRepository.save(product);
    }

    public Product getProductById(Long id) {
        return productRepository.findById(id).orElse(null);
    }

    public void deleteProduct(Long id) {
        productRepository.deleteById(id);
    }

    public List<Product> getProductsBySkinType(String skinType) {
        return productRepository.findBySkinType(skinType);
    }

    public Product updateProduct(Long id, Product newProduct) {

        Product product = productRepository.findById(id).orElse(null);

        if (product == null) {
            return null;
        }

        product.setBrand(newProduct.getBrand());
        product.setName(newProduct.getName());
        product.setCategory(newProduct.getCategory());
        product.setPrice(newProduct.getPrice());
        product.setImage(newProduct.getImage());

        product.setSkinType(newProduct.getSkinType());
        product.setUndertone(newProduct.getUndertone());
        product.setFinish(newProduct.getFinish());

        product.setGender(newProduct.getGender());
        product.setFragranceFamily(newProduct.getFragranceFamily());
        product.setOccasion(newProduct.getOccasion());
        product.setIntensity(newProduct.getIntensity());

        product.setHairConcern(newProduct.getHairConcern());

        return productRepository.save(product);

    }

    public List<Product> getMakeupRecommendations(
            String product,
            String undertone,
            String finish,
            Double budget) {

        return productRepository.findByCategoryAndUndertoneAndFinishAndPriceLessThanEqual(
                product,
                undertone,
                finish,
                budget

        );
    }

    public List<Product> getFragranceRecommendations(
            String gender,
            String fragranceFamily,
            String occasion,
            String intensity,
            Double budget) {

        if (gender.equals("No Preference")) {
            return productRepository
                    .findByCategoryAndFragranceFamilyAndPriceLessThanEqual(
                            "Fragrance",
                            fragranceFamily,
                            budget);
        }

        return productRepository
                .findByCategoryAndGenderAndFragranceFamilyAndPriceLessThanEqual(
                        "Fragrance",
                        gender,
                        fragranceFamily,
                        budget);

    }

    public List<Product> getHairRecommendations(
            String hairConcern,
            Double budget) {

        return productRepository
                .findByCategoryAndHairConcernAndPriceLessThanEqual(
                        "Haircare",
                        hairConcern,
                        budget);
    }

}
