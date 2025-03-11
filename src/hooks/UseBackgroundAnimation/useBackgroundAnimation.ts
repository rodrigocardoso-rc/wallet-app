import { useEffect } from "react"
import { Dimensions } from "react-native"
import { useSharedValue, withRepeat, withSpring, withSequence } from "react-native-reanimated"

export default function useBackgroundAnimation() {
const { width } = Dimensions.get('screen')
  const itemDimension = useSharedValue(width)

  useEffect(() => {
    itemDimension.value = withRepeat(
      withSequence(
        withSpring(width, { duration: 400 }),
        withSpring(width + width / 5, { duration: 400 }),
      ),
      -1,
      true
    )
  }, [width])

  return itemDimension
}
