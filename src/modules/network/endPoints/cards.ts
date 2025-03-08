import { ICard } from "../../../model/card"
import { httpGet, httpPost } from "../restAPI"

const CARD_SERVICE = '/cards'

export function getCards() {
  return httpGet<ICard[]>(CARD_SERVICE)
}

export function createCards(card: ICard) {
  return httpPost<ICard>(CARD_SERVICE, card)
}