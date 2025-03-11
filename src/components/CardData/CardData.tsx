import React from "react"
import { View, TouchableWithoutFeedback, TouchableOpacity } from "react-native"
import Animated, { useAnimatedStyle } from "react-native-reanimated"

import Text from "../Text/Text";
import * as CardMasks from '../../utils/Mask/CardMasks/CardMasks'
import useCardAnimation, { CARD_HEIGHT, OVERLAP, } from "../../hooks/UseCardAnimation/useCardAnimation"
import { ICardTyped } from "../../@types/CardsTyped"

import styles from "./styles"

interface ICardDataProps {
  card: ICardTyped;
  index?: number;
  selectedCardId?: string | null;
  onPress?: () => void
}

export default function CardData({
  card,
  index = 0,
  selectedCardId,
  onPress,
}: ICardDataProps) {
  const { ownerName, cardNumber, expirationDate, id, type } = card
  const { positionY, cardRef, unfocused } = useCardAnimation(id, selectedCardId)

  const title = type === "green"
    ? "Green Card"
    : "Black Card"

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: positionY.value }],
  }))

  return (

    <Animated.View
      ref={cardRef}
      style={[
        styles.animatedContainer,
        styles[type],
        animatedStyle,
        index > 0 && { marginTop: -(CARD_HEIGHT - OVERLAP) },
        unfocused && styles.unfocused
      ]}>
      <TouchableOpacity
        activeOpacity={0}
        onPress={onPress}
        style={styles.container}>
        <Text
          variant={"h5"}
          color={styles[type].color}>
          {title}
        </Text>

        <View style={styles.containerText}>
          <Text
            variant={"paragraph"}
            color={styles[type].color}>
            {ownerName}
          </Text>

          <Text
            variant={"paragraph"}
            color={styles[type].color}>
            {CardMasks.applyMaskHideCardNumber(cardNumber)}
          </Text>

          <Text
            variant={"paragraph"}
            color={styles[type].color}>
            Validade: {CardMasks.applyMaskExpirationDate(expirationDate)}
          </Text>
        </View>
      </TouchableOpacity>
    </Animated.View >
  )
}