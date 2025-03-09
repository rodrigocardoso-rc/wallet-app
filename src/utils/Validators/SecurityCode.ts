

export function securityCode(value: string) {
    return /^\d{3}$/.test(value)
  }