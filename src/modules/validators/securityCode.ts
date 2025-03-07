export function validateSecurityCode(value: string) {
    return /^\d{3}$/.test(value)
  }