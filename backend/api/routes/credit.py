from fastapi import APIRouter, HTTPException
from backend.models.artisan import ArtisanProfile
from backend.services.scoring_engine import run_ai_underwriting

router = APIRouter()

@router.post("/score")
def calculate_score(profile: ArtisanProfile):
    try:
        evaluation = run_ai_underwriting(profile)
        return evaluation
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))