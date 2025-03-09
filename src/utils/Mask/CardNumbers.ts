

export function applyMaskCardNumber(value: string) {
  const cleanedValue = value.replace(/\D/g, '')

  return cleanedValue.replace(/(\d{4})(?=\d)/g, '$1 ').trim()
}
