// src/animations/useCardAnimation.ts
import { useState, useEffect, useRef } from "react"
import { Dimensions, View } from "react-native"
import { useSharedValue, withTiming, Easing } from "react-native-reanimated"
import { useSafeAreaInsets } from "react-native-safe-area-context"

import { OVERLAP, CARD_HEIGHT } from "../components/CardData"

const { height: screenHeight } = Dimensions.get("screen")

export function useCardAnimation(cardId: string, selectedCardId?: string | null) {
  const positionY = useSharedValue(0)
  const cardRef = useRef<View>(null)
  const insets = useSafeAreaInsets()

  const [unfocused, setUnfocused] = useState(false)

  useEffect(() => {
    if (!selectedCardId) {
      resetAnimation()
    } else if (selectedCardId === cardId) {
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
    positionY.value = executeAnimation(0)
  }

  function animateToFocus() {
    positionY.value = executeAnimation(positionY.value - OVERLAP)
  }

  function animateToDown() {
    setUnfocused(true)

    cardRef.current?.measure((_, __, ___, height, ____, pageY) => {
      const bottomLimit = screenHeight - height - insets.bottom
      const visibleOffset = CARD_HEIGHT - OVERLAP

      positionY.value = executeAnimation(bottomLimit + visibleOffset - pageY)
    })
  }

  return { positionY, cardRef, unfocused }
}
