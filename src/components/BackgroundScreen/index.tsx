import { ReactElement, useEffect } from "react";
import { View, Dimensions } from "react-native";
import { useSharedValue, withRepeat, withSpring, withSequence } from "react-native-reanimated";

import SideItensAnimated from "../SideItemsAnimated";
import styles from "./styles";

const { width } = Dimensions.get('screen')

interface IBackgroundScreenProps {
  animated?: boolean,
  children: ReactElement | ReactElement[]
}

export default function BackgroundScreen({ animated = false, children }: IBackgroundScreenProps) {
  const itemDimension = useSharedValue(width);

  useEffect(() => {
    if (animated)
      createAnimation()
  }, [animated])

  function createAnimation() {
    itemDimension.value = withRepeat(
      withSequence(
        withSpring(width + width / 5, { duration: 1000 }),
        withSpring(width, { duration: 1000 })
      ),
      -1,
      true
    )
  }

  return (
    <View style={styles.container}>
      <SideItensAnimated
        dimension={itemDimension}
        position="topSide" />

      <SideItensAnimated
        dimension={itemDimension}
        position="bottomSide" />

      <View style={styles.overlay}>
        {children}
      </View>
    </View>
  )
}