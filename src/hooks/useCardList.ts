import { useContext } from "react"
import { CardsContext } from "../contexts";

export function useCardList() {
  const context = useContext(CardsContext)

  return context
}
