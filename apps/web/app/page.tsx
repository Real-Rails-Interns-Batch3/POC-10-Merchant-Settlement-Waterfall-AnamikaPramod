"use client"

import { useState } from "react"

import Header from "@/components/Header"
import SettlementWaterfall from "@/components/SettlementWaterfall"
import SettlementDelayChart from "@/components/SettlementDelayChart"
import PricingScenario from "@/components/PricingScenario"
import WhyThisMatters from "@/components/WhyThisMatters"
import RailControllers from "@/components/RailControllers"
import Filters from "@/components/Filters"
import DownloadData from "@/components/DownloadData"

export default function Home() {
  const [filters, setFilters] = useState({
    merchant: "All",
    processor: "All",
    region: "All",
  })

  return (
    <main className="min-h-screen bg-[#030712] p-8">

      <Header />

      <div className="grid grid-cols-10 gap-6 mt-6">

        {/* LEFT SIDE */}
        <div className="col-span-7">
          <SettlementWaterfall filters={filters} />
          <SettlementDelayChart filters={filters} />
          <PricingScenario />
        </div>

        {/* RIGHT SIDE */}
        <div className="col-span-3 space-y-6">

          <WhyThisMatters />
          <RailControllers />

          {/* Filters now controlled */}
          <Filters filters={filters} setFilters={setFilters} />

          <DownloadData />

        </div>

      </div>

    </main>
  )
}