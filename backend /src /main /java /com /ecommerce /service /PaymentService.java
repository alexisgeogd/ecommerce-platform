@Service
public class PaymentService {
    public Payment processPayment(Order order, String paymentMethod) {
        Payment payment = new Payment();
        payment.setOrder(order);
        payment.setMethod(paymentMethod);
        payment.setTransactionId(UUID.randomUUID().toString());
        payment.setCompleted(true); // Προσομοίωση επιτυχούς πληρωμής
        return paymentRepository.save(payment);
    }
}
