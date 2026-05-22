from fastapi import FastAPI
from fastapi.responses import RedirectResponse
from fastapi.middleware.cors import CORSMiddleware
from backend.api.routes import artisan, credit, loans
import os
from backend.config import settings

app = FastAPI(title="CreditWeave Underwriting Core Instance")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(artisan.router, prefix="/api/artisan", tags=["Artisans"])
app.include_router(credit.router, prefix="/api/credit", tags=["Credit Evaluation"])
app.include_router(loans.router, prefix="/api/loans", tags=["Loan Schemes"])

@app.get("/")
def read_root():
    return {"status": "online", "message": "CreditWeave Underwriting Brain Is Active. Go to /docs for API schema."}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run("backend.main:app", host="0.0.0.0", port=5000, reload=True)

print("====================================")
if settings.GEMINI_API_KEY:
    print(f"DEBUG: API Key Loaded -> {settings.GEMINI_API_KEY[:10]}...")
else:
    print("ERROR: GEMINI_API_KEY NOT FOUND")
print("====================================")