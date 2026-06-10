"use client";

export default function ReserveHoldPanel({ waterfallData }: any) {
  if (!waterfallData) return null;

  return (
    <div className="bg-[#111827] p-6 rounded-2xl border border-gray-800">
      <h2 className="text-xl font-bold mb-4">
        Reserve Hold Analytics
      </h2>

      <div>Current Reserve Hold</div>
      <div className="text-2xl text-yellow-400">
        ${waterfallData.reserve?.toLocaleString()}
      </div>

      <div className="mt-4 text-gray-400">
        Reserve Rate: 4%
      </div>

      <div className="text-gray-400">
        Estimated Release: 14 days
      </div>
    </div>
  );
}