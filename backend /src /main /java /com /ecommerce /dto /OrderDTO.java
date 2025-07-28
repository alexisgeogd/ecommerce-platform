package com.ecommerce.dto;

import java.util.List;

public class OrderDTO {
    private Long id;
    private Long userId;
    private double totalPrice;
    private String status;
    private List<OrderItemDTO> items;
}
