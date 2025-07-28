# E-Commerce Platform API Documentation

## Authentication

### Login
```http
POST /api/auth/login
```
**Request Body**:
```json
{
  "email": "user@example.com",
  "password": "yourpassword"
}
```
**Success Response**:
```json
{
  "token": "jwt.token.here",
  "user": {
    "id": 1,
    "email": "user@example.com",
    "role": "USER"
  }
}
```

### Register
```http
POST /api/auth/register
```
**Request Body**:
```json
{
  "name": "John Doe",
  "email": "user@example.com",
  "password": "yourpassword"
}
```

---

## Products

### Get All Products
```http
GET /api/products
```
**Query Params**:
- `category` (optional)
- `minPrice` (optional)
- `maxPrice` (optional)

**Response**:
```json
[
  {
    "id": 1,
    "name": "Wireless Headphones",
    "price": 99.99,
    "category": "Electronics"
  }
]
```

### Get Single Product
```http
GET /api/products/{id}
```

---

## Cart

### Add to Cart
```http
POST /api/cart
```
**Request Body**:
```json
{
  "productId": 1,
  "quantity": 2
}
```

### Get Cart
```http
GET /api/cart
```

---

## Orders

### Create Order
```http
POST /api/orders
```
**Request Body**:
```json
{
  "items": [
    {
      "productId": 1,
      "quantity": 1
    }
  ],
  "paymentMethod": "CREDIT_CARD"
}
```

---

## Admin Endpoints

### Add Product (Admin Only)
```http
POST /api/admin/products
```
**Headers**:
```
Authorization: Bearer {admin_token}
```

**Request Body**:
```json
{
  "name": "New Product",
  "price": 49.99,
  "stock": 100
}
```

---

## Technical Details

| Property      | Details                          |
|---------------|----------------------------------|
| Base URL      | `http://localhost:8080/api`      |
| Auth Method   | JWT (Bearer Token)               |
| Rate Limiting | 100 requests/minute per IP       |

## Live Documentation
Access Swagger UI at:  
`http://localhost:8080/swagger-ui.html`
