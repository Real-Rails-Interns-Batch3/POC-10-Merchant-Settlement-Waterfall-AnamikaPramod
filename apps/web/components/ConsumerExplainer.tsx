export default function ConsumerExplainer() {
  return (
    <div className="bg-[#111827] border border-gray-800 rounded-2xl p-6">
      <h2 className="text-2xl font-bold mb-4">
        How a Card Payment Reaches a Merchant
      </h2>

      <div className="space-y-2 text-gray-300">
        <p>Customer makes a card purchase</p>
        <p>↓</p>
        <p>Visa / Mastercard network routes transaction</p>
        <p>↓</p>
        <p>Processor handles settlement</p>
        <p>↓</p>
        <p>Acquiring bank receives funds</p>
        <p>↓</p>
        <p>Merchant receives net settlement</p>
      </div>
    </div>
  );
}