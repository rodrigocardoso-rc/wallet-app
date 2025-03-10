import { useEffect } from "react"
import { useIsFocused } from "@react-navigation/native"
import { Easing, useSharedValue, withTiming } from "react-native-reanimated"

const START_POSITION = 130
const END_POSITION = 150

export function useTitleAnimation(fromBottom?: boolean) {
  const isFocused = useIsFocused()
  const textPosition = useSharedValue(fromBottom ? START_POSITION : -START_POSITION)

  useEffect(() => {
    if (!isFocused)
      return

    textPosition.value = withTiming(0, {
      duration: 500,
      easing: Easing.bounce
    })

    return () => {
      textPosition.value = fromBottom
        ? END_POSITION
        : -END_POSITION
    }
  }, [isFocused])


  return textPosition
}
