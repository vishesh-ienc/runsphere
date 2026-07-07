# RunSphere — API Reference

## Base URLs

| Service        | Default URL              |
| -------------- | ------------------------ |
| Backend API    | `http://localhost:5000`   |
| Python Service | `http://localhost:8000`   |

---

## Backend API Endpoints

All feature endpoints are prefixed with `/api/v1`.

### Root

| Method | Endpoint   | Description          |
| ------ | ---------- | -------------------- |
| GET    | `/`        | API welcome message  |

### Health

| Method | Endpoint            | Description          |
| ------ | ------------------- | -------------------- |
| GET    | `/api/v1/health`    | Health check         |

### User

| Method | Endpoint            | Description          |
| ------ | ------------------- | -------------------- |
| POST   | `/api/v1/signup`    | Register a new user  |
| POST   | `/api/v1/login`     | Authenticate a user  |

### Route

| Method | Endpoint                | Description                    |
| ------ | ----------------------- | ------------------------------ |
| POST   | `/api/v1/route`         | Generate an optimized route    |
| POST   | `/api/v1/reroute`       | Recalculate route mid-run      |
| POST   | `/api/v1/save-route`    | Save a route to user's profile |
| GET    | `/api/v1/saved-routes`  | Get user's saved routes        |

### Navigation

> Navigation endpoints are under development.

---

## Python Service Endpoints

| Method | Endpoint    | Description                   |
| ------ | ----------- | ----------------------------- |
| GET    | `/`         | Service welcome message       |
| GET    | `/health`   | Health check                  |

> Additional route computation endpoints (under `/route`) to be documented as implemented.

---

## Authentication

> Authentication mechanism (JWT-based) is under development. Protected endpoints will require a `Bearer` token in the `Authorization` header.

## Error Responses

All error responses follow this format:

```json
{
  "message": "Error description"
}
```

| Status Code | Meaning               |
| ----------- | --------------------- |
| 400         | Bad Request           |
| 401         | Unauthorized          |
| 404         | Not Found             |
| 500         | Internal Server Error |
| 501         | Not Implemented       |
