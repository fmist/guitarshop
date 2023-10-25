package com.fmist.guitarshop.repository;

import com.fmist.guitarshop.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductRepository extends JpaRepository<Product, Long> {
}
