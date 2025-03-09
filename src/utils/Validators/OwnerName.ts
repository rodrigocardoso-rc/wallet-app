
export function ownerName(value: string) {
  return /^[A-Za-zÀ-ÿ]+\s[A-Za-zÀ-ÿ]+(?:\s[A-Za-zÀ-ÿ]+)*$/.test(value.trim())
}