export type FilterState = {
  merchant?: string;
  processor?: string;
};

export function getSettlementData(filters: FilterState) {
  const baseGross = 125000

  // Merchant multiplier
  let multiplier = 1

  if (filters?.merchant === "Amazon") multiplier *= 1.4
  if (filters?.merchant === "Flipkart") multiplier *= 1.2
  if (filters?.merchant === "Shopify") multiplier *= 0.9

  // Processor impact
  if (filters?.processor === "Stripe") multiplier *= 1.05
  if (filters?.processor === "Razorpay") multiplier *= 0.95
  if (filters?.processor === "Adyen") multiplier *= 1.02

  const gross = Math.round(baseGross * multiplier)

  const fees = Math.round(gross * 0.038) // 3.8%
  const reserve = Math.round(gross * 0.04) // 4%
  const net = gross - fees - reserve

  return {
    gross,
    fees,
    reserve,
    net,
  }
}

export function getDelayData(filters: FilterState) {
  let base = [24, 30, 18, 42, 36, 20]

  // Merchant effects on settlement speed
  if (filters?.merchant === "Amazon") base = base.map(v => v + 6)
  if (filters?.merchant === "Flipkart") base = base.map(v => v + 3)
  if (filters?.merchant === "Shopify") base = base.map(v => v - 2)

  // Processor effects
  if (filters?.processor === "Stripe") base = base.map(v => v - 2)
  if (filters?.processor === "Razorpay") base = base.map(v => v + 1)
  if (filters?.processor === "Adyen") base = base.map(v => v - 1)

  return [
    { day: "Mon", delay: base[0] },
    { day: "Tue", delay: base[1] },
    { day: "Wed", delay: base[2] },
    { day: "Thu", delay: base[3] },
    { day: "Fri", delay: base[4] },
    { day: "Sat", delay: base[5] },
  ]
}