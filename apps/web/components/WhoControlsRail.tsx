"use client";

export default function WhoControlsRail() {
  return (
    <div className="bg-[#111827] border border-gray-800 rounded-2xl p-6">

      <h2 className="text-2xl font-bold mb-4">
        Who Controls the Rail
      </h2>

      <div className="space-y-4 text-gray-300 text-sm">

        <div>
          <p className="font-semibold text-white">Card Networks</p>
          <p>Visa, Mastercard</p>
        </div>

        <div>
          <p className="font-semibold text-white">Processors</p>
          <p>Stripe, Adyen, Razorpay</p>
        </div>

        <div>
          <p className="font-semibold text-white">Regulators (US Focus)</p>
          <p>Federal Reserve, CFPB</p>
        </div>

        <div>
          <p className="font-semibold text-white">Settlement Flow</p>
          <p>Network → Acquirer → Processor → Bank → Merchant</p>
        </div>

      </div>

    </div>
  );
}