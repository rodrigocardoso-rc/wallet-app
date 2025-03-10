import Animated, { SharedValue, useAnimatedStyle } from 'react-native-reanimated';

import styles from './styles'

interface ISideItensAnimatedProps {
  dimension: SharedValue<number>;
  position: 'bottomSide' | 'topSide';
  animated?: boolean;
}

export default function SideItensAnimated({ dimension, position, animated }: ISideItensAnimatedProps) {
  const itemDimension = useAnimatedStyle(() => {
    return {
      height: dimension.value,
      width: dimension.value
    }
  })

  return (
    <Animated.View
      style={[
        styles.container,
        styles[position],
        animated && itemDimension
      ]}
    />
  );
}