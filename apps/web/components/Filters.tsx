"use client";

import { Dispatch, SetStateAction } from "react";

type Filters = {
  merchant: string;
  processor: string;
  region: string;
};

type FiltersProps = {
  filters: Filters;
  setFilters: Dispatch<SetStateAction<Filters>>;
};

export default function Filters({ filters, setFilters }: FiltersProps) {
  return (
    <div className="bg-[#111827] p-6 rounded-2xl border border-gray-800">

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
          className="w-full p-2 bg-[#1F2937] text-white rounded mt-1"
        >
          <option value="Retail">Retail</option>
          <option value="Healthcare">Healthcare</option>
          <option value="E-Commerce">E-Commerce</option>
          <option value="Restaurant">Restaurant</option>
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
          className="w-full p-2 bg-[#1F2937] text-white rounded mt-1"
        >
          <option value="Stripe">Stripe</option>
          <option value="Adyen">Adyen</option>
          <option value="Razorpay">Razorpay</option>
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
          className="w-full p-2 bg-[#1F2937] text-white rounded mt-1"
        >
          <option value="Northeast">Northeast</option>
          <option value="West">West</option>
          <option value="South">South</option>
          <option value="Global">Global</option>
        </select>
      </div>

    </div>
  );
}