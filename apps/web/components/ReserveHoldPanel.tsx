"use client";

export default function ReserveHoldPanel({ data }: any) {
  if (!data) return null;

  return (
    <div className="bg-[#111827] border border-gray-800 rounded-2xl p-6">

      <h2 className="text-xl font-bold mb-4">
        Reserve Hold Analytics
      </h2>

      <div className="space-y-3 text-sm">

        <div>
          <p className="text-gray-400">Current Reserve Hold</p>
          <p className="text-2xl font-bold text-yellow-400">
            ${data.reserve?.toLocaleString()}
          </p>
        </div>

        <div>
          <p className="text-gray-400">Reserve Rate</p>
          <p>4% (dynamic simulation)</p>
        </div>

        <div>
          <p className="text-gray-400">Estimated Release</p>
          <p>14 days</p>
        </div>

        <div>
          <p className="text-gray-400">Risk Trigger</p>
          <p>
            {data.gross > 150000
              ? "High Volume Risk"
              : "Normal Operations"}
          </p>
        </div>

      </div>
    </div>
  );
}