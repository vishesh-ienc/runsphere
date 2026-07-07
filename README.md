# RunSphere

A health-focused running route planner that generates optimized routes based on air quality, elevation, and user preferences.

## Architecture

```
runsphere/
├── frontend/           # React client (Vite)
├── backend/            # Express.js API server
├── python-service/     # FastAPI route computation
├── shared/             # Cross-service shared resources
│   ├── constants/
│   └── docs/
├── docs/               # Project documentation
│   ├── Architecture.md
│   ├── API.md
│   ├── Algorithms.md
│   └── Roadmap.md
├── .gitignore
└── README.md
```

## Quick Start

### Prerequisites

- Node.js (v18+)
- Python (3.10+)
- MongoDB

### Frontend

```bash
cd frontend
npm install
npm run dev
```

### Backend

```bash
cd backend
npm install
cp .env.example .env
# Edit .env with your configuration
node server.js
```

### Python Service

```bash
cd python-service
python -m venv venv
venv\Scripts\activate   # Windows
pip install -r requirements.txt
uvicorn main:app --reload --port 8000
```

## Documentation

- [Architecture](docs/Architecture.md) — System design and data flow
- [API Reference](docs/API.md) — Endpoint documentation
- [Algorithms](docs/Algorithms.md) — Pathfinding and route optimization
- [Roadmap](docs/Roadmap.md) — Development phases and progress

## Services

| Service        | Port | Tech Stack         |
| -------------- | ---- | ------------------ |
| Frontend       | 5173 | React, Vite        |
| Backend        | 5000 | Express, MongoDB   |
| Python Service | 8000 | FastAPI, Uvicorn   |
