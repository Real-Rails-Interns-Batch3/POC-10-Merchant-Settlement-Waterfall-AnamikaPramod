"use client";

import { useState, useEffect } from "react";

import SettlementWaterfall from "@/components/SettlementWaterfall";
import SettlementDelayChart from "@/components/SettlementDelayChart";
import PricingScenario from "@/components/PricingScenario";
import Filters from "@/components/Filters";
import ReserveHoldPanel from "@/components/ReserveHoldPanel";

export default function Home() {
  const [filters, setFilters] = useState({
    merchant: "Retail",
    processor: "Stripe",
    region: "Northeast",
  });

  const [waterfallData, setWaterfallData] = useState<any>(null);
  const [delayData, setDelayData] = useState<any[]>([]);

  useEffect(() => {
    fetch(
      `http://127.0.0.1:8000/api/waterfall?merchant=${filters.merchant}&processor=${filters.processor}`
    )
      .then((res) => res.json())
      .then((data) => setWaterfallData(data));

    fetch(
      `http://127.0.0.1:8000/api/delay?merchant=${filters.merchant}&processor=${filters.processor}`
    )
      .then((res) => res.json())
      .then((data) => setDelayData(data));
  }, [filters]);

  return (
    <div className="min-h-screen bg-[#030712] text-white p-6">

      {/* HEADER */}
      <h1 className="text-5xl font-bold mb-3">
        Merchant Settlement Waterfall
      </h1>

      <p className="text-gray-400 mb-8 text-lg">
        Track how gross card sales become net merchant deposits
        across the US payment rail ecosystem (CFPB, Federal Reserve context).
      </p>

      {/* MAIN GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-10 gap-6">

        {/* LEFT SIDE */}
        <div className="lg:col-span-7 space-y-6">

          {/* KPI CARDS */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

            <div className="bg-[#111827] border border-gray-800 rounded-2xl p-5">
              <p className="text-gray-400 text-sm mb-2">Gross Sales</p>
              <h2 className="text-3xl font-bold text-blue-400">
                ${waterfallData?.gross?.toLocaleString() || "-"}
              </h2>
            </div>

            <div className="bg-[#111827] border border-gray-800 rounded-2xl p-5">
              <p className="text-gray-400 text-sm mb-2">Fees</p>
              <h2 className="text-3xl font-bold text-red-400">
                -${waterfallData?.fees?.toLocaleString() || "-"}
              </h2>
            </div>

            <div className="bg-[#111827] border border-gray-800 rounded-2xl p-5">
              <p className="text-gray-400 text-sm mb-2">Reserve Hold</p>
              <h2 className="text-3xl font-bold text-yellow-400">
                -${waterfallData?.reserve?.toLocaleString() || "-"}
              </h2>
            </div>

            <div className="bg-[#111827] border border-gray-800 rounded-2xl p-5">
              <p className="text-gray-400 text-sm mb-2">Net Settlement</p>
              <h2 className="text-3xl font-bold text-green-400">
                ${waterfallData?.net?.toLocaleString() || "-"}
              </h2>
            </div>

          </div>

          {/* CHARTS */}
          <SettlementWaterfall data={waterfallData} />

          <SettlementDelayChart data={delayData} />

          <PricingScenario data={waterfallData} />

        </div>

        {/* RIGHT SIDE */}
        <div className="lg:col-span-3 space-y-6">

          {/* WHY THIS MATTERS */}
          <div className="bg-[#111827] border border-gray-800 rounded-2xl p-6">
            <h2 className="text-2xl font-bold mb-4">Why This Matters</h2>

            <ul className="space-y-4 text-gray-300">
              <li>Settlement delays impact merchant cash flow.</li>
              <li>Reserve holds reduce liquidity visibility.</li>
              <li>Pricing opacity increases operational costs.</li>
              <li>US payment rails are regulated by CFPB & Federal Reserve.</li>
            </ul>
          </div>

          {/* WHO CONTROLS THE RAIL */}
          <div className="bg-[#111827] border border-gray-800 rounded-2xl p-6">
            <h2 className="text-2xl font-bold mb-4">Who Controls the Rail</h2>

            <div className="space-y-4 text-gray-300">
              <div>
                <p className="font-semibold text-white">Card Networks</p>
                <p>Visa, Mastercard</p>
              </div>

              <div>
                <p className="font-semibold text-white">Regulators</p>
                <p>Federal Reserve, CFPB</p>
              </div>

              <div>
                <p className="font-semibold text-white">Settlement Flow</p>
                <p>Networks → Acquirers → Processors → Banks → Merchants</p>
              </div>
            </div>
          </div>

          {/* FILTERS */}
          <div className="bg-[#111827] border border-gray-800 rounded-2xl p-6">
            <h2 className="text-2xl font-bold mb-4">Filters</h2>

            <Filters filters={filters} setFilters={setFilters} />
          </div>

          {/* RESERVE PANEL */}
          <ReserveHoldPanel data={waterfallData} />

        </div>
      </div>
    </div>
  );
}