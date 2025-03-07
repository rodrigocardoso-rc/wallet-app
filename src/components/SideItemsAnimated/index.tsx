import Animated, { SharedValue } from 'react-native-reanimated';
import styles from './styles'

interface ISideItensAnimatedProps {
  dimension: SharedValue<number>
  position: 'bottomSide' | 'topSide'
}

export default function SideItensAnimated({ dimension, position }: ISideItensAnimatedProps) {

  return (
    <Animated.View
      style={[
        styles.container,
        styles[position],
        {
          height: dimension,
          width: dimension
        }
      ]}
    />
  );
}