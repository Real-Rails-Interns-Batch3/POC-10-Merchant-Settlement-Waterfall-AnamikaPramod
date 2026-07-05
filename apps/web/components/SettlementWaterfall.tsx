"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";

type WaterfallData = {
  gross: number;
  fees: number;
  reserve: number;
  net: number;
};

type SettlementWaterfallProps = {
  data: WaterfallData | null;
};

export default function SettlementWaterfall({ data }: SettlementWaterfallProps) {
  if (!data) return null;

  const chartData = [
    { name: "Gross Sales", value: data.gross },
    { name: "Fees", value: -data.fees },
    { name: "Reserve Hold", value: -data.reserve },
    { name: "Net Settlement", value: data.net },
  ];

  const colors = ["#3B82F6", "#EF4444", "#EAB308", "#22C55E"];

  return (
    <div className="bg-[#111827] p-6 rounded-2xl border border-gray-800">
      <h2 className="text-xl font-bold mb-4">Waterfall</h2>

      <div style={{ width: "100%", height: 300, minWidth: 0, minHeight: 300 }}>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={chartData}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip
              contentStyle={{
                backgroundColor: "#111827",
                border: "1px solid #374151",
                borderRadius: "8px",
                color: "#fff",
              }}
              formatter={(value: unknown) => [`$${Number(value) ?? 0}`, "Amount"]}
            />

            <Bar dataKey="value">
              {chartData.map((_, i) => (
                <Cell key={i} fill={colors[i]} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}