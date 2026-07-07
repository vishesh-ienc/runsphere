# RunSphere — Architecture

## Overview

RunSphere is a health-focused running route planner that generates optimized routes based on air quality, elevation, and user preferences.

## System Architecture

```
┌─────────────┐     ┌──────────────┐     ┌──────────────────┐
│   Frontend   │────▶│   Backend    │────▶│  Python Service   │
│  (React/Vite)│◀────│  (Express)   │◀────│   (FastAPI)       │
└─────────────┘     └──────────────┘     └──────────────────┘
                           │
                           ▼
                    ┌──────────────┐
                    │   MongoDB    │
                    └──────────────┘
```

## Services

### Frontend (`frontend/`)
- **Framework**: React 19 + Vite
- **Routing**: React Router DOM
- **Structure**: Component-based architecture with pages, context providers, hooks, and services

### Backend (`backend/`)
- **Framework**: Express.js
- **Database**: MongoDB via Mongoose
- **Structure**: Feature-based controllers, route modules, validators, middleware, and services

### Python Service (`python-service/`)
- **Framework**: FastAPI
- **Purpose**: Graph-based route computation, pathfinding algorithms, and route optimization
- **Structure**: Algorithms module, graph module, and utilities

## Folder Structure

```
runsphere/
├── frontend/           # React client application
├── backend/            # Express API server
├── python-service/     # FastAPI route computation service
├── shared/             # Cross-service shared resources
├── docs/               # Project documentation
├── .gitignore
└── README.md
```

## Data Flow

1. User sets preferences and location on the frontend
2. Frontend sends route request to the backend
3. Backend validates the request and forwards to the Python service
4. Python service computes optimal route using graph algorithms
5. Backend enriches the route with air quality and elevation data
6. Frontend renders the route on the map with navigation controls
