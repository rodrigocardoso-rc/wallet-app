import { CARD_SERVICE } from ".";
import { ICard } from "../../model";
import { httpPost } from "../../modules/RestApi";

export function createCards(card: ICard) {
  return httpPost<ICard>(CARD_SERVICE, card)
}