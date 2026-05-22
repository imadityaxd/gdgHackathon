import json
from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from backend.models.artisan import ArtisanProfile
from backend.agent.tools.scheme_matcher import run_policy_matching

router = APIRouter()

class SchemeQueryPayload(BaseModel):
    profile: ArtisanProfile
    score_data_json: str

@router.post("/match")
def match_loan_schemes(payload: SchemeQueryPayload):
    try:
        matches = run_policy_matching(payload.profile.model_dump_json(), payload.score_data_json)
        return matches
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))