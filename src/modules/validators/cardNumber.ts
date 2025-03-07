export function validateCardNumber(value: string) {
  return /^\d{16}$/.test(value)
}