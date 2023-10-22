package com.fmist.guitarshop.repository;

import com.fmist.guitarshop.model.Product;
import org.springframework.data.repository.CrudRepository;

public interface ProductRepository extends CrudRepository<Product, String> {
}
