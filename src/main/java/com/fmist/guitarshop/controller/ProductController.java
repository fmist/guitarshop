package com.fmist.guitarshop.controller;

import com.fmist.guitarshop.model.Product;
import com.fmist.guitarshop.repository.ProductRepository;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;
import java.util.Optional;
@CrossOrigin(origins = { "http://localhost:3000", "http://localhost:8083" })
@RestController
public class ProductController {
    ProductRepository productRepository;

    public ProductController(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    @GetMapping("/")
    private List<Product> getProducts() {
        return productRepository.findAll();
    }

    @GetMapping("/{id}")
    private Optional<Product> getProductById(@PathVariable String id) {
        return productRepository.findById(id);
    }

    @PostMapping("/add")
    private ResponseEntity<Product> addProduct(@RequestBody Product product) throws URISyntaxException {
        Product savedProduct = productRepository.save(product);
        return ResponseEntity.created(new URI("/" + savedProduct.getId()))
                .body(savedProduct);
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
