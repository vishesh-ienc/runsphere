# FastAPI application entry point
# Only creates the app and registers routers

from fastapi import FastAPI
from api.health import router as health_router
from api.route import router as route_router

app = FastAPI(title="RunSphere Python Service")

app.include_router(health_router)
app.include_router(route_router)
