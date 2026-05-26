"use client"

import { useState } from "react"

const scenarios = {
  flat: {
    fees: "$4,700",
    reserve: "$5,000",
    net: "$114,850",
  },

  interchange: {
    fees: "$3,900",
    reserve: "$4,200",
    net: "$116,900",
  },

  tiered: {
    fees: "$5,600",
    reserve: "$6,100",
    net: "$113,300",
  },
}

export default function PricingScenario() {
  const [selected, setSelected] = useState("flat")

  const current =
    scenarios[selected as keyof typeof scenarios]

  return (
    <div className="bg-[#111827] p-6 rounded-2xl border border-gray-800 mt-6">
      <h2 className="text-2xl font-bold text-white mb-4">
        Pricing Scenario Simulator
      </h2>

      <div className="flex gap-4 mb-6">
        <button
          onClick={() => setSelected("flat")}
          className="bg-blue-600 px-4 py-2 rounded-lg"
        >
          Flat Rate
        </button>

        <button
          onClick={() => setSelected("interchange")}
          className="bg-gray-700 px-4 py-2 rounded-lg"
        >
          Interchange+
        </button>

        <button
          onClick={() => setSelected("tiered")}
          className="bg-gray-700 px-4 py-2 rounded-lg"
        >
          Tiered
        </button>
      </div>

      <div className="grid grid-cols-3 gap-4">
        <div className="bg-[#1F2937] p-4 rounded-xl">
          <p className="text-gray-400 text-sm">Fees</p>
          <h3 className="text-2xl font-bold text-red-400">
            {current.fees}
          </h3>
        </div>

        <div className="bg-[#1F2937] p-4 rounded-xl">
          <p className="text-gray-400 text-sm">Reserve Hold</p>
          <h3 className="text-2xl font-bold text-yellow-400">
            {current.reserve}
          </h3>
        </div>

        <div className="bg-[#1F2937] p-4 rounded-xl">
          <p className="text-gray-400 text-sm">Net Settlement</p>
          <h3 className="text-2xl font-bold text-green-400">
            {current.net}
          </h3>
        </div>
      </div>
    </div>
  )
}