import styles from "./styles";
import { View } from "react-native";
import Text from "../../components/Text";
import { useContext, useState } from "react";
import { CardsContext } from "../../context/cardsContext";
import CardData from "../../components/CardData";
import { ICard } from "../../model/card";
import Button from "../../components/Button";
import AnimatedCard, { OVERLAP } from "../../components/CardData";

interface ICardListTyped extends ICard {
  type: 'green' | 'black'
}


export default function CardsListScreen() {
  const { cardsList } = useContext(CardsContext)
  const [selectedCardId, setSelectedCardId] = useState<string | null>(null);

  const [cardListTyped, setCardListTyped] = useState<ICardListTyped[]>(
    cardsList.map((card, idx) => ({
      ...card,
      type: (idx % 2) ? 'green' : 'black'
    })))


  function swapCards(cards: ICardListTyped[], idx: number): ICardListTyped[] {
    const lastIndex = cards.length - 1;

    const updatedCards = [...cards];
    [updatedCards[idx], updatedCards[lastIndex]] = [updatedCards[lastIndex], updatedCards[idx]];

    return updatedCards;
  }

  function onPressCard(cardId: string, idx: number) {
    if (selectedCardId) {
      setSelectedCardId(null);
      return;
    }

    setSelectedCardId(cardId);
    setCardListTyped((prevCards) => swapCards(prevCards, idx));
  }


  function onPressPayWithCard() {
    // TODO: Implements payment feature
  }

  function renderItem(card: ICardListTyped, idx: number,) {
    const { id, type } = card

    return (
      <AnimatedCard
        key={id}
        card={card}
        type={type}
        index={idx}
        selectedCardId={selectedCardId}
        onPress={() => onPressCard(id, idx)} />
    )
  }

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text variant="h4" color={styles.title.color}>
          Meus cartões
        </Text>
      </View>

      <View style={styles.bodyContainer}>
        {cardListTyped.map(renderItem)}

        <View style={[styles.actionsContainer, { marginTop: cardListTyped.length * OVERLAP }]}>
          {selectedCardId ? (
            <Button
              onPress={onPressPayWithCard}
              text="Pagar com este cartão" />
          ) : (
            <Text
              variant="paragraph"
              color={styles.bodyText.color}>
              Usar este cartão
            </Text>
          )}
        </View>
      </View>
    </View>
  )
}