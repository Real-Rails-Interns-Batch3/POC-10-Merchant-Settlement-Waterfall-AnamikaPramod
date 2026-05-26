"use client"

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts"

import { getDelayData } from "./dataEngine"

export default function SettlementDelayChart({ filters }: any) {
  const data = getDelayData(filters)

  return (
    <div className="bg-[#111827] p-6 rounded-2xl border border-gray-800 mt-6">

      <h2 className="text-2xl font-bold text-white mb-4">
        Settlement Delay Analytics
      </h2>

      <p className="text-gray-400 mb-6">
        Average merchant settlement delay (hours)
      </p>

      <div className="h-[350px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid stroke="#1F2937" />
            <XAxis dataKey="day" stroke="#9CA3AF" />
            <YAxis stroke="#9CA3AF" />
            <Tooltip />

            <Line
              type="monotone"
              dataKey="delay"
              stroke="#3B82F6"
              strokeWidth={3}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

    </div>
  )
}