import { createContext, ReactElement, useState } from "react";
import { ICard } from "../model";
import { Cards } from "../services1"

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

export function CardsProvider({ children }: { children: ReactElement | ReactElement[] }) {
  const [cardsList, setCardsList] = useState<ICard[]>([]);

  async function fetchCards(syncFromApi?: boolean) {
    if (!cardsList.length || syncFromApi) {
      const newList = await Cards.getCards()

      setCardsList(newList)
    }
  }

  async function addCard(card: ICard) {
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
