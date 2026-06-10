"use client";

export default function Filters({ filters, setFilters }: any) {
  return (
    <div>
      <h1 className="text-red-500 text-2xl mb-4">
        FILTER TEST
      </h1>

      <p className="mb-2">
        Merchant: {filters.merchant}
      </p>

      <p className="mb-4">
        Processor: {filters.processor}
      </p>

      <select
        value={filters.merchant}
        onChange={(e) => {
          console.log("Merchant changed:", e.target.value);

          setFilters({
            ...filters,
            merchant: e.target.value,
          });
        }}
        className="w-full p-2 bg-gray-700 text-white mb-4"
      >
        <option value="Retail">Retail</option>
        <option value="Healthcare">Healthcare</option>
        <option value="Restaurant">Restaurant</option>
      </select>

      <select
        value={filters.processor}
        onChange={(e) => {
          console.log("Processor changed:", e.target.value);

          setFilters({
            ...filters,
            processor: e.target.value,
          });
        }}
        className="w-full p-2 bg-gray-700 text-white"
      >
        <option value="Stripe">Stripe</option>
        <option value="Adyen">Adyen</option>
      </select>
    </div>
  );
}