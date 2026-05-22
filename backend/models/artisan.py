from pydantic import BaseModel, Field
from typing import List, Optional

class ArtisanProfile(BaseModel):
    id: str
    name: str
    craft: str
    location: str
    annual_turnover: float
    gst_type: str  # EXEMPT, CMP-08, or GSTR-4
    has_udyam: bool
    cluster_member: bool
    fulfillment_rate: float
    monthly_orders: List[float]
    upi_inflows_count: int