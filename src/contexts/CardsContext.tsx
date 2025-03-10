import { createContext, ReactElement, useState } from "react"

import * as Cards from "../services/CardsServices/CardsServices"
import { ICardTyped, IFormCardData } from "../@types/CardsTyped";

interface ICardsContext {
  cardsList: ICardTyped[];
  fetchCards: (syncFromApi?: boolean) => Promise<void>;
  addCard: (card: IFormCardData) => Promise<ICardTyped>;
  swapCards: (idx: number) => void;
}

const INITIAL_CONTEXT: ICardsContext = {
  cardsList: [],
  fetchCards: () => Promise.resolve(),
  addCard: () => Promise.resolve({} as ICardTyped),
  swapCards: () => { },
}

export const CardsContext = createContext<ICardsContext>(INITIAL_CONTEXT)

export function CardsProvider({ children }: { children: ReactElement | ReactElement[] }) {
  const [cardsList, setCardsList] = useState<ICardTyped[]>([])

  async function fetchCards(syncFromApi?: boolean) {
    if (!cardsList.length || syncFromApi) {
      const newList = await Cards.getCards()

      setCardsList(newList)
    }
  }

  async function addCard(card: IFormCardData) {
    const newCard = await Cards.createCards(card)
    setCardsList([...cardsList, newCard])

    return newCard
  }

  function swapCards(idx: number): void {
    const lastIndex = cardsList.length - 1
    const updatedCards = [...cardsList];

    [updatedCards[idx], updatedCards[lastIndex]] = [updatedCards[lastIndex], updatedCards[idx]]

    setCardsList(updatedCards)
  }

  return (
    <CardsContext.Provider value={{ cardsList, fetchCards, addCard, swapCards }}>
      {children}
    </CardsContext.Provider>
  )
}
