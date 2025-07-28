# E-Commerce Platform

## Πληροφορίες Project

Πλήρης εφαρμογή e-commerce με:
- **Frontend**: Next.js + React
- **Backend**: Spring Boot
- **Βάση Δεδομένων**: PostgreSQL
- **Authentication**: JWT

## Build & Deployment

### Build

#### Backend (Spring Boot)
```bash
cd backend
# Build JAR file
mvn clean package
# Output: target/ecommerce-0.0.1-SNAPSHOT.jar

#### Frontend (Next.js)
```bash
cd frontend
# Install dependencies
npm install
# Production build
npm run build
# Output: .next directory

Deployment
1. Local Deployment with Docker

# Build and start all services
docker-compose up --build -d

# Access:
# - Frontend: http://localhost:3000
# - Backend: http://localhost:8080
# - PostgreSQL: port 5432

2. Cloud Deployment (Vercel + Heroku)

Frontend (Vercel):
Connect your GitHub repository
Set environment variables:
NEXT_PUBLIC_API_URL=https://your-backend-api.com
Deploy

Backend (Heroku):
Create new app
Add PostgreSQL addon
Set config vars:
SPRING_DATASOURCE_URL=jdbc:postgresql://...
JWT_SECRET=your_secret_key
Deploy via GitHub

API Documentation

Δείτε το API-Endpoints.md για πλήρη τεκμηρίωση.

Project Structure

ecommerce-platform/
├── backend/          # Spring Boot app
├── frontend/         # Next.js app
├── docker-compose.yml # Docker setup
└── docs/             # Documentation
    ├── API-Endpoints.md
    └── ER-Diagram.png

