@Entity
public class Payment {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @OneToOne
    private Order order;

    private String method; // "CREDIT_CARD", "PAYPAL"
    private String transactionId;
    private boolean isCompleted;
    // Getters & Setters
}
