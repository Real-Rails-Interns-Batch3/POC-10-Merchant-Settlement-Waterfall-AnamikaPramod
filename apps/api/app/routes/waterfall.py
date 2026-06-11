from fastapi import APIRouter

router = APIRouter()


@router.get("/waterfall")
def waterfall(merchant: str = "Retail", processor: str = "Stripe"):

    base_gross = 125000

    merchant = merchant.lower()
    processor = processor.lower()

    multiplier = 1.0

    # Merchant impact
    if "retail" in merchant:
        multiplier *= 1.0
    elif "restaurant" in merchant:
        multiplier *= 1.15
    elif "health" in merchant:
        multiplier *= 1.30
    elif "e" in merchant:  # ecommerce fallback
        multiplier *= 1.40

    # Processor impact
    if "stripe" in processor:
        multiplier *= 1.05
    elif "adyen" in processor:
        multiplier *= 1.02
    elif "razor" in processor:
        multiplier *= 0.95

    gross = round(base_gross * multiplier)
    fees = round(gross * 0.038)
    reserve = round(gross * 0.04)
    net = gross - fees - reserve

    return {
        "gross": gross,
        "fees": fees,
        "reserve": reserve,
        "net": net
    }
@router.get("/delay")
def delay(merchant: str = "Retail", processor: str = "Stripe"):

    merchant = merchant.lower()
    processor = processor.lower()

    base = [24, 30, 18, 42, 36, 20]

    if "retail" in merchant:
        base = base
    elif "health" in merchant:
        base = [v + 10 for v in base]
    elif "restaurant" in merchant:
        base = [v + 5 for v in base]
    elif "e" in merchant:
        base = [v - 3 for v in base]

    if "stripe" in processor:
        base = [v - 2 for v in base]
    elif "adyen" in processor:
        base = [v - 1 for v in base]

    return [
        {"day": "Mon", "delay": base[0]},
        {"day": "Tue", "delay": base[1]},
        {"day": "Wed", "delay": base[2]},
        {"day": "Thu", "delay": base[3]},
        {"day": "Fri", "delay": base[4]},
        {"day": "Sat", "delay": base[5]},
    ]