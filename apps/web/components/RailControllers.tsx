export default function RailControllers() {
  return (
    <div className="bg-[#111827] p-6 rounded-2xl border border-gray-800 mt-6">
      <h2 className="text-2xl font-bold text-white mb-4">
        Who Controls the Rail
      </h2>

      <div className="space-y-4 text-gray-300">
        <div>
          <h3 className="font-semibold text-white">Card Networks</h3>
          <p>Visa, Mastercard</p>
        </div>

        <div>
          <h3 className="font-semibold text-white">Regulators</h3>
          <p>Federal Reserve, CFPB</p>
        </div>

        <div>
          <h3 className="font-semibold text-white">Settlement Flow</h3>
          <p>
            Networks → Acquirers → Processors → Settlement Banks → Merchants
          </p>
        </div>
      </div>
    </div>
  )
}