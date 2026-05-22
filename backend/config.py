import os
from dotenv import load_dotenv
from pathlib import Path

BASE_DIR = Path(__file__).resolve().parent.parent
ENV_PATH = BASE_DIR / ".env"

print("BASE_DIR =", BASE_DIR)
print("ENV_PATH =", ENV_PATH)
print("ENV EXISTS =", ENV_PATH.exists())

load_dotenv(dotenv_path=ENV_PATH)

class Settings:
    GEMINI_API_KEY: str = os.getenv("GEMINI_API_KEY", "")
    PROJECT_NAME: str = "CreditWeave Underwriting Core"

settings = Settings()

if settings.GEMINI_API_KEY:
    print("GEMINI KEY LOADED")
else:
    print("ERROR: GEMINI_API_KEY NOT FOUND")