from fastapi import APIRouter, HTTPException
from backend.models.artisan import ArtisanProfile
from backend.services.scoring_engine import run_ai_underwriting

router = APIRouter()

@router.post("/score")
async def generate_score(profile: ArtisanProfile):

    try:

        print("REQUEST RECEIVED")
        print(profile)

        result = run_ai_underwriting(profile)

        print("RESULT GENERATED")

        return result

    except Exception as e:

        print("========== FULL ERROR ==========")
        traceback.print_exc()
        print("================================")

        return {
            "success": False,
            "error": str(e)
        }