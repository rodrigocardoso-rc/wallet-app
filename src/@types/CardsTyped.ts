

export interface ICardTyped {
  type: 'green' | 'black';
  id: string;
  cardNumber: string;
  securityCode: string;
  ownerName: string;
  expirationDate: string;
}

export type IFormCardData = Omit<ICardTyped, 'id' | 'type'>;