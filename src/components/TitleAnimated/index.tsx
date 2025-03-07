import React, { useEffect } from 'react';
import { StyleProp, TextStyle } from 'react-native';
import Animated, { Easing, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';

import { TYPOGRAPHY, TVariantText } from '../../styles';

interface ITextProps {
  variant: TVariantText;
  style?: StyleProp<TextStyle>

  children: string;
}

export default function TitleAnimated({ variant, style, children }: ITextProps) {
  const textPosition = useSharedValue(-200)

  useEffect(() => {
    textPosition.value = withTiming(0, {
      duration: 500,
      easing: Easing.bounce
    })
  }, [])

  const titleStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: textPosition.value }]
    }
  })

  return (
    <Animated.Text
      style={[TYPOGRAPHY[variant] as TextStyle, titleStyle, style]}>
      {children}
    </Animated.Text>
  );
}
