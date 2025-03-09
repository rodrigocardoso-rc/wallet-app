import { CARD_SERVICE } from ".";
import { ICard } from "../../model";
import { httpGet } from "../../modules/RestApi";

export function getCards() {
  return httpGet<ICard[]>(CARD_SERVICE)
}