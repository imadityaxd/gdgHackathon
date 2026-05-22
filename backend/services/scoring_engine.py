import json
from urllib import response
from google import genai
from google.genai import types
from backend.config import settings
from backend.models.artisan import ArtisanProfile
from backend.models.credit_score import CreditEvaluation

def run_ai_underwriting(profile: ArtisanProfile) -> CreditEvaluation:
    # Initialize client session mapping configurations
    client = genai.Client(api_key=settings.GEMINI_API_KEY)
    
    system_prompt = """
    You are an advanced AI Credit Underwriting Agent specializing in priority sector lending engines.
    Analyze the artisan's profile data and return a structured credit risk evaluation matrix matching the required schema.
    
    CRITICAL LOCALIZED UNDERWRITING LOGIC:
    1. Do not penalize natural textile trade variations. Lucknow's Chikankari/Zardozi markets experience massive order spikes leading up to Eid and Diwali. High seasonal variance indicates healthy market participation, not volatile financial instability.
    2. Weigh alternative validation tracks heavily: Active cluster membership or excellent fulfillment metrics must actively offset a total lack of formal corporate income tax histories.
    """

    # Invoke high-speed inference pipeline
    response = client.models.generate_content(
        model='gemini-2.5-flash',
        contents=[
            system_prompt,
            f"Underwrite this specific artisan data matrix profile: {profile.model_dump_json()}"
        ],
        config=types.GenerateContentConfig(
            response_mime_type="application/json",
            response_schema=CreditEvaluation,
            temperature=0.1
        )
    )
    
    # SAFE EXTRACT: Use native .parsed tool to guarantee validation compliance
    if hasattr(response, "parsed") and response.parsed:
        return response.parsed
        
    # Fallback parsing line in case of schema validation variations
    try:
        return CreditEvaluation.model_validate_json(response.text)

    except Exception as e:
        print("RAW GEMINI RESPONSE:")
        print(response.text)
        raise e