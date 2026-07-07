# RunSphere — Backend

## Purpose

The Express.js API server for RunSphere. Handles user authentication, route management, navigation sessions, and coordinates with the Python service for route computation.

## Folder Structure

```
backend/
├── config/             # Configuration
│   └── db.js           # MongoDB connection setup
├── controllers/        # Feature-based request handlers
│   ├── user/
│   │   ├── signup.js
│   │   └── login.js
│   ├── route/
│   │   ├── createRoute.js
│   │   ├── reroute.js
│   │   ├── saveRoute.js
│   │   └── getSavedRoutes.js
│   └── navigation/
│       ├── startNavigation.js
│       └── updateNavigation.js
├── middleware/          # Express middleware
│   ├── auth.js         # Authentication middleware
│   └── errorHandler.js # Global error handler
├── models/             # Mongoose schemas
│   ├── User.js
│   ├── Route.js
│   ├── Run.js
│   └── Preference.js
├── routes/             # Express route modules
│   ├── index.js        # Route aggregator
│   ├── user.js
│   ├── route.js
│   ├── navigation.js
│   └── health.js
├── services/           # External service integrations
│   ├── airQualityService.js
│   ├── elevationService.js
│   ├── geocodingService.js
│   ├── mapsService.js
│   └── pythonService.js
├── utils/              # Utility functions
│   └── index.js
├── validators/         # Request validation
│   ├── userValidator.js
│   └── routeValidator.js
├── app.js              # Express app configuration
├── server.js           # Server entry point
├── .env.example        # Sample environment configuration
├── .gitignore
├── package.json
└── package-lock.json
```

## How to Run

```bash
# Install dependencies
npm install

# Create environment file
cp .env.example .env
# Edit .env with your values

# Start the server
node server.js
```

## Dependencies

| Package  | Purpose               |
| -------- | --------------------- |
| express  | Web framework         |
| mongoose | MongoDB ODM           |
| cors     | Cross-origin support  |
| dotenv   | Environment variables |

## Environment Variables

Copy `.env.example` to `.env` and configure:

```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/runsphere
JWT_SECRET=your_jwt_secret_here
PYTHON_SERVICE_URL=http://localhost:8000
```
