package com.fmist.guitarshop.controller;

import com.fmist.guitarshop.model.Product;
import com.fmist.guitarshop.repository.ProductRepository;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
public class ProductController {
    ProductRepository productRepository;

    public ProductController(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    @GetMapping("/")
    private Iterable<Product> getProducts() {
        return productRepository.findAll();
    }

    @GetMapping("/{id}")
    private Optional<Product> getProductById(@PathVariable String id) {
        return productRepository.findById(id);
    }

    @PostMapping("/add")
    private Product addProduct(@RequestBody Product product) {
        return productRepository.save(product);
    }

    @PutMapping("/edit/{id}")
    private ResponseEntity<Product> updateProductById(@PathVariable String id, @RequestBody Product product) {
        return (productRepository.existsById(id))
                ? new ResponseEntity<>(productRepository.save(product), HttpStatus.OK)
                : new ResponseEntity<>(productRepository.save(product), HttpStatus.CREATED);
    }

    @DeleteMapping("/delete/{id}")
    private void deleteProduct(@PathVariable String id) {
        productRepository.deleteById(id);
    }
}
