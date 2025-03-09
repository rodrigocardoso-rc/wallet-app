import { createContext, ReactElement, useState } from "react";
import { ICard } from "../model/card";
import {
  getCards as getCardsFromApi,
  createCards as createCardsFromApi
} from "../modules/network/endPoints";

interface ICardsContext {
  cardsList: ICard[];
  fetchCards: (syncFromApi?: boolean) => Promise<void>;
  addCard: (card: ICard) => Promise<ICard>;
}

const INITIAL_CONTEXT: ICardsContext = {
  cardsList: [],
  fetchCards: () => Promise.resolve(),
  addCard: () => Promise.resolve({} as ICard)
}

export const CardsContext = createContext<ICardsContext>(INITIAL_CONTEXT);

export function CardsProvider({ children }: { children: ReactElement }) {
  const [cardsList, setCardsList] = useState<ICard[]>([]);

  async function fetchCards(syncFromApi?: boolean) {
    if (!cardsList.length || syncFromApi) {
      const newList = await getCardsFromApi()

      setCardsList(newList)
    }
  }

  async function addCard(card: ICard) {
    const newCard = await createCardsFromApi(card)
    setCardsList([...cardsList, newCard])

    return newCard
  }

  return (
    <CardsContext.Provider value={{ cardsList, fetchCards, addCard }}>
      {children}
    </CardsContext.Provider>
  )
}
