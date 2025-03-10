

export function applyMaskCardNumber(value: string) {
  const cleanedValue = value.replace(/\D/g, '')

  return cleanedValue.replace(/(\d{4})(?=\d)/g, '$1 ').trim()
}

export function applyMaskExpirationDate(value: string) {
  const cleanedValue = value.replace(/\D/g, '')

  return cleanedValue.replace(/^(\d{2})(\d{2})$/, "$1/$2")
}

export function applyMaskHideCardNumber(value: string) {
  const protectedValue = value.replace(/\D/g, '').replace(/\d(?=\d{4})/g, "*")

  return protectedValue.replace(/(.{4})/g, "$1 ")
}