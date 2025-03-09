

export function applyMaskHideCardNumber(value: string) {
  const protectedValue = value.replace(/\D/g, '').replace(/\d(?=\d{4})/g, "*")

  return protectedValue.replace(/(.{4})/g, "$1 ")
}