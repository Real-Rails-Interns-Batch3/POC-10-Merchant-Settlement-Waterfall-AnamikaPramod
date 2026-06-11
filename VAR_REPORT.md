# Validation and Analysis Report

## Objective

Demonstrate merchant settlement economics using a FastAPI-backed dashboard.

## Technology Stack

- Next.js
- FastAPI
- Recharts

## APIs

- /api/waterfall
- /api/delay
- /api/regulators

## Validation

Retail + Stripe:
Gross = 131250

Healthcare + Stripe:
Gross = 170625

All calculations validated successfully.

## Conclusion

Dashboard dynamically visualizes settlement flow, reserve holds, and payment rail economics.