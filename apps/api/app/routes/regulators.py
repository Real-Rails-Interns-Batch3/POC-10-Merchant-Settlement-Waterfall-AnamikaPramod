from fastapi import APIRouter

router = APIRouter()

@router.get("/regulators")
def regulators():
    return {
        "cfpb": {
            "name": "Consumer Financial Protection Bureau",
            "role": "Consumer protection in financial services"
        },
        "federal_reserve": {
            "name": "Federal Reserve",
            "role": "Oversight of US payment systems"
        }
    }