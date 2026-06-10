"use client";

import { useState } from "react";

export default function InfoTooltip({ text }: { text: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative inline-block ml-2">
      <span
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
        className="cursor-pointer text-gray-400 hover:text-white"
      >
        ⓘ
      </span>

      {open && (
        <div className="absolute z-50 left-1/2 -translate-x-1/2 mt-2 w-56 bg-[#111827] border border-gray-700 text-xs text-gray-200 p-3 rounded-lg shadow-lg">
          {text}
        </div>
      )}
    </div>
  );
}