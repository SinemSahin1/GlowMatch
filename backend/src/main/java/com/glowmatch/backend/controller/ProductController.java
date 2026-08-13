
package com.glowmatch.backend.controller;

import com.glowmatch.backend.model.Product;
import com.glowmatch.backend.service.ProductService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/products")
@CrossOrigin(origins = "http://localhost:5173")
public class ProductController {

    private final ProductService productService;

    public ProductController(ProductService productService) {
        this.productService = productService;
    }

    @GetMapping
    public List<Product> getAllProducts() {
        return productService.getAllProducts();
    }

    @PostMapping
    public Product addProduct(@RequestBody Product product) {
        return productService.saveProduct(product);

    }

    @GetMapping("/{id}")
    public Product getProductById(@PathVariable Long id) {
        return productService.getProductById(id);
    }

    @DeleteMapping("/{id}")
    public void deleteProduct(@PathVariable Long id) {
        productService.deleteProduct(id);

    }

    @PutMapping("/{id}")
    public Product updateProduct(
            @PathVariable Long id,
            @RequestBody Product product) {

        return productService.updateProduct(id, product);
    }

    @GetMapping("/skin-type/{skinType}")
    public List<Product> getProductsBySkinType(@PathVariable String skinType) {
        return productService.getProductsBySkinType(skinType);
    }

    @GetMapping("/makeup")
    public List<Product> getMakeupRecommendations(
            @RequestParam String product,
            @RequestParam String undertone,
            @RequestParam String finish,
            @RequestParam Double budget) {

        return productService.getMakeupRecommendations(
                product,
                undertone,
                finish,
                budget);

    }

    @GetMapping("/fragrance")
    public List<Product> handleFragranceRecommendations(
            @RequestParam String gender,
            @RequestParam String fragranceFamily,
            @RequestParam String occasion,
            @RequestParam String intensity,
            @RequestParam Double budget) {

        return productService.getFragranceRecommendations(
                gender,
                fragranceFamily,
                occasion,
                intensity,
                budget);

    }

    @GetMapping("/haircare")
    public List<Product> getHairRecommendations(
            @RequestParam String hairConcern,
            @RequestParam Double budget) {

        return productService.getHairRecommendations(
                hairConcern,
                budget);
    }

}