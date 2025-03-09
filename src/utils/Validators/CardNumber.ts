

export function cardNumber(value: string) {
  return /^\d{16}$/.test(value)
}