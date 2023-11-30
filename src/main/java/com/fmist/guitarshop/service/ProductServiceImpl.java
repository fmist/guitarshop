package com.fmist.guitarshop.service;

import com.fmist.guitarshop.error.CustomHandler;
import com.fmist.guitarshop.model.Product;
import com.fmist.guitarshop.repository.ProductRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductServiceImpl implements ProductService {
    private final ProductRepository productRepository;

    public ProductServiceImpl(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    @Override
    public List<Product> listAllProducts() {
        return productRepository.findAll();
    }

    @Override
    public ResponseEntity<?> getProductById(Long id) {
            try {
                Product product = productRepository.findById(id).orElseThrow();
                return ResponseEntity.ok().body(product);
            } catch (Exception e) {
                return new CustomHandler().handleProductNotFound(id);
            }
    }


    @Override
    public Product saveProduct(Product product) {
        return productRepository.save(product);
    }

    @Override
    public Product editProduct(Long id, Product product) {
        Product updatedProduct = productRepository.findById(id).orElseThrow();
        updatedProduct.setId(id);
        updatedProduct.setName(product.getName());
        updatedProduct.setDescription(product.getDescription());
        return productRepository.save(updatedProduct);
        }

    @Override
    public ResponseEntity<?> deleteProduct(Long id) {
        if (productRepository.existsById(id)) {
            productRepository.deleteById(id);
            return ResponseEntity.ok().body("Product with id " + id + " deleted");
        } else {
            return new CustomHandler().handleProductNotFound(id);
        }
    }
}
