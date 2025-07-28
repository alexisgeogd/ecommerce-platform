@RestController
@RequestMapping("/api/admin")
@PreAuthorize("hasRole('ADMIN')") // Μόνο ADMINs έχουν πρόσβαση
public class AdminController {
    @Autowired
    private ProductService productService;

    @PostMapping("/products")
    public Product addProduct(@RequestBody Product product) {
        return productService.createProduct(product);
    }

    @DeleteMapping("/products/{id}")
    public void deleteProduct(@PathVariable Long id) {
        productService.deleteProduct(id);
    }
}
