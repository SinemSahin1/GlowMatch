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

        return productRepository.save(product);

    }
}