import { ICard } from "../model";
import { RestApi } from "../modules";

const CARD_SERVICE = '/cards';

export function getCards() {
  return RestApi.httpGet<ICard[]>(CARD_SERVICE);
}

export function createCards(card: ICard) {
  return RestApi.httpPost<ICard>(CARD_SERVICE, card);
}
