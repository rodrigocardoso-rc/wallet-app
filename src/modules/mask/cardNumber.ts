export function cardNumberApplyMask(value: string) {
  const cleanedValue = value.replace(/\D/g, '')

  return cleanedValue.replace(/(\d{4})(?=\d)/g, '$1 ').trim()
}

export function cardNumbersHideDataApplyMask(value: string) {
  const protectedValue = value.replace(/\d(?=\d{4})/g, "*")

  return protectedValue.replace(/(.{4})/g, "$1 ")
}