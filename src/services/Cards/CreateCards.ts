import { CARD_SERVICE } from ".";
import { ICard } from "../../model";
import { RestApi } from "../../modules";

export function createCards(card: ICard) {
  return RestApi.httpPost<ICard>(CARD_SERVICE, card)
}