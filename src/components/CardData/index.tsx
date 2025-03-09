import React, { useEffect, useRef, useState } from "react";
import { View, Dimensions, TouchableWithoutFeedback } from "react-native";
import Animated, { useSharedValue, useAnimatedStyle, withTiming, Easing } from "react-native-reanimated";
import { ICard } from "../../model/card";
import Text from '../Text';
import styles from "./styles";
import { cardNumbersHideDataApplyMask, expirationDateApplyMask } from "../../modules/mask";
import { useSafeAreaInsets } from "react-native-safe-area-context";

interface ICardDataProps {
  card: ICard
  type: 'green' | 'black'
  index?: number
  selectedCardId?: string | null
  onPress?: () => void
}

const { height: screenHeight } = Dimensions.get("screen")
export const CARD_HEIGHT = 200
export const OVERLAP = 40

export default function CardData({
  card,
  type,
  index = 0,
  selectedCardId,
  onPress,
}: ICardDataProps) {
  const { name, number, expirationDate, id } = card
  const title = type === "green" ? "Green Card" : "Black Card"

  const insets = useSafeAreaInsets()
  const positionY = useSharedValue(index * OVERLAP)
  const cardRef = useRef<View>(null)

  const [unfocused, setUnfocused] = useState(false)

  useEffect(() => {
    if (!selectedCardId) {
      resetAnimation()
    } else if (selectedCardId === id) {
      animateToFocus()
    } else {
      animateToDown()
    }
  }, [selectedCardId])

  function executeAnimation(toValue: number) {
    return withTiming(toValue, { duration: 300, easing: Easing.elastic(1.5) })
  }

  function resetAnimation() {
    setUnfocused(false)
    positionY.value = executeAnimation(OVERLAP * index)
  }

  function animateToFocus() {
    positionY.value = executeAnimation(0)
  }

  function animateToDown() {
    setUnfocused(true);

    cardRef.current?.measure((_, __, ___, height, ____, pageY) => {
      const bottomLimit = screenHeight - height - insets.bottom
      const visibleOffset = CARD_HEIGHT - OVERLAP

      positionY.value = executeAnimation(bottomLimit + visibleOffset - pageY)
    });
  }

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: positionY.value }],
  }));

  return (
    <TouchableWithoutFeedback onPress={onPress} style={styles.cardWrapper}>
      <Animated.View
        ref={cardRef}
        style={[
          styles.container,
          styles[type],
          animatedStyle,
          unfocused && styles.unfocused
        ]}
      >
        <Text variant={"h5"} color={styles[type].color}>{title}</Text>

        <View style={styles.containerText}>
          <Text
            variant={"paragraph"}
            color={styles[type].color}>
            {name}
          </Text>

          <Text
            variant={"paragraph"}
            color={styles[type].color}>
            {cardNumbersHideDataApplyMask(number)}
          </Text>

          <Text
            variant={"paragraph"}
            color={styles[type].color}>
            Validade: {expirationDateApplyMask(expirationDate)}
          </Text>
        </View>
      </Animated.View>
    </TouchableWithoutFeedback>
  );
}

