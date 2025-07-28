@RestController
@RequestMapping("/api/auth")
public class AuthController {
    @PostMapping("/login")
    public ResponseEntity<String> login(@RequestBody LoginRequest request) {
        // Υλοποίηση JWT
        return ResponseEntity.ok("Login successful!");
    }
}
