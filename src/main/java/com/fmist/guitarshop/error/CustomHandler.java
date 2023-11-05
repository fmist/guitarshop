package com.fmist.guitarshop.error;

import lombok.AllArgsConstructor;
import lombok.Data;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

public class CustomHandler extends ResponseEntityExceptionHandler {

    @ExceptionHandler(ProductNotFoundException.class)
    public ResponseEntity<?> handleProductNotFound(Long id) {
        return new ResponseEntity<>(new ProductNotFound("Product with id " + id + " not found"), HttpStatus.NOT_FOUND);
    }

    @Data
    @AllArgsConstructor
    private static class ProductNotFound {
        private String message;
    }
}
