export default function Header() {
  return (
    <div className="bg-[#111827] p-6 rounded-2xl shadow-lg border border-gray-800">
      <h1 className="text-4xl font-bold text-white">
        Merchant Settlement Waterfall
      </h1>

      <p className="text-gray-400 mt-3 text-lg">
        Track how gross card sales become net merchant deposits across the payment rail.
      </p>

      <div className="grid grid-cols-4 gap-4 mt-6">
        <div className="bg-[#1F2937] p-4 rounded-xl">
          <p className="text-gray-400 text-sm">Gross Sales</p>
          <h2 className="text-2xl font-bold">$125,000</h2>
        </div>

        <div className="bg-[#1F2937] p-4 rounded-xl">
          <p className="text-gray-400 text-sm">Fees</p>
          <h2 className="text-2xl font-bold text-red-400">-$4,700</h2>
        </div>

        <div className="bg-[#1F2937] p-4 rounded-xl">
          <p className="text-gray-400 text-sm">Reserve Hold</p>
          <h2 className="text-2xl font-bold text-yellow-400">-$5,000</h2>
        </div>

        <div className="bg-[#1F2937] p-4 rounded-xl">
          <p className="text-gray-400 text-sm">Net Settlement</p>
          <h2 className="text-2xl font-bold text-green-400">$114,850</h2>
        </div>
      </div>
    </div>
  )
}