export const CURRENCY = 'R$'

export function formatPrice(unitAmount: number) {
  const remainder = unitAmount % 100
  const integer = (unitAmount - remainder) / 100
  return `${integer},${remainder}`
}
