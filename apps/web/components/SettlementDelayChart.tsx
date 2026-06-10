"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function SettlementDelayChart({ data }: any) {
  if (!data || !Array.isArray(data)) return null;

  return (
    <div className="bg-[#111827] p-6 rounded-2xl border border-gray-800">
      <h2 className="text-xl font-bold mb-4">
        Settlement Delay Analytics
      </h2>

      <div style={{ width: "100%", height: 300 }}>
        <ResponsiveContainer>
          <LineChart data={data}>
            <XAxis dataKey="day" />
            <YAxis />
            <Tooltip
  contentStyle={{
    backgroundColor: "#111827",
    border: "1px solid #374151",
    borderRadius: "8px",
    color: "#fff",
  }}
  formatter={(value: any) => [`${value} hrs`, "Delay"]}
/>
            <Line type="monotone" dataKey="delay" stroke="#60A5FA" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}