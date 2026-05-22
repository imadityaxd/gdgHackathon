from fastapi import APIRouter, HTTPException
from backend.models.artisan import ArtisanProfile

router = APIRouter()

# Global static database cache for hackathon deployment
MOCK_ARTISANS = [
    ArtisanProfile(
        id="rukhsana-bano", name="Rukhsana Bano", craft="Chikankari", location="Chowk, Lucknow",
        annual_turnover=280000, gst_type="EXEMPT", has_udyam=False, cluster_member=True, fulfillment_rate=96,
        monthly_orders=[22000, 18000, 15000, 12000, 35000, 42000, 19000, 21000, 24000, 31000, 26000, 15000],
        upi_inflows_count=142
    ),
    ArtisanProfile(
        id="mohammad-irfan", name="Mohammad Irfan", craft="Zardozi", location="Aminabad, Lucknow",
        annual_turnover=850000, gst_type="CMP-08", has_udyam=True, cluster_member=True, fulfillment_rate=91,
        monthly_orders=[65000, 72000, 58000, 45000, 95000, 110000, 62000, 71000, 84000, 99000, 55000, 34000],
        upi_inflows_count=310
    )
]

@router.get("/")
def list_artisans():
    return MOCK_ARTISANS

@router.get("/{artisan_id}")
def get_artisan(artisan_id: str):
    for artisan in MOCK_ARTISANS:
        if artisan.id == artisan_id:
            return artisan
    raise HTTPException(status_code=404, detail="Artisan profile not found")