package com.fmist.guitarshop.service;

import com.fmist.guitarshop.model.Product;
import org.springframework.http.ResponseEntity;

import java.util.List;

public interface ProductService {
    List<Product> listAllProducts();
    ResponseEntity<?> getProductById(Long id);
    Product saveProduct(Product product);

    Product editProduct(Long id, Product product);

    ResponseEntity<?> deleteProduct(Long id);
}
