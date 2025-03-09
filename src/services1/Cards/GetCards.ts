import { CARD_SERVICE } from ".";
import { ICard } from "../../model1";
import { RestApi } from "../../modules1";

export function getCards() {
  return RestApi.httpGet<ICard[]>(CARD_SERVICE)
}