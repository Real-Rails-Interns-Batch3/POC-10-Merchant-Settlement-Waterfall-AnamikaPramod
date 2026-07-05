# 💳 Merchant Settlement Waterfall — Real Rails Intelligence PoC

A production-style intelligence dashboard that simulates how merchant payments flow through the global payments rail — from gross sales → fees → reserves → net settlement.

Built as part of the **Real Rails Intelligence Library PoC framework**.

---

## 🚀 Live Features

### 📊 Settlement Waterfall Engine
- Gross Sales → Fees → Reserve Hold → Net Settlement
- Dynamic recalculation based on filters

### ⏱ Settlement Delay Analytics
- Weekly settlement delay simulation
- Processor & merchant impact modeling

### 🧠 Pricing Scenario Simulator
- Flat Rate / Interchange+ / Tiered models
- Real-time financial impact visualization

### 🔍 Intelligent Filters
- Merchant selection (Amazon, Flipkart, Shopify)
- Processor selection (Stripe, Razorpay, Adyen)
- Region-based simulation hooks

### 📦 Downloadable Dataset
- CSV export for analysis
- Synthetic merchant settlement dataset

---

## 🏗 Architecture

## 🔄 System Flow

Gross Sales
  ↓
Card Networks (Visa/Mastercard)
  ↓
Payment Processor (Stripe/Razorpay/Adyen)
  ↓
Acquirer Bank
  ↓
Reserve + Fees Applied
  ↓
Net Settlement to Merchant


---

## 🧠 Data Model

Since real-time settlement data is not publicly available:

- Uses **synthetic merchant batches**
- Simulates processor pricing behavior
- Models reserve + delay logic

Sources conceptually aligned with:
- CFPB (Consumer Financial Protection Bureau)
- Federal Reserve Payments Study

---

## 🧩 Key Concepts Explained

### 💰 Payment Rail
The infrastructure that moves money from customer → merchant.

### 🏦 Who Controls the Rail
- Card Networks (Visa, Mastercard)
- Regulators (Federal Reserve, CFPB)
- Processors (Stripe, Razorpay, Adyen)

### ⏳ Settlement Delay
Time between transaction authorization and merchant payout.

---

## 📂 Project Structure


---

## ⚙️ Tech Stack

- Next.js 14
- TypeScript
- Tailwind CSS
- Recharts
- React Hooks

---

## 🎯 What This Project Demonstrates

- Payment rail intelligence modeling
- Financial data simulation
- Dashboard engineering
- UI/UX for fintech systems
- Data-driven decision interfaces

---

## ▶️ Run the app locally

### Backend (FastAPI)
1. Create and activate a virtual environment if needed.
2. Install Python dependencies:
   ```bash
   pip install -r apps/api/requirements.txt
   ```
3. Start the API server from the `apps/api` directory:
   ```bash
   cd apps/api
   python -m uvicorn app.main:app --host 127.0.0.1 --port 8000 --reload
   ```

> If you get `WinError 10013`, port `8000` is already in use. Stop the process using that port or choose a different port.
> Example:
> ```powershell
> Get-NetTCPConnection -LocalPort 8000 | Select-Object -ExpandProperty OwningProcess | Get-Process
> Stop-Process -Id <pid> -Force
> ```
> Then restart with the same command or use `--port 8001`.

### Frontend (Next.js)
1. Install Node dependencies:
   ```bash
   npm install
   ```
2. Start the UI:
   ```bash
   npm run dev
   ```
3. Set the API URL if you are not using the default local backend:
   ```bash
   NEXT_PUBLIC_API_URL=http://127.0.0.1:8000
   ```

### Expected URLs
- Backend: http://127.0.0.1:8000
- Frontend: http://localhost:3000

---

### One-step dev helper

There is a PowerShell helper that will create an isolated venv for the API, install dependencies, start the backend, and then start the frontend dev server:

```powershell
powershell -ExecutionPolicy Bypass -File scripts\start-dev.ps1
```

You can also copy `apps/web/.env.example` to `apps/web/.env.local` and edit `NEXT_PUBLIC_API_URL` if you want a different API target.


## 📸 Screenshots

Add screenshots in:

