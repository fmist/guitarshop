package com.fmist.guitarshop.model;

import jakarta.persistence.*;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

@Entity
public class Product {

    @Id()
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private String name;

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
