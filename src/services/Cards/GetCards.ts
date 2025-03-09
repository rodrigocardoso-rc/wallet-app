import { CARD_SERVICE } from ".";
import { ICard } from "../../model";
import { RestApi } from "../../modules";

export function getCards() {
  return RestApi.httpGet<ICard[]>(CARD_SERVICE)
}