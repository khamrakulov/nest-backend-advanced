# Nest Backend Advanced

This project serves as an advanced backend template built using the NestJS framework. It provides a robust and scalable architecture for server-side applications, integrating essential tools like PostgreSQL, Sequelize ORM, and Docker.

## Features

- **NestJS**: Framework for building scalable and maintainable applications.
- **PostgreSQL**: Relational database for data storage.
- **Sequelize**: ORM for managing database interactions.
- **Authentication & Authorization**: Support for JWT tokens and role-based guards.
- **Docker**: Containerized environment for easy deployment.
- **Modular Architecture**: Promotes code reuse and scalability.

## Prerequisites

Ensure the following are installed:

- **Node.js** (v18+)
- **Docker** and **Docker Compose**
- **PostgreSQL**

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/khamrakulov/nest-backend-advanced.git
cd nest-backend-advanced
```

### 2. Set Up Environment Variables

Create a .env file in the root directory with the following content:

```bash
env
Copy code
DB_HOST=localhost
DB_PORT=5432
DB_USER=postgres
DB_PASSWORD=your_password
DB_NAME=your_database
JWT_SECRET=your_jwt_secret
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Start the Application

#### Using Docker

```bash
docker-compose up --build
```

#### Without Docker

Make sure PostgreSQL is running locally and run:

```bash
npm run start:dev
```

### 5. Access the API

API Base URL: `http://localhost:3000`

Swagger Documentation: `http://localhost:3000/api`

## Project Structure

```plaintext
src
├── app.module.ts          # Root module
├── auth                   # Authentication module
├── users                  # User module with role guards
├── config                 # Environment configuration
└── main.ts                # Entry point
```

## Commands

Start in Development: `npm run start:dev`.

Build: `npm run build`.

Run Tests: `npm run test`.

## Troubleshooting

#### 1. Database Connection Error:

• Ensure PostgreSQL is running and `.env` variables are correctly set.

• Check Docker logs with: `docker logs <container_id>`.

#### 2. JWT Authentication Issues:

• Confirm that the JWT_SECRET matches in your frontend and backend.

## License

This project is licensed under the MIT License.
