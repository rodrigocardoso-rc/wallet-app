import React, { useEffect } from 'react';
import { StyleProp, TextStyle } from 'react-native';
import Animated, { Easing, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';

import { TYPOGRAPHY, TVariantText } from '../../styles1';
import { useIsFocused } from '@react-navigation/native';

interface ITextProps {
  variant: TVariantText;
  fromBottom?: boolean
  style?: StyleProp<TextStyle>

  children: string;
}

export default function TitleAnimated({ variant, fromBottom, style, children }: ITextProps) {
  const isFocused = useIsFocused()
  const textPosition = useSharedValue(fromBottom ? 130 : -130)

  useEffect(() => {
    if (!isFocused) 
      return

    textPosition.value = withTiming(0, {
      duration: 500,
      easing: Easing.bounce
    })

    return () => {
      textPosition.value = fromBottom ? 150 : -150;
    };
  }, [isFocused])

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
