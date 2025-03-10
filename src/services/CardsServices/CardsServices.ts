import { ICardTyped, IFormCardData } from "../../@types";
import { ICard } from "../../model";
import * as RestApi from "../../modules/RestApi/RestApi";
import * as Uuid from "../../modules/Uuid/Uuid";

export const CARD_SERVICE = '/cards';

export async function getCards(): Promise<ICardTyped[]>{
  const res = await RestApi.httpGet<ICard[]>(CARD_SERVICE);

  return res.map((card, idx) => ({
    id: card.id,
    ownerName: card.name,
    cardNumber: card.number,
    securityCode: card.cvv,
    expirationDate: card.expirationDate,
    type: (idx % 2) ? 'black' : 'green'
  }))
}

export async function createCards(card: IFormCardData): Promise<ICardTyped> {
  const cardDto: ICard = {
    id: Uuid.generateUUid(),
    number: card.cardNumber,
    name: card.ownerName,
    expirationDate: card.expirationDate,
    cvv: card.securityCode,
  };

  const res = await RestApi.httpPost<ICard>(CARD_SERVICE, cardDto);

  return {
    ...res,
    type: 'black',
    cardNumber: res.number,
    securityCode: res.cvv,
    ownerName: res.name
  }
}
