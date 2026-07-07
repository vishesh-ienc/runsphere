# RunSphere — Algorithms

## Overview

RunSphere uses graph-based pathfinding algorithms to generate optimized running routes. The algorithms consider multiple weighted factors to produce routes that balance distance, safety, air quality, and terrain.

## Core Algorithms

### A* Search (`algorithms/astar.py`)

Modified A* pathfinding algorithm adapted for running route generation.

- **Input**: Start coordinates, target distance, graph network
- **Output**: Optimal path as a sequence of nodes
- **Heuristic**: Weighted combination of distance, air quality, and elevation

### Circular Route Generation (`algorithms/circularRoute.py`)

Generates loop routes that start and end at the same location.

- **Input**: Start coordinates, desired distance, preferences
- **Output**: Circular route matching the target distance within a tolerance

### Dynamic Rerouting (`algorithms/reroute.py`)

Recalculates route in real-time when the user deviates from the planned path.

- **Input**: Current position, remaining route, original preferences
- **Output**: Updated route from current position

### Weight Calculation (`algorithms/weights.py`)

Computes edge weights for the graph based on multiple factors:

- **Distance**: Physical distance between nodes
- **Air Quality**: AQI data mapped to graph edges
- **Elevation**: Elevation gain/loss between nodes
- **Safety**: Road type and traffic data

## Graph Management

### Graph Loading (`graph/graphLoader.py`)
Loads OpenStreetMap road network data for a given geographic area.

### Graph Building (`graph/graphBuilder.py`)
Constructs the weighted graph from raw network data.

### Graph Caching (`graph/graphCache.py`)
Caches built graphs to avoid repeated computation for the same area.
