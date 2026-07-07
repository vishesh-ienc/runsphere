# python-service/api/health.py
# Health check endpoints

from fastapi import APIRouter

router = APIRouter(tags=["health"])


@router.get("/")
def root():
    return {"message": "RunSphere Python Service"}


@router.get("/health")
def health():
    return {"status": "ok"}
