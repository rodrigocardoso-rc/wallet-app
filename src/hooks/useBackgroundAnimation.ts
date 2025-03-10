import { useEffect } from "react"
import { Dimensions } from "react-native"
import { useSharedValue, withRepeat, withSpring, withSequence } from "react-native-reanimated"

const { width } = Dimensions.get('screen')

export function useBackgroundAnimation() {
  const itemDimension = useSharedValue(width)

  useEffect(() => {
    itemDimension.value = withRepeat(
      withSequence(
        withSpring(width, { duration: 1000 }),
        withSpring(width + width / 5, { duration: 1000 })
      ),
      -1,
      true
    )
  }, [])

  return itemDimension
}
