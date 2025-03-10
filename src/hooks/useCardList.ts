import { useContext } from "react"
import { CardsContext } from "../contexts/CardsContext";

export default function useCardList() {
  const context = useContext(CardsContext)

  return context
}
