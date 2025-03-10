import { useState } from "react"

import { ICardTyped } from "../@types"

export function useCardListTyped(cardsList: ICardTyped[]) {
  const [cardListTyped, setCardListTyped] = useState<ICardTyped[]>(cardsList);

  function swapCards(idx: number): void {
    const lastIndex = cardListTyped.length - 1
    const updatedCards = [...cardListTyped];

    [updatedCards[idx], updatedCards[lastIndex]] = [updatedCards[lastIndex], updatedCards[idx]]

    setCardListTyped(updatedCards)
  }

  return {
    cardListTyped,
    swapCards,
  }
}
