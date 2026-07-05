"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

type DelayDataPoint = {
  day: string;
  delay: number;
};

type SettlementDelayChartProps = {
  data: DelayDataPoint[];
};

export default function SettlementDelayChart({ data }: SettlementDelayChartProps) {
  if (!data || !Array.isArray(data)) return null;

  return (
    <div className="bg-[#111827] p-6 rounded-2xl border border-gray-800">
      <h2 className="text-xl font-bold mb-4">
        Settlement Delay Analytics
      </h2>

      <div style={{ width: "100%", height: 300, minWidth: 0, minHeight: 300 }}>
        <ResponsiveContainer width="100%" height={300}>
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
              formatter={(value: unknown) => [`${Number(value) ?? 0} hrs`, "Delay"]}
            />
            <Line type="monotone" dataKey="delay" stroke="#60A5FA" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}