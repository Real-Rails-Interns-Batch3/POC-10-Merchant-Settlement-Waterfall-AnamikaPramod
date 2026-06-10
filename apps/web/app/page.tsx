"use client";

import { useState, useEffect } from "react";

import SettlementWaterfall from "@/components/SettlementWaterfall";
import SettlementDelayChart from "@/components/SettlementDelayChart";
import PricingScenario from "@/components/PricingScenario";
import Filters from "@/components/Filters";
import ReserveHoldPanel from "@/components/ReserveHoldPanel";
import WhyThisMatters from "@/components/WhyThisMatters";
import WhoControlsRail from "@/components/WhoControlsRail";

export default function Home() {
  const [filters, setFilters] = useState({
    merchant: "Retail",
    processor: "Stripe",
    region: "Northeast",
  });

  const [waterfallData, setWaterfallData] = useState<any>(null);
  const [delayData, setDelayData] = useState<any[]>([]);

  useEffect(() => {
    async function fetchData() {
      const res1 = await fetch(
        `http://127.0.0.1:8000/api/waterfall?merchant=${filters.merchant}&processor=${filters.processor}`
      );
      const data1 = await res1.json();
      setWaterfallData(data1);

      const res2 = await fetch(
        `http://127.0.0.1:8000/api/delay?merchant=${filters.merchant}&processor=${filters.processor}`
      );
      const data2 = await res2.json();
      setDelayData(data2);
    }

    fetchData();
  }, [filters]);

  return (
    <div className="min-h-screen bg-[#030712] text-white p-6">

      {/* HEADER */}
      <h1 className="text-5xl font-bold mb-3">
        Merchant Settlement Waterfall
      </h1>

      <p className="text-gray-400 mb-8 text-lg">
        Track how gross card sales become net merchant deposits
        across US payment rails (CFPB / Federal Reserve context).
      </p>

      {/* MAIN GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-10 gap-6">

        {/* LEFT */}
        <div className="lg:col-span-7 space-y-6">
          

          {/* KPI CARDS */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

            <div className="bg-[#111827] border border-gray-800 rounded-2xl p-5">
              <p className="text-gray-400 text-sm">Gross Sales</p>
              <h2 className="text-3xl font-bold text-blue-400">
                ${waterfallData?.gross?.toLocaleString() || "-"}
              </h2>
            </div>

            <div className="bg-[#111827] border border-gray-800 rounded-2xl p-5">
              <p className="text-gray-400 text-sm">Fees</p>
              <h2 className="text-3xl font-bold text-red-400">
                -${waterfallData?.fees?.toLocaleString() || "-"}
              </h2>
            </div>

            <div className="bg-[#111827] border border-gray-800 rounded-2xl p-5">
              <p className="text-gray-400 text-sm">Reserve Hold</p>
              <h2 className="text-3xl font-bold text-yellow-400">
                -${waterfallData?.reserve?.toLocaleString() || "-"}
              </h2>
            </div>

            <div className="bg-[#111827] border border-gray-800 rounded-2xl p-5">
              <p className="text-gray-400 text-sm">Net Settlement</p>
              <h2 className="text-3xl font-bold text-green-400">
                ${waterfallData?.net?.toLocaleString() || "-"}
              </h2>
            </div>

          </div>

          {/* CHARTS */}
          <SettlementWaterfall data={waterfallData} />
          <SettlementDelayChart data={delayData} />
          <PricingScenario data={waterfallData} />
          <ReserveHoldPanel data={waterfallData} />
        </div>

        {/* RIGHT */}
        <div className="lg:col-span-3 space-y-6">

          {/* FILTERS */}
          <div className="bg-[#111827] border border-gray-800 rounded-2xl p-6">
            <h2 className="text-2xl font-bold mb-4">Filters</h2>

            <Filters
              filters={filters}
              setFilters={setFilters}
            />
          </div>
          <div className="lg:col-span-3 space-y-6">

  <WhyThisMatters />

  <WhoControlsRail />
    
  </div>

 



          

        </div>
      </div>
    </div>
  );
}