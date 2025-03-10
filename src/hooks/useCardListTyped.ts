import { useState } from "react"

import { ICard } from "../model"
import { ICardListTyped } from "../@types"

export function useCardListTyped(cardsList: ICard[]) {
  const [cardListTyped, setCardListTyped] = useState<ICardListTyped[]>(
    cardsList.map((card, idx) => ({
      id: card.id,
      ownerName: card.name,
      cardNumber: card.number,
      securityCode: card.cvv,
      expirationDate: card.expirationDate,
      type: (idx % 2) ? 'black' : 'green'
    }))
  );

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
