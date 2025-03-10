import { getCards, createCards } from "./CardsServices";
import * as RestApi from "../../modules/RestApi/RestApi";

const cardFromApiMock = {
  id: "4ec42ba9-50af-40d2-af90-8312edbd9ca2",
  number: "3529 5435 3355 8727",
  name: "John Doe",
  expirationDate: "04/30",
  cvv: "317"
}

const cardFromFormMock = {
  cardNumber: "3529 5435 3355 8727",
  ownerName: "John Doe",
  securityCode: "317",
  expirationDate: "04/30"
}

jest.mock('expo-constants', () => ({
  expoConfig: {
    extra: { apiUrl: '' },
  },
}));

describe("CardData", () => {
  test("return list of cards coming from the api in model ICardTyped", async () => {
    jest.spyOn(RestApi, 'httpGet')
      .mockImplementation(() => Promise.resolve([cardFromApiMock]));

    const [card, ...rest] = await getCards();

    expect(card.id).toBeDefined();
    expect(card.type).toBeDefined();
    expect(card.cardNumber).toBeDefined();
    expect(card.expirationDate).toBeDefined();
    expect(card.ownerName).toBeDefined();
    expect(card.securityCode).toBeDefined();
  });

  test("should creates card in template IFormCardData and returns in template ICardTyped", async () => {
    jest.spyOn(RestApi, 'httpPost')
      .mockImplementation(() => Promise.resolve(cardFromApiMock));

    const card = await createCards(cardFromFormMock);

    expect(card.id).toBeDefined();
    expect(card.type).toBeDefined();
    expect(card.cardNumber).toBeDefined();
    expect(card.expirationDate).toBeDefined();
    expect(card.ownerName).toBeDefined();
    expect(card.securityCode).toBeDefined();
  });
});