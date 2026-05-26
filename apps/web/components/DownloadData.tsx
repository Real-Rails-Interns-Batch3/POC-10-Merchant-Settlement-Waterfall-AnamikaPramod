"use client"
export default function DownloadData() {
  const downloadCSV = () => {
    const link = document.createElement("a")
    link.href = "/sample-data/merchant_settlement_sample.csv"
    link.download = "merchant_settlement_sample.csv"
    link.click()
  }

  return (
    <div className="bg-[#111827] p-6 rounded-2xl border border-gray-800 mt-6">
      <h2 className="text-white text-xl font-bold mb-3">
        Download Sample Data
      </h2>

      <p className="text-gray-400 mb-4">
        Export merchant settlement dataset for analysis.
      </p>

      <button
        onClick={downloadCSV}
        className="bg-blue-600 px-4 py-2 rounded-lg"
      >
        Download CSV
      </button>
    </div>
  )
}