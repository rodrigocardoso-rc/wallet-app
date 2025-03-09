import { CARD_SERVICE } from ".";
import { ICard } from "../../model1";
import { RestApi } from "../../modules1";

export function createCards(card: ICard) {
  return RestApi.httpPost<ICard>(CARD_SERVICE, card)
}