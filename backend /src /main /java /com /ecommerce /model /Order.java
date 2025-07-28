@Entity
public class Order {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @ManyToOne
    private User user;
    
    private double totalPrice;
    private String status; // "PENDING", "COMPLETED", "CANCELLED"
    
    // Getters & Setters
}
