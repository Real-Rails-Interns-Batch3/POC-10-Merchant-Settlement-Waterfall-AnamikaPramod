"use client"

export default function Filters({ filters, setFilters }: any) {
  return (
    <div className="bg-[#111827] p-6 rounded-2xl border border-gray-800 mt-6">

      <h2 className="text-white text-xl font-bold mb-4">
        Filters
      </h2>

      {/* Merchant */}
      <div className="mb-4">
        <p className="text-gray-400 text-sm">Merchant</p>
        <select
          value={filters.merchant}
          onChange={(e) =>
            setFilters({ ...filters, merchant: e.target.value })
          }
          className="w-full p-2 bg-[#1F2937] text-white rounded"
        >
          <option>All</option>
          <option>Amazon</option>
          <option>Flipkart</option>
          <option>Shopify</option>
        </select>
      </div>

      {/* Processor */}
      <div className="mb-4">
        <p className="text-gray-400 text-sm">Processor</p>
        <select
          value={filters.processor}
          onChange={(e) =>
            setFilters({ ...filters, processor: e.target.value })
          }
          className="w-full p-2 bg-[#1F2937] text-white rounded"
        >
          <option>All</option>
          <option>Stripe</option>
          <option>Razorpay</option>
          <option>Adyen</option>
        </select>
      </div>

      {/* Region */}
      <div>
        <p className="text-gray-400 text-sm">Region</p>
        <select
          value={filters.region}
          onChange={(e) =>
            setFilters({ ...filters, region: e.target.value })
          }
          className="w-full p-2 bg-[#1F2937] text-white rounded"
        >
          <option>All</option>
          <option>India</option>
          <option>US</option>
          <option>EU</option>
        </select>
      </div>

    </div>
  )
}