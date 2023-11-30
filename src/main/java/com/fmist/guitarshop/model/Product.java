package com.fmist.guitarshop.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

@Entity
public class Product {

    @Id()
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Size(min = 3)
    private String name;

    @NotBlank
    private String description;

    private LocalDateTime timeCreated;

    public Long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getDescription() {
        return description;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    @PrePersist
    @PreUpdate
    public void getDateTimeCreated() {
        timeCreated = LocalDateTime.now();
    }

    public String getTime() {
        return DateTimeFormatter.ofPattern("dd/MM/yy HH:mm:ss").format(timeCreated);
    }
}
