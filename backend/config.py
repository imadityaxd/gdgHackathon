import os

class Settings:
    GEMINI_API_KEY: str = os.getenv("GEMINI_API_KEY", "")
    PROJECT_NAME: str = "CreditWeave Underwriting Core"

settings = Settings()