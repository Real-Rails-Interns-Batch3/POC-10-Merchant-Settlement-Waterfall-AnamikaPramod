"use client"

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts"

import { getSettlementData } from "./dataEngine"

export default function SettlementWaterfall({ filters }: any) {
  const dataValues = getSettlementData(filters)

  const data = [
    { name: "Gross Sales", value: dataValues.gross },
    { name: "Fees", value: -dataValues.fees },
    { name: "Reserve Hold", value: -dataValues.reserve },
    { name: "Net Settlement", value: dataValues.net },
  ]

  const colors = ["#3B82F6", "#EF4444", "#EAB308", "#22C55E"]

  return (
    <div className="bg-[#111827] p-6 rounded-2xl border border-gray-800 mt-6">

      <h2 className="text-2xl font-bold text-white mb-4">
        Sales → Net Settlement Waterfall
      </h2>

      <div className="h-[400px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <XAxis dataKey="name" stroke="#9CA3AF" />
            <YAxis stroke="#9CA3AF" />
            <Tooltip />

            <Bar dataKey="value">
              {data.map((_, index) => (
                <Cell key={index} fill={colors[index]} />
              ))}
            </Bar>

          </BarChart>
        </ResponsiveContainer>
      </div>

    </div>
  )
}