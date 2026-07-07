# RunSphere — Python Service

## Purpose

The FastAPI-based route computation service for RunSphere. Handles graph-based pathfinding, route optimization, and real-time rerouting using OpenStreetMap data.

## Folder Structure

```
python-service/
├── api/                # FastAPI route modules
│   ├── __init__.py
│   ├── health.py       # Health check endpoints
│   └── route.py        # Route computation endpoints
├── algorithms/         # Pathfinding algorithms
│   ├── __init__.py
│   ├── astar.py        # Modified A* search
│   ├── circularRoute.py # Loop route generation
│   ├── reroute.py      # Dynamic rerouting
│   └── weights.py      # Edge weight calculation
├── graph/              # Graph management
│   ├── __init__.py
│   ├── graphLoader.py  # OSM network loading
│   ├── graphBuilder.py # Weighted graph construction
│   └── graphCache.py   # Graph caching layer
├── utils/              # Utility functions
│   └── __init__.py
├── main.py             # FastAPI app creation and router registration
└── requirements.txt    # Python dependencies
```

## How to Run

```bash
# Create and activate virtual environment
python -m venv venv
source venv/bin/activate   # Linux/Mac
venv\Scripts\activate      # Windows

# Install dependencies
pip install -r requirements.txt

# Start the server
uvicorn main:app --reload --port 8000
```

## Dependencies

| Package  | Purpose                |
| -------- | ---------------------- |
| fastapi  | Web framework          |
| uvicorn  | ASGI server            |

## Environment Variables

```env
# No environment variables required yet
# Future: API keys for map data providers
```
