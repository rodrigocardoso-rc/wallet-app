import { useEffect } from "react";
import { Easing, useSharedValue, withTiming } from "react-native-reanimated";


export default function useButtonAnimation() {
  const buttonPosition = useSharedValue(50)

  useEffect(() => {
    buttonPosition.value = withTiming(0, {
      duration: 500,
      easing: Easing.bounce
    })
  }, [])

  return buttonPosition
}