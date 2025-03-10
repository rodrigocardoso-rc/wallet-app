import styles from "./styles";
import { View } from "react-native";
import { Text, CardData, Button } from "../../components";
import { useContext, useState } from "react";
import { CardsContext } from "../../contexts/CardsContext";
import { useCardListTyped } from "../../hooks";
import { ICardTyped } from "../../@types";

export default function CardsListScreen() {
  const { cardsList } = useContext(CardsContext)
  const [selectedCardId, setSelectedCardId] = useState<string | null>(null);

  const { cardListTyped, swapCards } = useCardListTyped(cardsList);

  function onPressCard(cardId: string, idx: number) {
    if (selectedCardId) {
      setSelectedCardId(null);
      return;
    }

    setSelectedCardId(cardId);
    swapCards(idx)
  }

  function onPressPayWithCard() {
    // TODO: Implements payment feature
  }

  function renderItem(card: ICardTyped, idx: number,) {
    const { id } = card

    return (
      <CardData
        key={id}
        card={card}
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

        <View style={[styles.actionsContainer]}>
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