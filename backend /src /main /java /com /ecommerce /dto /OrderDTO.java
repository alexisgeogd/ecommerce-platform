package com.ecommerce.dto;

import java.util.List;

public class OrderDTO {
    private Long id;
    private Long userId;
    private double totalPrice;
    private String status;
    private List<OrderItemDTO> items;

    // Getters & Setters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }
    public String getName() { return name; }
    public void setName(String name) { this.name = name; }
    public double getPrice() { return price; }
    public void setPrice(double price) { this.price = price; }
    public int getStock() { return stock; }
    public void setStock(int stock) { this.stock = stock; }
}
