export function validateExpirationData(value: string) {
  return /^(0[1-9]|1[0-2])\d{2}$/.test(value)
}