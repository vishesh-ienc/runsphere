# RunSphere — Frontend

## Purpose

The React client application for RunSphere. Provides the user interface for route planning, live navigation, run tracking, and data visualization.

## Folder Structure

```
src/
├── assets/             # Static assets (images, icons, fonts)
├── components/         # Reusable UI components
│   ├── charts/         # Data visualization charts (AQI, elevation, pace, etc.)
│   ├── common/         # Shared components (Button, Card, Loader, Modal)
│   ├── layout/         # Layout components (Navbar, Sidebar, Footer, Layout)
│   ├── map/            # Map components (Map, SearchBar, RouteCard, etc.)
│   ├── navigation/     # Navigation components (NavigationPanel, TrackingInfo)
│   └── settings/       # Settings components (PreferenceCard)
├── config/             # Configuration constants
│   ├── api.js          # API base URLs
│   ├── map.js          # Map configuration
│   └── constants.js    # Application constants
├── context/            # React context providers
│   ├── AuthContext.jsx      # Authentication state
│   ├── RouteContext.jsx     # Route state
│   └── LocationContext.jsx  # User location state
├── hooks/              # Custom React hooks
│   ├── useLocation.js  # Location tracking hook
│   └── useRoute.js     # Route management hook
├── pages/              # Page components
│   ├── Dashboard.jsx
│   ├── Landing.jsx
│   ├── LiveNavigation.jsx
│   ├── SavedRoutes.jsx
│   ├── Settings.jsx
│   └── Summary.jsx
├── services/           # API service modules
│   ├── api.js          # HTTP client setup
│   └── routeService.js # Route API calls
├── types/              # Object structure definitions
│   ├── route.js
│   ├── user.js
│   └── navigation.js
├── utils/              # Helper functions
│   ├── constants.js    # Utility-scoped constants
│   └── helpers.js      # General helpers
├── App.jsx             # Root component with routing
├── main.jsx            # Application entry point
└── index.css           # Global styles
```

## How to Run

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint
npm run lint
```

## Dependencies

| Package          | Purpose                  |
| ---------------- | ------------------------ |
| react            | UI library               |
| react-dom        | React DOM renderer       |
| react-router-dom | Client-side routing      |

## Environment Variables

Create a `.env` file in the `frontend/` directory:

```env
VITE_BACKEND_BASE_URL=http://localhost:5000
VITE_PYTHON_SERVICE_BASE_URL=http://localhost:8000
```
