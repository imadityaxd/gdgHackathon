from pydantic import BaseModel, Field

class SubScores(BaseModel):
    consistency: int = Field(..., description="Seasonality alignment rating (0-180)")
    cashflow: int = Field(..., description="UPI velocity rating (0-180)")
    fulfillment: int = Field(..., description="Order delivery execution rating (0-180)")
    compliance: int = Field(..., description="Tax structural stability rating (0-180)")
    cluster: int = Field(..., description="Social group trust index (0-180)")

class CreditEvaluation(BaseModel):
    composite_score: int = Field(..., description="Overall score between 300 and 900")
    sub_scores: SubScores
    risk_analysis_summary: str