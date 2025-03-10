

export interface ICardListTyped {
  type: 'green' | 'black';
  id: string;
  cardNumber: string;
  securityCode: string;
  ownerName: string;
  expirationDate: string;
}