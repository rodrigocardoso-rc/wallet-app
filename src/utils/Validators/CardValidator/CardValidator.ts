

export function cardNumber(value: string) {
  return /^\d{16}$/.test(value)
}

export function expirationDate(value: string) {
  return /^(0[1-9]|1[0-2])\d{2}$/.test(value)
}

export function ownerName(value: string) {
  return /^[A-Za-zÀ-ÿ]+\s[A-Za-zÀ-ÿ]+(?:\s[A-Za-zÀ-ÿ]+)*$/.test(value.trim())
}

export function securityCode(value: string) {
  return /^\d{3}$/.test(value)
}