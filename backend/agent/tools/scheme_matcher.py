from pydantic import BaseModel
from typing import List
from google import genai
from google.genai import types
from backend.config import settings

class SchemeMatchResult(BaseModel):
    scheme_id: str
    eligible: bool
    approval_probability: int
    compliance_reasoning: str

class SchemeMatchCollection(BaseModel):
    matches: List[SchemeMatchResult]

def run_policy_matching(profile_json: str, score_json: str) -> List[SchemeMatchResult]:
    client = genai.Client(api_key=settings.GEMINI_API_KEY)
    
    system_prompt = """
    You are a Government Credit Compliance Agent. Your role is to evaluate informal artisan profiles against available credit programs.
    
    Lending Program Constraints to Evaluate:
    - mudra-shishu: Ceiling limit up to ₹50,000. Optimized for baseline material purchasing.
    - mudra-kishore: Funding limits between ₹50,000 and ₹5,000,000. Requires proven order history logs or craft cluster vouchers.
    - mudra-tarun: Limits up to ₹1,000,000. Requires structured turnover pathways (like CMP-08 quarterly summaries).
    """

    context_payload = {
        "artisan_profile": json.loads(profile_json),
        "underwriting_metrics": json.loads(score_json)
    }

    response = client.models.generate_content(
        model='gemini-1.5-flash',
        contents=[
            system_prompt,
            f"Evaluate dynamic program entry compliance for this target payload: {json.dumps(context_payload)}"
        ],
        config=types.GenerateContentConfig(
            response_mime_type="application/json",
            response_schema=SchemeMatchCollection,
            temperature=0.1
        )
    )
    return SchemeMatchCollection.model_validate_json(response.text).matches