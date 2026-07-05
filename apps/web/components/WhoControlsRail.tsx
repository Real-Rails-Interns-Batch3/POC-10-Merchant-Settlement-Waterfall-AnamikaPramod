"use client";

import { useEffect, useState } from "react";

type RegulatorsData = {
  cfpb: {
    name: string;
    role: string;
  };
  federal_reserve: {
    name: string;
    role: string;
  };
} | null;

export default function WhoControlsRail() {
  const [data, setData] = useState<RegulatorsData>(null);
  const apiBaseUrl = process.env.NEXT_PUBLIC_API_URL ?? "http://127.0.0.1:8000";

  useEffect(() => {
    fetch(`${apiBaseUrl}/api/regulators`)
      .then((res) => res.json())
      .then((result) => setData(result));
  }, [apiBaseUrl]);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div className="bg-[#111827] border border-gray-800 rounded-2xl p-6">
      <h2 className="text-2xl font-bold mb-4">
        Who Controls the Rail
      </h2>

      <div className="space-y-5 text-gray-300">
        <div>
          <p className="font-semibold text-white mb-1">
            Card Networks
          </p>
          <p>Visa, Mastercard</p>
        </div>

        <div>
          <p className="font-semibold text-white mb-1">
            {data.cfpb.name}
          </p>
          <p>{data.cfpb.role}</p>
        </div>

        <div>
          <p className="font-semibold text-white mb-1">
            {data.federal_reserve.name}
          </p>
          <p>{data.federal_reserve.role}</p>
        </div>
      </div>
    </div>
  );
}