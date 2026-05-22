from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from backend.api.routes import artisan, credit, loans

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

if __name__ == "__main__":
    import uvicorn
    uvicorn.run("main import app", host="0.0.0.0", port=5000, reload=True)