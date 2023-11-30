package com.fmist.guitarshop.controller;

import com.fmist.guitarshop.model.Product;
import com.fmist.guitarshop.repository.ProductRepository;
import com.fmist.guitarshop.service.ProductService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;

@CrossOrigin(origins = {"http://localhost:3000", "http://localhost:8083"})
@RestController
public class ProductController {
    ProductRepository productRepository;
    ProductService productService;

    public ProductController(ProductService productService) {
        this.productService = productService;
    }

    @GetMapping("/")
    private List<Product> getProducts() {
        return productService.listAllProducts();
    }

    @GetMapping("/{id}")
    private ResponseEntity<?> getProductById(@PathVariable Long id) {
        return productService.getProductById(id);
    }

    @PostMapping("/add")
    private ResponseEntity<Product> addProduct(@RequestBody Product product) throws URISyntaxException {
        Product savedProduct = productService.saveProduct(product);
        return ResponseEntity.created(new URI("/" + savedProduct.getId()))
                .body(savedProduct);
    }

    @PutMapping("/edit/{id}")
    private Product updateProductById(@PathVariable Long id, @RequestBody Product product) {
        return productService.editProduct(id, product);
    }

    @DeleteMapping("/delete/{id}")
    private ResponseEntity<?> deleteProduct(@PathVariable Long id) {
        return productService.deleteProduct(id);
    }
}
