import React from "react"
import { View, TouchableWithoutFeedback } from "react-native"
import Animated, { useAnimatedStyle } from "react-native-reanimated"

import { Text } from '../'
import { Mask } from '../../utils'
import { useCardAnimation } from "../../hooks/useCardAnimation"
import { ICardListTyped } from "../../@types"

import styles from "./styles"

interface ICardDataProps {
  card: ICardListTyped;
  index?: number;
  selectedCardId?: string | null;
  onPress?: () => void
}

export const CARD_HEIGHT = 200
export const OVERLAP = 60

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
    <TouchableWithoutFeedback
      onPress={onPress}
      style={styles.cardWrapper}>
      <Animated.View
        ref={cardRef}
        style={[
          styles.container,
          styles[type],
          animatedStyle,
          index > 0 && { marginTop: -(CARD_HEIGHT - OVERLAP) },
          unfocused && styles.unfocused
        ]}>
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
            {Mask.applyMaskHideCardNumber(cardNumber)}
          </Text>

          <Text
            variant={"paragraph"}
            color={styles[type].color}>
            Validade: {Mask.applyMaskExpirationDate(expirationDate)}
          </Text>
        </View>
      </Animated.View>
    </TouchableWithoutFeedback>
  )
}