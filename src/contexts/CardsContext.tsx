import { createContext, ReactElement, useState } from "react"
import { Cards } from "../services"
import { ICardTyped, IFormCardData } from "../@types";

interface ICardsContext {
  cardsList: ICardTyped[];
  fetchCards: (syncFromApi?: boolean) => Promise<void>;
  addCard: (card: IFormCardData) => Promise<ICardTyped>;
}

const INITIAL_CONTEXT: ICardsContext = {
  cardsList: [],
  fetchCards: () => Promise.resolve(),
  addCard: () => Promise.resolve({} as ICardTyped)
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

  return (
    <CardsContext.Provider value={{ cardsList, fetchCards, addCard }}>
      {children}
    </CardsContext.Provider>
  )
}
