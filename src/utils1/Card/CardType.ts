
export function getCardType(cardIdx: number) {
  return (cardIdx % 2) ? 'black' : 'green'
}