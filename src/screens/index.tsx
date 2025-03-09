import CardsListScreen, { NAME_CARDS_LIST_SCREEN } from "./CardsList";
import HomeScreen, { NAME_HOME_SCREEN } from "./Home";
import LoadingWalletScreen, { NAME_LOADING_WALLET_SCREEN } from "./LoadingWallet";
import NewCardScreen, { NAME_NEW_CARD_SCREEN } from "./NewCard";
import CardSuccessfulScreen, { NAME_CARD_SUCCESSFUL_SCREEN } from "./CardSuccessful";

export {
  CardsListScreen,
  HomeScreen,
  LoadingWalletScreen,
  NewCardScreen,
  CardSuccessfulScreen
}

export enum SCREENS_NAME {
  home = NAME_HOME_SCREEN,
  newCard = NAME_NEW_CARD_SCREEN,
  cardSuccessful = NAME_CARD_SUCCESSFUL_SCREEN,
  loadingWallet = NAME_LOADING_WALLET_SCREEN,
  cardsList = NAME_CARDS_LIST_SCREEN
}