# RunSphere — API Reference

## Base URLs

| Service        | Default URL              |
| -------------- | ------------------------ |
| Backend API    | `http://localhost:5000`   |
| Python Service | `http://localhost:8000`   |

---

## External API Integrations

The project integrates with the following third-party APIs:

1. **Mapbox APIs**:
   - **Maps SDK**: Renders interactive map canvas, handles path plotting, markers, and zoom/pan.
   - **Geocoding API**: Translates location queries (e.g. "Mumbai Central") to geographic coordinates `[lat, lng]` and vice-versa.
   - *Requires*: `MAPBOX_ACCESS_TOKEN` / `VITE_MAPBOX_ACCESS_TOKEN`

2. **GraphHopper Routing API**:
   - Computes standard directions and routing for base comparison and initial route plotting.
   - *Requires*: `GRAPHHOPPER_API_KEY`

3. **OpenWeather Air Pollution API**:
   - Provides AQI (Air Quality Index) values and chemical component breakdowns (CO, NO, NO2, O3, SO2, NH3, PM2.5, PM10) for coordinate points.
   - *Requires*: `OPENWEATHER_API_KEY`

4. **Open-Elevation API**:
   - Retrieves elevation profiles for coordinates. Completely free and open access.
   - *Endpoint*: `https://api.open-elevation.com/api/v1/lookup`

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
