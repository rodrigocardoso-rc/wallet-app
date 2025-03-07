export function expirationDateApplyMask(value: string) {
  const cleanedValue = value.replace(/\D/g, '')

  return cleanedValue.replace(/^(\d{2})(\d{2})$/, "$1/$2")
}
