package com.fmist.guitarshop.service;

import com.fmist.guitarshop.model.Product;
import com.fmist.guitarshop.repository.ProductRepository;

import java.util.List;

public class ProductService {
    ProductRepository productRepository;

    public List<Product> getProducts() {
        return productRepository.findAll();
    }

}
