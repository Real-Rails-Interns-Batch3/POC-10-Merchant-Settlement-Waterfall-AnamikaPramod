"use client";

type PricingScenarioData = {
  fees: number;
  reserve: number;
  net: number;
};

type PricingScenarioProps = {
  data: PricingScenarioData | null;
};

export default function PricingScenario({ data }: PricingScenarioProps) {
  if (!data) return null;

  return (
    <div className="bg-[#111827] p-6 rounded-2xl border border-gray-800">
      <h2 className="text-xl font-bold mb-4">Pricing Scenario</h2>

      <div className="space-y-2 text-gray-300">
        <p>Fees: ${data.fees}</p>
        <p>Reserve Hold: ${data.reserve}</p>
        <p>Net Settlement: ${data.net}</p>
      </div>
    </div>
  );
}