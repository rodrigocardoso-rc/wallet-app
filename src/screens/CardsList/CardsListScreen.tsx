import { useCallback, useState } from "react";
import { StatusBar, View } from "react-native";

import { ICardTyped } from "../../@types/CardsTyped";
import Text from "../../components/Text/Text";
import Button from "../../components/Button/Button";
import CardData from "../../components/CardData/CardData";
import useCardList from "../../hooks/UseCardList/useCardList";

import styles from "./styles";
import { useFocusEffect } from "@react-navigation/native";

export default function CardsListScreen() {
  const { cardsList, swapCards } = useCardList();

  const [selectedCardId, setSelectedCardId] = useState<string | null>(null);

  useFocusEffect(
    useCallback(() => {
      StatusBar.setBarStyle('dark-content'); // Troca para branco ao entrar

      return () => {
        StatusBar.setBarStyle('light-content'); // Volta ao padrão ao sair
      };
    }, [])
  );

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
        {cardsList.map(renderItem)}

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