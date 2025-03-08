import { createContext, ReactElement, useState } from "react";
import { ICard } from "../model/Card";
import {
  getCards as getCardsFromApi,
  createCards as createCardsFromApi
} from "../modules/network/endPoints";

interface ICardsContext {
  cardsList: ICard[];
  getCards: () => Promise<ICard[]>;
  createCards: (card: ICard) => Promise<ICard>;
}

const INITIAL_CONTEXT: ICardsContext = {
  cardsList: [],
  getCards: () => Promise.resolve([]),
  createCards: () => Promise.resolve({} as ICard)
}

export const CardsContext = createContext<ICardsContext>(INITIAL_CONTEXT);

export function CardsProvider({ children }: { children: ReactElement }) {
  const [cardsList, setCardsList] = useState<ICard[]>([]);

  async function getCards() {
    if (!cardsList.length) {
      const newList = await getCardsFromApi()

      setCardsList(newList)
      return newList
    }

    return cardsList
  }

  async function createCards(card: ICard) {
    const newCard = await createCardsFromApi(card)
    setCardsList([...cardsList, newCard])

    return newCard
  }

  return (
    <CardsContext.Provider value={{ cardsList, getCards, createCards }}>
      {children}
    </CardsContext.Provider>
  )
}
