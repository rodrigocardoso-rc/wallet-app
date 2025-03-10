import { ReactElement } from "react"
import { View, SafeAreaView } from "react-native"

import SideItensAnimated from "../SideItemsAnimated/SideItensAnimated"
import { useBackgroundAnimation } from "../../hooks"
import styles from "./styles"

interface IBackgroundProps {
  animated?: boolean;
  children: ReactElement | ReactElement[];
}

export default function Background({ animated = false, children }: IBackgroundProps) {
  const itemDimension = useBackgroundAnimation()

  return (
    <View style={styles.container}>
      <SideItensAnimated
        animated={animated}
        dimension={itemDimension}
        position="topSide" />

      <SideItensAnimated
        animated={animated}
        dimension={itemDimension}
        position="bottomSide" />

      <SafeAreaView style={styles.overlay}>
        {children}
      </SafeAreaView>
    </View>
  )
}