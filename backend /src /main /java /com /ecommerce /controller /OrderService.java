public Order checkout(Long userId) {
    Cart cart = cartRepository.findByUserId(userId).orElseThrow();
    Order order = new Order();
    order.setUser(cart.getUser());
    order.setTotalPrice(cart.getTotalPrice());
    order.setStatus("PENDING");
    
    // Μεταφορά items από Cart -> Order
    List<OrderItem> orderItems = cart.getItems().stream()
        .map(cartItem -> new OrderItem(order, cartItem.getProduct(), cartItem.getQuantity()))
        .collect(Collectors.toList());
    
    order.setItems(orderItems);
    cartRepository.delete(cart); // Αδειάζουμε το καλάθι
    return orderRepository.save(order);
}
